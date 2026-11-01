import { attachAppEvents, renderApp } from './App.js';

const root = document.getElementById('root');
if (root) {
  root.innerHTML = renderApp();
  attachAppEvents();
}
