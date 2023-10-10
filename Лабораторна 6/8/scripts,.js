let books = document.getElementsByTagName('li')
let prevClickedBook = null;
for(let book of books){
    book.addEventListener('click',() =>{
        if(prevClickedBook != null){
            prevClickedBook.style.backgroundColor = 'white'
            book.style.backgroundColor = 'lime'
            prevClickedBook = book;
        }
        else{
            book.style.backgroundColor = 'lime'
            prevClickedBook = book;
        }
        
    })
}