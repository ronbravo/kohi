export const KOHI_REPORTER_APP_TAG = 'kohi-reporter-app';

export function createComponent (details = {}) {
  let component;
  component = {}
  return component;
}

import { SAMPLE_RUNNER_DATA } from './data.mock.js';

const shared = {
  runner: SAMPLE_RUNNER_DATA,
}

export function getItemFromRunnerRegistry (details = {}) {
  let { id } = details;
  let item;
  item = shared.runner.registry [id];
  return item;
}
