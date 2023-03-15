const template = document.createAttribute('template');
template.innerHTML=`<button>Times Clicked: ${this.count}</button>`;


class ButtonCount extends HTMLElement {
    constructor() {
      super();
      this.count = 0;
      const shadow = this.attachShadow({mode: 'open'});
      let button = document.createElement('button');
      button.innerHTML=`Times Clicked : ${this.count}`;
      shadow.appendChild(button);
    }
  }
  customElements.define('button-count', ButtonCount);