import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, '../src/assets/images/catory.research.svg');
const outputPath = path.join(__dirname, '../src/assets/images/catory.research.png');

sharp(inputPath)
  .resize(256, 256) // Tamaño del PNG resultante
  .png()
  .toFile(outputPath)
  .then(info => { console.log('Conversión completada:', info); })
  .catch(err => { console.error('Error en la conversión:', err); }); 