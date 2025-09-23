import { LitElement, css, html } from 'lit'

export class MyElement extends LitElement {
  static styles = css`
    :host {
      font-family: system-ui, sans-serif;
      text-align: center;
      color: #e99494ff;
      display: block;
      width: 100%;
      max-width: 960px;
      margin: 0 auto;
      padding: 2rem;
    }
    h1 {
      font-size: 3.2em;
      line-height: 1.1;
    }
    h2 {
      font-size: 1.6em;
      font-weight: normal;
      color: #45d3ddff;
      margin-top: -1rem;
    }
    .logos {
      margin-top: 2rem;
    }
    .logos img {
      height: 6em;
      padding: 0 1.5rem;
      will-change: transform;
      transition: transform 0.3s ease;
    }
    .logos img:hover {
      transform: scale(1.1) rotate(-10deg);
    }
    p {
      margin-top: 2rem;
      font-size: 1.2em;
    }
    `;

  render() {
    return html`
      <div>
        <div class="logos">
          <img src="/Image1.png" alt="A cheerful cartoon character waving in front of a bright blue background with the word Welcome displayed above. The scene feels friendly and inviting." />
        </div>
        <h1>Hello World!</h1>
        <h2>Welcome to My Page</h2>
        <p>This is a simple Lit element component with my custom image.</p>
      </div>
    `;
  }
}

customElements.define('my-element', MyElement)

