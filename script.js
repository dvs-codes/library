let myLibrary =[]
const mainBody = document.querySelector('body')
const bookDetailForm = document.querySelector('.book-details-form')
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

class Book {
    constructor(author, title, pages, readStatus) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.readStatus = readStatus;
    } 

    changeReadStatus() {
        if (this.readStatus === 'read') {
            this.readStatus = 'not read'
         } else  {
            this.readStatus = 'read'
         }
    }
}

function addBookToLibrary() {
    //This function adds a book object into the array of library
    const newBook =new Book(formAuthor.value, formTitle.value, 
    formPages.value, formStatus.value);
    myLibrary.push(newBook)

    myLibrary.forEach((book) => {
        // creates a card from the info gathered in myLibrary array
        //main card
        let infoCard = document.createElement('div')
        infoCard.classList.add(`card`)
        infoCard.classList.add(`${myLibrary.indexOf(book)}`)
        booksDisplay.appendChild(infoCard)
    
        //author title line
        let authorCard = document.createElement('div')
        authorCard.classList.add('author-name')
        authorCard.innerText = `Author: ${book.author}`
        infoCard.appendChild(authorCard)
        
        //bookname 
        let titleCard = document.createElement('div')
        titleCard.classList.add('book-name')
        titleCard.innerText = `Book: ${book.title}`
        infoCard.appendChild(titleCard)

        //page numbers
        let pageNumCard =  document.createElement('div')
        pageNumCard.classList.add('page-num')
        pageNumCard.innerText =`Number of pages: ${book.pages}`
        infoCard.appendChild(pageNumCard)

        //read status
        let bookStatusCard = document.createElement('button')
        bookStatusCard.classList.add('status')
        bookStatusCard.innerText = `${book.readStatus}`
        infoCard.appendChild(bookStatusCard)

        //clicking read button changes status of book read
        bookStatusCard.addEventListener('click', () => {
            book.changeReadStatus()
            bookStatusCard.innerText = `${book.readStatus}`
        })

        //remove button to remove specific card
        let removeButton = document.createElement('button')
        removeButton.classList.add('remove')
        removeButton.classList.add(`${myLibrary.indexOf(book)}`)
        removeButton.innerText = 'remove'
        infoCard.appendChild(removeButton)

        // remove button removes the specific card
        removeButton.addEventListener('click', ()=> {
            console.log(removeButton.className)
            let currentIndex = myLibrary.indexOf(book)
            myLibrary.splice(currentIndex,1)
            booksDisplay.removeChild(booksDisplay.children[currentIndex])
            console.log(myLibrary)
        })
})
}

confirmButton.onclick = (event) => {

    //checks if fields have values or not if they do prevent default prevents form submission
    if(formAuthor.value && formTitle.value && formPages.value) {
        event.preventDefault()
        booksDisplay.textContent =""
        addBookToLibrary()
        document.querySelector(".book-details-form").reset()
        bookDialog.close()
    }
}


cancelButton.onclick = (event)=> {
    event.preventDefault()
    bookDialog.close()
    bookDetailForm.reset()
}









