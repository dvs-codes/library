let myLibrary =[]
const bookAuthor = document.querySelector("#author") 
const bookTitle = document.querySelector('#title')
const numberOfPages = document.querySelector('#number_of_pages')
const readStatus = document.querySelector('#read_status')
const confirmButton = document.querySelector("#confirm")
const cancelButton = document.querySelector('.cancel')
const addButton = document.querySelector(".add")
const bookDialog =document.querySelector(".book-dialog")
const books = document.querySelector(".books")



addButton.addEventListener("click", () => {
    bookDialog.showModal()
})


//object construct that builds a book
function Book(author, title, pages, readStatus) {
    this.author = author,
    this.title = title,
    this.pages = pages,
    this.readStatus = readStatus;
}

function addBookToLibrary() {
    //This function adds a book object into the array of library
    let newBook =new Book(bookAuthor.value, bookTitle.value, 
        numberOfPages.value, readStatus.value);
    myLibrary.push(newBook)
}

confirmButton.addEventListener('click', (event) => {
    event.preventDefault()
    addBookToLibrary()
    console.log(myLibrary)
    bookDialog.close()
    cardAdder()
    document.querySelector(".book-details-form").reset()

})

function cardAdder() { 
    // creates a card from the info gathered in myLibrary array
    //main card
    let infoCard = document.createElement('div')
    infoCard.classList.add('card')
    books.appendChild(infoCard)

    //author title line
    let authorCard = document.createElement('div')
    authorCard.classList.add('author-name')
    authorCard.innerText = `Author: ${bookAuthor.value}`
    infoCard.appendChild(authorCard)

    //bookname 
    let titleCard = document.createElement('div')
    titleCard.classList.add('book-name')
    titleCard.innerText = `Book: ${bookTitle.value}`
    infoCard.appendChild(titleCard)

    //page numbers
    let pageNumCard =  document.createElement('div')
    pageNumCard.classList.add('page-num')
    pageNumCard.innerText =`Number of pages: ${numberOfPages.value}`
    infoCard.appendChild(pageNumCard)

    //read status
    let bookStatusCard = document.createElement('div')
    bookStatusCard.classList.add('status')
    bookStatusCard.innerText = `${readStatus.value}`
    infoCard.appendChild(bookStatusCard)
}


