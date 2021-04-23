import React from 'react';
import './index.css';
import {bookData} from "./data";

class BookDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {bookDetail: (bookData.items.filter ((value) => value.id === this.props.match.params.id))[0]};
    }

    render() {
        return (
            <div className="book-details">BOOK DETAILS
            <tr>
                            <td height="10%" width="30%">
                                <form>
                                    <button> <img src = {this.state.bookDetail.volumeInfo.imageLinks.smallThumbnail}/>
                                        </button></form></td>
                            <td height="10%" width="30%">
                                <form>
                                    <button> {this.state.bookDetail.volumeInfo.title}
                                        </button></form></td>
                            <td height="10%" width="30%">
                                <form>
                                    <button> {this.state.bookDetail.volumeInfo.subtitle}
                                        </button></form></td>
                            <td height="10%" width="30%">
                                <form>
                                    <button> {this.state.bookDetail.volumeInfo.authors}
                                        </button></form></td>                      
                        </tr>
        
            </div>
        )
    }
}
export default BookDetail;