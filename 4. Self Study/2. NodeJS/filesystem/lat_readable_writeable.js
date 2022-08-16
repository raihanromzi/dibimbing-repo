/**
 * TODO:
 * Buat program untuk membaca teks input.txt dan menuliskan ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

import fs from 'fs';
import * as path from "path";

const readableStream = fs.createReadStream(path.resolve('./input.txt'), { highWaterMark: 15 });
const writableStream = fs.createWriteStream('output2.txt');

readableStream.on('readable', () => {
	try {
		writableStream.write(`${readableStream.read()}\n`);
	} catch (e) {
		return e;
	}
});