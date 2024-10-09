import bind from 'simulacra';
import './index.less';

const TEMPLATE = `
<div>
  <h3><span class="name"></span></h3>
  <div><span class="time"></span></div>
</div>
`;

function start () {
  let data, dom, node, parent;
  parent = document.querySelector ('#app');
  dom = document.createElement ('div');
  dom.innerHTML = TEMPLATE;

  data = {
    time: Date.now (),
    name: 'Bob',
  }
  
  node = bind (data, [dom, {
    name: '.name',
    time: '.time',
  }]);
  
  setInterval (() => {
    data.time = Date.now ();
  }, 1000);
  
  parent.appendChild (node);
}

start ();

/*
import javascriptLogo from '/image/javascript.svg';
import viteLogo from '/image/vite.svg';
import { setupCounter } from './counter.js';

import '@shoelace-style/shoelace/dist/shoelace.js';
import '@shoelace-style/shoelace/dist/themes/light.css';
import './index.less';

function start () {
  let value = 23;
  document.querySelector('#app').innerHTML = `
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
      </a>
      <h1>Hello Vite!</h1>
      <div class="card">
        <sl-button>Counter ${value}</sl-button>
        <button id="counter" type="button"></button>
      </div>
      <p class="read-the-docs">
        Click on the Vite logo to learn more
      </p>
    </div>
  `
  setupCounter(document.querySelector('#counter'))

  setTimeout (() => {
    console.log ('- Get from api:');
  }, 1000);
}

start ();
*/
