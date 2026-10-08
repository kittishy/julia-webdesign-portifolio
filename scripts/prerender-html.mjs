export function injectRenderedMarkup(shell, rendered) {
  const root = '<div id="root"></div>';
  if (!shell.includes(root)) throw new Error('Expected an empty root in the Vite HTML shell.');
  if (!rendered.trim()) throw new Error('Rendered portfolio is empty.');
  return shell.replace(root, () => `<div id="root">${rendered}</div>`);
}
