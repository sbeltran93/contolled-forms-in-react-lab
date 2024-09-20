import { useState } from 'react';
import './App.css';


const BookShelf = () => {
const [books, setBooks] = useState([
    { title: '', author: '' },
    
]);

const [newBook, setNewBook] = useState({ title: '', author: '' })

const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook({ ...newBook, [name]: value });
}

const handleSubmit = (event) => {
    event.preventDefault()
    setBooks([...books, newBook])
    setNewBook({ title:'', author: '' })
};

const handleRemoveBook = (bookRemoved) => {
    setBooks(books.filter((book => book.title !== bookRemoved.title)));
};

return (
<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    <form onSubmit={handleSubmit}>
        <label>
            Title:
            <input
            type='text'
            name='title'
            value={newBook.title}
            onChange={handleInputChange}
        />    
        </label>
        <br />
        <label>
            Author:
            <input
                type='text'
                name='author'
                value={newBook.author}
                onChange={handleInputChange}
            />    
        </label>
        <br />
        <button type='submit'>Add a book</button>
        
    </form>
  </div>
  <div className='bookCardsDiv'>
    {books.map((book, index) => (
        <div key={index}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <button onClick={() => handleRemoveBook(book)}>Remove</button>
        </div>
    ))}
    </div>
  </div>
);
};

export default BookShelf;