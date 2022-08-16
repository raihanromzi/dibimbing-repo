import fs from 'fs';
import * as path from "path";
import { dirname } from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const readNotes = (error, data) => {
	if (error) {
		console.log('Gagal Membaca!');
		return;
	}
	console.log(data);
};

fs.readFile(path.resolve(__dirname, 'notes.txt'), 'UTF-8', readNotes);
// console.log(fs.readFileSync('notes.txt', 'UTF-8'));