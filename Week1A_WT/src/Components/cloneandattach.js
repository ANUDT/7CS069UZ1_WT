
//Clone and Attach element created to use template for mark up and styles
var template = document.querySelector('my-template'); // get the template

customElements.define('my-template', class extends HTMLElement { // define the class
  constructor() { // create a class that extends HTMLElement
    super(); // always call super() first in the ctor.

    // Create a shadow root and clone the template content into it
    let shadowRoot = this.attachShadow({ mode: 'open' }); // sets and returns 'this.shadowRoot'
    shadowRoot.appendChild(template.content.cloneNode(true)); // true means cloning the content and elements
    //then it will be added as a child of the shadow root
    }
});
