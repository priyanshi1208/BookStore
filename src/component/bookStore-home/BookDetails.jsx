import React from 'react';
import Card from './Card';


function BookDetails(props){
    
    return(
        <>
        <div className="book_head">
            <div className="boot_item">
                <span className="book_heading">Books</span>
                <div className="book_count">
                    <div className="count">({props.BookData.length}Items)</div>
                </div>
            </div>
        </div>
        {props.BookData.map(function ncard(val){
            return(
                <Card
                key={val.bookId}
                imgsrc={val.imageURL}
                authorName={val.authorName}
                bookName={val.bookName}
                price={val.bookPrice}
                changeNumber = {props.change}
                bookId={val.bookId}
                description={val.descriptions}
                />
             )
        })}
    </>
    )
}
export default BookDetails;
