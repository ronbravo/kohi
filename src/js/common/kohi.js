const shared = {
  runner: null,
}

const FAIL_RESULT   = 'fail';
const PASS_RESULT   = 'pass';
const TODO_RESULT   = 'todo';

const DONE_STATUS   = 'done';
const READY_STATUS  = 'ready';

export function createRunner () {
  let runner, root;
  root = createSpec ({ name: 'root spec', isRoot: true });
  runner = {
    only: [],
    root,
    stats: {
      fail: 0,
      pass: 0,
      todo: 0,
    },
  }  
  return runner;
}

export function createSpec (details = {}) {
  let { 
    target, 
    isRoot = false, 
    name = 'un-named spec', 
    parent = null,
  } = details;
  let spec;

  spec = {
    after: {
      each: [],
      list: [],
    },
    before: {
      each: [],
      list: [],
    },
    children: [],
    isRoot,
    name,
    parent,
    stats: {
      duration: 0,
      end: 0,
      result: TODO_RESULT,
      start: 0,
    },
    status: READY_STATUS,
    target,
  }
  if (parent) { parent.children.push (spec); }
  return spec;
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
  let runner;
  runner = getRunner ();
  await runNextSpec ({ 
    index: 0,
    list: [runner.root],
    runner, 
  });
  console.log ('- results:', runner.stats);
}

async function runNextSpec (details = {}) {
  let { index, list, runner } = details;
  let result, spec;
  
  spec = list [index];
  details.index = details.index + 1;
  if (spec) {
    console.log (`- run spec: ${spec.name}`)
    if (spec.target) {
      try {
        result = spec.target ();
        if (result.constructor.name === 'Promise') {
          result = await result;
        }
        spec.stats.status = PASS_RESULT;
        runner.stats.pass = runner.stats.pass + 1;
      }
      catch (err) {
        spec.stats.status = FAIL_RESULT;
        runner.stats.fail = runner.stats.fail + 1;
      }
    }
    else {
      runner.stats.todo = runner.stats.todo + 1;
    }

    // Run the child specs
    if (spec.children.length > 0) {
      console.log ('- children:', spec.children.length);
      await runNextSpec ({
        index: 0,
        list: spec.children,
        runner,
      });
    }
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
      else if (type === 'Function' || type === 'AsyncFunction') {
        spec.target = target;
      }
    }
  }
}
