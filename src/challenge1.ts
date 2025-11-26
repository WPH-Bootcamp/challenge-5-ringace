// ------------------------------
// Type definition for Book
// ------------------------------
type Book = {
  title: string
  author: string
  year: number
}

// ------------------------------
// Books Array (global storage)
// ------------------------------
const books: Book[] = []

// ------------------------------
// Function: addBook
// ------------------------------
function addBook(title: string, author: string, year: number): void {
  // Input validation
  if (!title) {
    console.log('Error: title must be filled in first')
  }
  if (!author) {
    console.log('Error: author must be filled in second place')
  }
  if (!year) {
    console.log('Error: year must be filled in third place')
  }

  // Add book to the list
  const newBook: Book = { title, author, year }
  books.push(newBook)

  // Display info when book has added
  console.log(`Book added: "${title}" by ${author} (${year})`)
}

// ------------------------------
// Function: listBooks
// ------------------------------
function listBooks(): void {
  console.log('All Books:')

  // Display all books results
  books.forEach((book: Book) => {
    console.log(`- ${book.title} by ${book.author} (${book.year})`)
  })
}

// ------------------------------
// Function: searchBook
// ------------------------------
function searchBook(title?: string): void {
  // Search must be provide title
  if (!title) {
    console.log('Please provide a title to search.')
    return
  }

  // Serach book by title
  const results = books.filter((book) => book.title.includes(title))

  // No book found
  if (results.length === 0) {
    console.log(`No books found with title containing "${title}".`)
    return
  }

  // Display search results
  console.log(`Search Results for "${title}":`)
  results.forEach((book) => {
    console.log(`- ${book.title} by ${book.author} (${book.year})`)
  })
}

// Don't delete code bellow and this code must be at the bottom of the file
export { addBook, listBooks, searchBook }
