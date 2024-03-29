const books = [
	{title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805},
	{title: 'The Ghost', author: 'Robert Harris', sales: 807311},
	{title: 'White Teeth', author: 'Zadie Smith', sales: 815586},
	{title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936},
	{title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968},
	{title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086},
	{title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152},
];

// - Gunakan fungsi filter untuk mengembalikan nilai item books
//   yang hanya memiliki nilai sales lebih dari 1000000.
// - Gunakan fungsi map pada books yang sudah ter-filter,
//   untuk mengembalikan nilai string dengan format:
//      - `${author} adalah penulis buku ${title} yang sangat hebat!`

const salesMoreThan1000000 = (books) => (books.sales > 1000000);
const printFormatAuthors = (books) => (`${books.author} adalah penulis buku ${books.title} yang sangat hebat!`);
const greatAuthors = books.filter(salesMoreThan1000000).map(printFormatAuthors);
console.log(greatAuthors);