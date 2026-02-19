class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          background: rgba(13, 17, 23, 0.9);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid #30363d;
          padding: 1.25rem 0;
        }
        .container {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          padding: 0 1.5rem;
          align-items: center;
        }
        .logo {
          color: white;
          text-decoration: none;
          font-weight: 700;
          font-family: 'JetBrains Mono', monospace;
        }
        .links {
          display: flex;
          gap: 1.5rem;
        }
        a {
          color: #8b949e;
          text-decoration: none;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
          transition: color 0.2s;
        }
        a:hover { color: #58a6ff; }
      </style>
      <nav>
        <div class="container">
          <a href="#" class="logo">DP</a>
          <div class="links">
            <a href="#about">ABOUT</a>
            <a href="#education">EDUCATION</a>
            <a href="#skills">SKILLS</a>
            <a href="#projects">PROJECTS</a>
          </div>
        </div>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);
