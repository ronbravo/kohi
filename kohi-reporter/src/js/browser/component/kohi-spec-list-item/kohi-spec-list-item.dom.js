import bind from 'simulacra';
import html from './kohi-spec-list-item.html?raw';
import './kohi-spec-list-item.less';
import { getItemFromRunnerRegistry } from '../kohi-reporter-app/kohi-reporter-app';
import { createComponent } from '../componet.js';

export class KohiSpecListItem extends HTMLElement {
  static get observedAttributes() {
    return ['data-id'];
  }

  constructor () {
    super ();
    this.component = createComponent ({ dom: this });
  }

  connectedCallback() {
    let data, node, template;
    let dom;

    dom = this;
    dom.className = 'kohi-spec-list-item component';
    dom.innerHTML = html;

    data = dom.component.data;
    template = this.querySelector ('.spec-template');
    node = bind (data, [template, {
      name: '[data-domo="bind: name"]',
      children: ['[data-domo="bind: child-spec"]', (element, value) => {
        let item;

        item = document.createElement ('kohi-spec-list-item');
        item.setAttribute ('data-id', value);
        // item.textContent = value;

        element.setAttribute ('data-spec-id', value);
        element.appendChild (item);
        // console.log (value);
      }],
      // {
      //   // name: '[data-domo="bind: name"]',
      // }],
      // () => { 
      // }],
      // name: '[data-domo="bind: name"]',
      // children: ['span', () => {
      // }]
    }]);

    dom.appendChild (node);
  }

  attributeChangedCallback(name, prev, value) {
    let { component } = this;
    let id, item;
    
    id = parseInt (value);
    if (!id) { id = 0; }

    if (name === 'data-id' && id !== component.id) {
      component.id = id;
      item = getItemFromRunnerRegistry ({ id });
      if (item) {
        component.data = item;
      }
    }
  }
}
