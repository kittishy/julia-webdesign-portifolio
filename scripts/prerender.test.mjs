import { test } from 'node:test';
import assert from 'node:assert/strict';
import { injectRenderedMarkup } from './prerender-html.mjs';

test('preserves metadata and includes readable content before JavaScript', () => {
  const shell = '<title>Julia Freitas</title><div id="root"></div><script src="app.js"></script>';
  const rendered = '<main><h1>Criação de sites profissionais</h1></main>';
  assert.equal(injectRenderedMarkup(shell, rendered), '<title>Julia Freitas</title><div id="root">' + rendered + '</div><script src="app.js"></script>');
});

test('fails instead of silently publishing an empty or incompatible shell', () => {
  assert.throws(() => injectRenderedMarkup('<div></div>', '<main>Sites</main>'), /root/);
  assert.throws(() => injectRenderedMarkup('<div id="root"></div>', ''), /empty/i);
});
