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
        Principal
      </a>
      <a href="historial.html">
        <span class="material-icons">
          fastfood
        </span>
        Historial
      </a>
       <a href="dispositivo.html">
        <span class="material-icons">
          fastfood
        </span>
        dispositivo
      </a>
      `;
  }
}
customElements.define(
  "mi-nav", MiNav);
