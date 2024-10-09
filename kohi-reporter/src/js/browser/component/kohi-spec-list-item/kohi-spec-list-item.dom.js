import bind from 'simulacra';
import html from './kohi-spec-list-item.html?raw';
import './kohi-spec-list-item.less';

export class KohiSpecListItem extends HTMLElement {
  connectedCallback() {
    let data, dom, node, parent, tabs, template;
    dom = this;
    dom.className = 'kohi-runner-list component';
    dom.innerHTML = html;
  }
}
