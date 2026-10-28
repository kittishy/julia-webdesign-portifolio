import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';

test('publica o projeto conceitual com link e imagem próprios', async () => {
  const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
  assert.match(html, /Folha &amp; Poesia/);
  assert.match(html, /https:\/\/julia-conceitos\.vercel\.app\/folha-e-poesia\//);
  assert.match(html, /projeto conceitual/i);
  await access(new URL('../dist/projects/screenshots/folha-e-poesia.jpg', import.meta.url));
  assert.ok(html.includes('Prisma Vidros'), 'Prisma deve aparecer no portfólio');
  assert.ok(html.includes('https://julia-conceitos.vercel.app/prisma-vidros/'), 'Prisma deve apontar para a nova versão');
  await access(new URL('../dist/projects/screenshots/prisma-vidros.jpg', import.meta.url));
  for (const slug of ['auria-superficies','orbe-pedras','lumina-vidros','aurum-auto','nexo-detail','chaveiro-elo','livre-desentupidora','canal-desentupidora']) {
    assert.ok(html.includes('https://julia-conceitos.vercel.app/'+slug+'/'), slug);
    await access(new URL('../dist/projects/screenshots/'+slug+'.jpg', import.meta.url));
  }
  assert.ok(html.includes('Fluxo Desentupidora'));
  assert.ok(html.includes('https://julia-conceitos.vercel.app/fluxo-desentupidora/'));
  await access(new URL('../dist/projects/screenshots/fluxo-desentupidora.jpg', import.meta.url));
});
