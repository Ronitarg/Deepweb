import { mkdir, copyFile, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const dist = 'dist';
await mkdir(join(dist, 'src'), { recursive: true });
await mkdir(join(dist, 'scripts'), { recursive: true });

const html = await readFile('index.html', 'utf8');
const productionHtml = html
  .replace('/src/main.jsx', './src/main.jsx')
  .replace('/src/styles.css', './src/styles.css');
await writeFile(join(dist, 'index.html'), productionHtml);

for (const file of ['src/main.jsx', 'src/App.jsx', 'src/styles.css']) {
  await mkdir(dirname(join(dist, file)), { recursive: true });
  await copyFile(file, join(dist, file));
}

console.log('Built static application in dist/');
