// Soal:
// Seorang frontend developer diminta untuk membuat fitur like posting pada suatu web artikel
// API untuk mendapatkan list likes dari suatu artikel me return data berbentuk array string.

// Contoh response:
// {
//     id:"HJKdsJbjbj124",
//     status:"200",
//     likes:["Jacob", "Alex"]  
//     createAt: "Monday 27 Sept 2021"    
// }

// Ada pun expected output secara data adalah
// []                                -->  menampilkan "no one like this"
// ["Peter"]                         -->  menampilkan  "Peter like this"
// ["Jacob", "Alex"]                 -->  menampilkan "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  menampilkan "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  menampilkan  "Alex, Jacob and 2 others like this"

// Buat lah function yang menghasilkan/me return output sesuai dengan expected output
// Tidak boleh langsung print expected output

// Expected Output :
// no one likes this
// Peter likes this
// Jacob and Alex like this
// Max, John and Mark like this
// Alex, Jacob and 2 others like this

// NOTE : berikan comment penjelasan pada baris kode yang menurut anda penting


// Jawaban:
function likes(names) {
  const arrLength = names.length
  let result = ''
  switch (arrLength) {
    case 0:
      result = 'no one like this'
      break
    case 1:
      result = `${names[0]} like this`
      break
    case 2:
      result = `${names[0]} and ${names[1]} like this`
      break
    case 3:
      result = result = `${names[0]}, ${names[1]} and ${names[2]} like this`
      break
    default:
      result = `${names[0]}, ${names[1]} and ${arrLength - 2} others like this`
      break
  }
  return result

}

console.log(likes([]))
console.log(likes(['Peter']))
console.log(likes(['Jacob', 'Alex']))
console.log(likes(['Max', 'John', 'Mark']))
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))