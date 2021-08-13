import React from 'react';
import Card from './Card';
import Bdata from './Bdata';
import './BookDetails.scss';


function BookDetails(){
    return(
        <>
        <h1 className= 'heading_style'>Books</h1>
        {Bdata.map(function ncard(val){
            return(
                <Card
                key={val.id}
                imgsrc={val.imgsrc}
                authorName={val.authorName}
                bookName={val.bookName}
                price={val.price}
                />


            )
        })}
    </>
    )
}
export default BookDetails;
