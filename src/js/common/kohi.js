const shared = {
  runner: null,
}

const FAIL_RESULT   = 'fail';
const PASS_RESULT   = 'pass';
const TODO_RESULT   = 'todo';

export function addChildSpec (details = {}) {
  let { parent, spec } = details;
  if (parent) {
    if (parent.children === undefined) { 
      parent.children = [];
    }
    parent.children.push (spec); 
  }
}

export function createRunner () {
  let runner, root;
  root = createSpec ({ name: 'root spec', id: 1, isRoot: true });
  runner = {
    only: [],
    registry: {},
    root,
    idcounter: 1,
    stats: {
      fail: 0,
      pass: 0,
      todo: 0,
    },
  }
  runner.registry [root.id] = root;
  return runner;
}

export function createSpec (details = {}) {
  let { 
    target,
    id = createId (),
    isRoot = false, 
    name = 'un-named spec', 
    parent = null,
    runner = shared.runner ? getRunner () : null,
  } = details;
  let spec;

  spec = {
    // after: {
    //   each: [],
    //   list: [],
    // },
    // before: {
    //   each: [],
    //   list: [],
    // },
    // children: [],
    id,
    isRoot,
    name,
    parent: parent ? parent.id : 0,
    stats: {
      duration: 0,
      end: 0,
      result: TODO_RESULT,
      start: 0,
    },
    target,
  }

  addChildSpec ({ parent, spec })

  if (runner) { 
    runner.registry [spec.id] = spec 
  }
  return spec;
}

export function createId () {
  let id, runner;
  runner = getRunner ();
  id = runner.idcounter + 1;
  runner.idcounter = runner.idcounter + 1;
  return id;
}

export function getRunner () {
  let runner;
  runner = shared.runner;
  if (!runner) {
    runner = createRunner ();
    shared.runner = runner;
  }
  return runner;
}

export async function run () {
  let end, runner, start, time;

  // Prepare the specs for running
  start = Date.now ();
  runner = getRunner ();

  // Run the specs
  await runNextSpec ({ 
    index: 0,
    list: [runner.root],
    runner, 
  });
  console.log ('- results:', runner.stats);
  
  // Show the results
  end = Date.now ();
  time = end - start;
  console.log (`- time(ms): [${time}]   start: [${start}] end: [${end}]`);
  // console.log (runner);
  // console.log (JSON.stringify (runner.root, null, 2))
  await afterTests ();
}

async function afterTests () {
  console.log ('- coverage:', window.__coverage__);
  console.log ('- all done');
  await checkApiStatus ();
  await postCodeCoverage ();
}

async function checkApiStatus (details = {}) {
  let reply;
  try {
    reply = await fetch ('/api/kohi/reporter/coverage', {
    // reply = await fetch ('/api/kohi/coverage/client', {
    // reply = await fetch ('http://localhost:8888/coverage/client', {
    // reply = await fetch ('/api/kohi/coverage/client', {
    // reply = await fetch ('/bob/api/coverage/' + Date.now (), {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify ( window.__coverage__ ),
      body: JSON.stringify ({ coverage: window.__coverage__ }),
    });
    if (reply.status < 400) {
      reply = await reply.json ();
      console.log (reply);
    }
  }
  catch (err) {
    console.error (err);
  }
}

async function postCodeCoverage (details = {}) {
  let reply;
  try {
    // reply = await fetch ('/api/kohi/reporter/coverage', {
    // // reply = await fetch ('/api/kohi/coverage/client', {
    reply = await fetch ('http://localhost:8888/coverage/client', {
    // // reply = await fetch ('/api/kohi/coverage/client', {
    // // reply = await fetch ('/bob/api/coverage/' + Date.now (), {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify ( window.__coverage__ ),
      // body: JSON.stringify ({ coverage: window.__coverage__ }),
    });
    if (reply.status < 400) {
        reply = await reply.json ();
      console.log (reply);
    }
  }
  catch (err) {
    console.error (err);
  }
}

async function runNextSpec (details = {}) {
  let { index, list, runner } = details;
  let result, spec, type;
  
  spec = list [index];
  details.index = details.index + 1;
  if (spec) {
    if (spec.target) {
      try {
        type = spec.target.constructor.name;
        
        if (type === 'Function' || type === 'AsyncFunction') {
          result = spec.target ();
          if (result && result.constructor.name === 'Promise') {
            result = await result;
          }
          runner.stats.pass = runner.stats.pass + 1;
          spec.stats.status = PASS_RESULT;
        }
        else if (type === 'Object') {
          if (Object.keys (spec.target).length === 0) {
            setSpecAsTodo ({ runner, spec });
          }
        }
        else {
          setSpecAsTodo ({ runner, spec });
        }
      }
      catch (err) {
        runner.stats.fail = runner.stats.fail + 1;
        spec.stats.status = FAIL_RESULT;
        console.error (`- FAIL: ${spec.name}`);
        console.error (err);
      }
    }
    else {
      setSpecAsTodo ({ runner, spec });
    }

    // Run the child specs
    if (spec.children && spec.children.length > 0) {
      await runNextSpec ({
        index: 0,
        list: spec.children,
        runner,
      });
    }

    // Run the next sibling spec
    await runNextSpec (details);
  }
}

// function setSpecAsPass (details = {}) {}

// function setSpecAsFail (details = {}) {}

function setSpecAsTodo (details = {}) {
  let { runner, spec } = details;
  if (!spec.isRoot) {
    runner.stats.todo = runner.stats.todo + 1;
  }
}

export function specs (details = {}, parent) {
  let end, i, key, keys, runner, spec, target, type;

  runner = getRunner ();
  if (!parent) { 
    parent = runner.root;
  }

  keys = Object.keys (details);
  end = keys.length;

  for (i = 0; i < end; i++) {
    key = keys [i];
    target = details [key];
    spec = createSpec ({ name: key, parent });

    if (target) {
      type = target.constructor.name;
      if (type === 'Object') {
        specs (target, spec)
      }
      spec.target = target;
    }
  }
}


/*
  // try {

    // reply = await fetch ('http://localhost:5001/status', {
    // reply = await fetch ('http://localhost:5001/kohi/reporter/coverage', {
    // reply = await fetch ('http://localhost:5000/kohi/reporter/coverage', {
    // reply = await fetch ('http://localhost:5000/kohi/reporter/coverage', {
    // reply = await fetch ('http://localhost:5001/a', {
    // reply = await fetch ('http://localhost:5002/a', {
    // reply = await fetch ('/api/kohi/reporter/coverage', {
    // const hash = Date.now ();
    // const hash = 'abc';
    
    // reply = await fetch ('/api/kohi/reporter/coverage', {
    // // reply = await fetch ('/api/kohi/coverage/client', {
    // // reply = await fetch ('http://localhost:8888/coverage/client', {
    // // reply = await fetch ('/api/kohi/coverage/client', {
    // // reply = await fetch ('/bob/api/coverage/' + Date.now (), {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify ( window.__coverage__ ),
    //   // body: JSON.stringify ({ coverage: window.__coverage__ }),
    // });
    // if (reply.status < 400) {
    //     reply = await reply.json ();
    //   console.log (reply);
    // }

    // reply = await fetch ('http://localhost:9000/api/coverage/' + hash, {
    // // reply = await fetch ('/bob/api/coverage/' + Date.now (), {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify ( window.__coverage__ ),
    //   // body: JSON.stringify ({ coverage: window.__coverage__ }),
    // });
    // if (reply.status < 400) {
    //     reply = await reply.json ();
    //   console.log (reply);
    // }
    
    // reply = await fetch ('http://localhost:9000/api/coverage/' + hash, {
    // // reply = await fetch ('/bob/api/coverage/' + Date.now (), {
    //   method: 'GET',
    //   // headers: {
    //   //   'Accept': 'application/json',
    //   //   'Content-Type': 'application/json',
    //   // },
    //   // body: JSON.stringify ( window.__coverage__ ),
    //   // body: JSON.stringify ({ coverage: window.__coverage__ }),
    // });
    // if (reply.status < 400) {
    //   reply = await reply.json ();
    //   console.log (reply);
    // }
  // }
  // catch (err) {
  //   console.error (err);
  // }
*/
