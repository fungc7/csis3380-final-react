import { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book';

function BookList() {
    const [books, setBooks] = useState([]);

    const getBooks = async () => {
        // run asynchronous tasks here
        const resp = await axios.get('https://csis3380-final-server-0mhb.onrender.com/');
        setBooks(resp.data);
        console.log(resp.data);
    };
    

    useEffect(() => {
        getBooks();
    }, []);

    const handleRemoveBook = async (id) => {
        const deleteResponse = await axios.delete('https://csis3380-final-server-0mhb.onrender.com/' + id);
        console.log('DELETE Response:', deleteResponse.data);
        setBooks( books.filter(p => p.id !== id) );
    }

    return (
        <div className="BookList">
            <div className="col-md-12">
                <br />
                <h2 className="display-4 text-center">Books List</h2>
            </div>
            <div className="col-md-11">
                <a className="btn btn-info float-right" href="/create-book"
                >+ Add New Book!</a
                ><br /><br />
                <hr />
            </div>
            <div className="list">
                { books.map( book => 
                    <Book
                        id= {book.id}
                        title={book.title} 
                        author={book.author} 
                        description={book.description}
                        removeCard={handleRemoveBook}
                    />
                )}
                
            </div>
        </div>
    );
}

export default BookList;