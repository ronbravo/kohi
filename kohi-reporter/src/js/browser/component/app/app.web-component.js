import bind from 'simulacra';
import template from './app.html?raw';
import 'boxicons/css/boxicons.min.css';
import './app.less';

// Use the uikit library
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import 'uikit/dist/css/uikit.min.css';

UIkit.use (Icons);

export class KohiReporterApp extends HTMLElement {
  constructor () {
    super ();    
  }

  connectedCallback() {
    // browser calls this method when the element is added to the document
    // (can be called many times if an element is repeatedly added/removed)

    let data, dom, node, parent;
    parent = this;
    this.className = 'kohi-reporter-app component-host';
    
    dom = document.createElement ('div');
    dom.className = 'kohi-reporter-app component';
    dom.innerHTML = template;

    data = {
      label: 'Kohi Report',
      time: Date.now (),
      cards: [
        { label: 'fail', total: 0 },
        { label: 'pass', total: 100 },
        { label: 'todo', total: 100 },
        { label: 'total', total: 300 },
      ],
    }
    
    node = bind (data, [dom, {
      cards: ['.stat.card', {
        label: '[data-domo="bind: label"]',
        total: '[data-domo="bind: total"]',
      }, (element, value, previousValue) => {
        element.className = `${element.className} ${value.label}`; 
      }],
    }]);
    
    setInterval (() => {
      data.time = Date.now ();
    }, 1000);
    
    parent.appendChild (node);
  }
}
