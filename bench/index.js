import kleur from 'kleur';
import { promisify } from 'util';
import { execFile } from 'child_process';
import { fileURLToPath } from 'url';
import { join } from 'path';

const spawn = promisify(execFile);
const PAD = kleur.reset().dim('    ||  ');

/*
const runners = {
	ava: [await import('ava/cli.js'), 'suites/ava/**'],
	// jest: [await import('jest/bin/jest.js'), 'suites/jest', '--env=node'],
	// mocha: [await import('mocha/bin/mocha'), 'suites/mocha'],
	// tape: [await import('tape/bin/tape'), 'suites/tape'],
	// uvu: [await import('uvu/bin.js'), 'suites/uvu'],
};
*/

const runners = [
	//['npx', 'ava', '/index.spec.js'],
	// ['jest', '/index.spec.js'],
	//['npx', 'mocha', '/index.spec.js'],
	// ['tape', '/index.spec.js'],
	// ['uvu', ''],
	['node', 'kohi', '/index.spec.js'],
]

function format(arr) {
	let num = Math.round(arr[1] / 1e6);
	if (arr[0] > 0) return (arr[0] + num / 1e3).toFixed(2) + 's';
	return `${num}ms`;
}

async function run(name, args) {
	let [cli, tool, file] = args;
	let base = join(fileURLToPath(import.meta.url), '..');
	let timer = process.hrtime();
	let pid = await spawn(`${cli} ${tool} suites/${tool}${file}`, { cwd: base, shell: true });
	let delta = process.hrtime(timer);

	console.log('~> "%s" took %s', name, format(delta));
	console.log(PAD + '\n' + PAD + (pid.stderr || pid.stdout).toString().replace(/(\r?\n)/g, '$1' + PAD));
}

(async function () {
	for (let name of Object.keys(runners)) {
		await run(name, runners[name]);
	}
})().catch(err => {
	console.error('Oops~!', err);
	process.exit(1);
});
