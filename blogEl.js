// RecipeCard.js

class blog extends HTMLElement {
    constructor() {
      super();
      let shadowDOM = this.attachShadow({mode: 'open'});
      let blog = document.createElement('div');
      let blogStyle = document.createElement('style');
  
      styleEl.textContent = ``; 
      shadowDOM.appendChild(blog);//fix appendChild
      shadowDOM.appendChild(blogStyle);
    }
    set data(data) {
      if (!data) return;
      const shadow = this.shadowRoot;
      const childNodes = Array.from(shadow.childNodes);
      let blog = childNodes[0];
      blog.innerHTML = `Blog Title: ${title.value} <br>
      Blog Data: ${date.value} <br>
      Blog Summary: ${summary.value} <br>
      <button id="edit">Edit</button>
      <button id="delete">Delete</button>`;
      
    }
  }
  customElements.define('blog', blog);