class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021
      RomeroVillegasJes├║sAntonio.`;
  }
}
customElements.define(
  "mi-footer", MiFooter);
