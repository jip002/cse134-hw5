// RecipeCard.js

class blog extends HTMLElement {
    constructor() {
        super();
        let shadowDOM = this.attachShadow({mode: 'open'});
        let blog = document.createElement('div');
        let blogStyle = document.createElement('style');
    
        styleEl.textContent = ``; 
        shadowDOM.appendChild(blog);
        shadowDOM.appendChild(blogStyle);
      }


    set data(data) {
      if (!data) return;
      const shadow = this.shadowRoot;
      const childNodes = Array.from(shadow.childNodes);
      let blog = childNodes[0];
      let blogEl = this.shadowRoot.querySelector('div');
      blogEl.innerHTML = `Blog Title: ${data.title} <br>
      Blog Data: ${data.date} <br>
      Blog Summary: ${data.summary} <br>
      <button id="edit">Edit</button>
      <button id="delete">Delete</button>`;
      let edit = blogEl.querySelector("#checkbox")
      let del = blogEl.querySelector("#delete")
    }
  }
  customElements.define('blog', blog);