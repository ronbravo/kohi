import bind from 'simulacra';
import html from './kohi-runner-list.html?raw';
import './kohi-runner-list.less';
import { getItemFromRunnerRegistry } from '../kohi-reporter-app/kohi-reporter-app.js';

export class KohiRunnerList extends HTMLElement {
  connectedCallback() {
    let data, dom, node, parent, template;
    dom = this;
    dom.className = 'kohi-runner-list component';
    dom.innerHTML = html;

    data = getItemFromRunnerRegistry ({ id: 1 });
    // console.log ('DATA:', data);
    
//    template = dom.querySelector ('#runner-template');
//    node = bind (data, [template, {
//      name: '[data-domo="bind: name"]',
//    }]);
    template = dom.querySelector ('#runner-template');
    node = bind (data, [this, {
      id: '[data-domo="bind: id"]',
    }]);
//    parent = dom.querySelector ('#runner-area');
//    parent.appendChild (node);
  }
}
