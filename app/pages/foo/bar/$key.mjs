// View documentation at: https://docs.begin.com
export default function Html({ html, state }) {
  // eslint-disable-next-line
  const { attrs, store } = state;
  return html`<section class="m-auto p2 color-light font-sans">
    <h1 class="mb1 font-semibold text3">Index page</h1>
    <p>html content for home page here</p>
    <pre>${JSON.stringify({ state }, null, 2)}</pre>
  </section> `;
}
