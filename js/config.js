import "./regSw.js";
import "/lib/movil.js";
import "/lib/campo-dinamico.js";
class MiNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<a href="index.html">
        <span
          class="material-icons">
          home
        </span>
        Inicio
      </a>
      <a href="formulario.html">
        <span class="material-icons">
          fastfood
        </span>
        Formulario
      </a>
      <a href="gps.html">
        <span class="material-icons">
          brightness_medium
        </span>
        Brillo
      </a>`;
  }
}
customElements.define(
  "mi-nav", MiNav);
