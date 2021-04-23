import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {bookData} from "./data";
import {
Link
} from 'react-router-dom';

class BookList extends React.Component {
    render() {
        return (
            <div className = "book-list"> Book List
            {
                bookData.items.map((data,key) => {
                    return (
                        <tr>
                            <td height="10%" width="30%">
                                <form>
                                    <button> <img src = {data.volumeInfo.imageLinks.smallThumbnail}/>
                                        </button></form></td>
                            <td height="10%" width="30%">
                                <form>
                                    <button> {data.volumeInfo.title}
                                        </button></form></td>
                            <td>
                            <Link to={"/bookDetail/"+data.id} className="bookDetail">BookDetails</Link> </td>            
                        </tr>
                    )
                })
            }
            
            </div>
        )
    }
}
export default BookList;