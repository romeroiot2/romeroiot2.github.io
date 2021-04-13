class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021
      RomeroVillegasJesúsAntonio.`;
  }
}
customElements.define(
  "mi-footer", MiFooter);
