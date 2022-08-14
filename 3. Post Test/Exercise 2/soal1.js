// Soal:
// Manipulasi lah data JSON dibawah dengan ketentuan sebagai berikut
// apabila score lebih dari sama dengan 7 dan Status Unposted maka status berubah menjadi Posted
// Tidak boleh langsung print expected output
// Berikan comment penjelasan pada baris kode yang dianggap penting
/*
Expected Output
[
  { title: 'The Only Guide You Need', score: 8, status: 'Posted' },
  {
    title: 'The Advanced Guide To Archive',
    score: 5,
    status: 'Unposted'
  },
  {
    title: 'In Defense of the Figurative Use of Literally.',
    score: 6,
    status: 'Unposted'
  },
  {
    title: 'The Best Ways to Do Market Research For Your Business Plan',
    score: 7,
    status: 'Posted'
  },
  {
    title: 'The Only Guide You Need Part 2',
    score: 8,
    status: 'Posted'
  }
]
*/


let data = [
    {
        title: "The Only Guide You Need",
        score: 8,
        status: "Posted"
    },
    {
        title: "The Advanced Guide To Archive",
        score: 5,
        status: "Unposted"

    },
    {
        title: "In Defense of the Figurative Use of Literally.",
        score: 6,
        status: "Unposted",
    },
    {
        title: "The Best Ways to Do Market Research For Your Business Plan",
        score: 7,
        status: "Unposted"
    },
    {
        title: "The Only Guide You Need Part 2",
        score: 8,
        status: "Unposted"
    },
]

// Jawaban:
function Jobs(array) {
    // Loop inside array
    for (const arrayElement of array) {
        // Every element in array is object, so loop inside object
        for (const objectKey in arrayElement) {
            // Check if score >= 7 AND status is unposted, then change status to posted
            if (arrayElement['score'] >= 7 && arrayElement['status'].toLowerCase() === 'unposted') {
                arrayElement['status'] = 'Posted'
            }
        }
    }
    return array
}

console.log(Jobs(data))

