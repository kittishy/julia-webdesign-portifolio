import { readFile, writeFile } from 'node:fs/promises';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import App from '../dist-ssr/App.js';
import { injectRenderedMarkup } from './prerender-html.mjs';

const htmlFile = new URL('../dist/index.html', import.meta.url);
const shell = await readFile(htmlFile, 'utf8');
const rendered = renderToString(createElement(App));
await writeFile(htmlFile, injectRenderedMarkup(shell, rendered), 'utf8');
console.log('Portfolio pre-rendered: readable content is included in dist/index.html.');
