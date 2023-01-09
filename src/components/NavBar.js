const template = document.createElement("template");
template.innerHTML = `
<style>
    :host {
        width: 100%;
        position: absolute;
        top: 0;
    }

    nav {
        background: blue;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    menu {
        list-style: none;
        display: flex;
        gap: 20px;
    }

    a {
        text-decoration: none;
        color: white;
        font-weight: bold;
    }

    a:hover {
        color: lightBlue;    
    }

</style>
<nav class="navbar">
    <menu>
        <li><a href="/index">Slide</a></li>
        <li><a href="/src/pages/rotate.html">Rotate</a></li>
        <li><a href="/src/pages/wave.html">Wave</a></li>
        <li><a href="/src/pages/background.html">Background</a></li>
        <li><a href="/src/pages/hoverboard.html">Hoverboard</a></li>
    </menu>
</nav>
`;

class NavBar extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    // this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name");
    // this.shadowRoot.querySelector("img").src = this.getAttribute("avatar");
  }
}

window.customElements.define("nav-bar", NavBar);
