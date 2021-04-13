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
      <a href="historial.html">
        <span class="material-icons">
          fastfood
        </span>
        Historial
      </a>
      <a href="dispositivo.html">
        <span class="material-icons">
          screenshot
        </span>
       Simulacion de Dispositivo
      </a>`;
  }
}
customElements.define(
  "mi-nav", MiNav);
