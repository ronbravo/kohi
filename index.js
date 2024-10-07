const shared = {
  runner: null,
}

const PENDING_TEST_FUNCTION = () => {}

export function createRunner () {
  let runner;
  runner = {
    current: null,
    only: [],
    root: createTest ({ name: 'root test' }),
  }
  return runner;
}

export function createTest (details = {}) {
  let { name = '', func = PENDING_TEST_FUNCTION } = details;
  let test;
  test = {
    name,
    func,
    children: [],
  }
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
  let runner, test;
  runner = getRunner ();
  test = createTest ();
  runner.current [name] = func;
}

export function it () {}

export function run () {}
