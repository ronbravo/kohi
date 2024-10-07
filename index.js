const shared = {
}

export function createRunner () {
  let runner;
  runner = {
    root: null,
  }
  return runner;
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

export function describe (name, func) {
  let runner;
  runner = getRunner ();
  runner.current [name] = func;
}

export function it () {}

export function run () {}
