import { Component } from "react";
import "../css/Header.css";

export default class Header extends Component {
  expand() {
    var isExpanded = document.getElementById("links").dataset.expanded;
    var isActive = document.getElementById("burger").dataset.active;

    document
      .querySelectorAll("#links,#user")
      .forEach(
        (e) => (e.dataset.expanded = isExpanded === "true" ? "false" : "true")
      );

    document.getElementById("burger").dataset.active =
      isActive === "true" ? "false" : "true";
  }

  render() {
    return (
      <header className="header">
        <div className="logo">
          <img src="/logo_dark.svg" alt="Astro logo" />
        </div>

        <div
          className="burger"
          id="burger"
          data-active="false"
          onClick={this.expand}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className="links" id="links" data-expanded="false">
          <a href="/" className="link">
            Accueil
          </a>
          <a href="/" className="link">
            Documentation
          </a>
          <a href="/" className="link">
            Télécharger
          </a>
        </nav>

        <nav className="user" id="user" data-expanded="false">
          <a href="/" className="link">
            Se connecter
          </a>
          <a href="/" className="link">
            S'inscrire
          </a>
        </nav>
      </header>
    );
  }
}
