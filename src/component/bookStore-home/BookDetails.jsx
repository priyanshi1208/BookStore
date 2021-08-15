import React from 'react';
import Card from './Card';
import './bookStore-home.scss';


function BookDetails(props){
    return(
        <>
        <h1 className= 'heading_style'>Books</h1>
        {props.BookData.map(function ncard(val){
            return(
                <Card
                key={val.bookId}
                imgsrc={val.imageURL}
                authorName={val.authorName}
                bookName={val.bookName}
                price={val.bookPrice}
                />
            )
        })}
    </>
    )
}
export default BookDetails;
