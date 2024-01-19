let myLibrary =[]
let newBook
const formAuthor = document.querySelector("#author") 
const formTitle = document.querySelector('#title')
const formPages = document.querySelector('#number_of_pages')
const formStatus = document.querySelector('#read_status')
const confirmButton = document.querySelector("#confirm")
const cancelButton = document.querySelector('.cancel')
const addButton = document.querySelector(".add")
const bookDialog =document.querySelector(".book-dialog")
const booksDisplay = document.querySelector(".books")

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

Book.prototype.changeReadStatus = function() {

}



function addBookToLibrary() {
    //This function adds a book object into the array of library
    const newBook =new Book(formAuthor.value, formTitle.value, 
        formPages.value, formStatus.value);
    myLibrary.push(newBook)
    console.log(newBook)
    newBook.changeReadStatus()
}

confirmButton.addEventListener('click', (event) => {
    event.preventDefault()
    addBookToLibrary()
    cardAdder()
    document.querySelector(".book-details-form").reset()
    bookDialog.close()

})

function cardAdder() { 
    // creates a card from the info gathered in myLibrary array
    //main card
    let infoCard = document.createElement('div')
    infoCard.classList.add(`card`)
    infoCard.classList.add(`${myLibrary.length}`)
    booksDisplay.appendChild(infoCard)

    //author title line
    let authorCard = document.createElement('div')
    authorCard.classList.add('author-name')
    authorCard.innerText = `Author: ${myLibrary[myLibrary.length-1].author}`
    infoCard.appendChild(authorCard)

    //bookname 
    let titleCard = document.createElement('div')
    titleCard.classList.add('book-name')
    titleCard.innerText = `Book: ${myLibrary[myLibrary.length-1].title}`
    infoCard.appendChild(titleCard)

    //page numbers
    let pageNumCard =  document.createElement('div')
    pageNumCard.classList.add('page-num')
    pageNumCard.innerText =`Number of pages: ${myLibrary[myLibrary.length-1].pages}`
    infoCard.appendChild(pageNumCard)

    //read status
    let bookStatusCard = document.createElement('button')
    bookStatusCard.classList.add('status')
    bookStatusCard.innerText = `${myLibrary[myLibrary.length-1].readStatus}`
    infoCard.appendChild(bookStatusCard)
   

    //adds a remove button
    let removeButton = document.createElement('button')
    // removeButton.classList.add('remove')
    removeButton.classList.add(`${myLibrary.length}`)
    removeButton.innerText = "Remove"
    infoCard.appendChild(removeButton)

    removeButton.addEventListener('click', () => {
        
        element = document.querySelector(`.card`)
        element.remove()
    })

}





