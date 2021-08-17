import React from 'react';
import Card from './Card';
import Bdata from './Bdata';
// import './BookDetails.scss';


function BookDetails(){
    return(
        <>
        <div className="book_head">
            <div className="boot_item">
                <span className="book_heading">Books</span>
                <div className="book_count">
                    <div className="count">({Bdata.length}Items)</div>
                </div>
            </div>
            <div className="book-sort">
                <div className="sort">
                    <select className="sort-box">
                        <option selected value="dafault">Sort by relevence</option>
                        <option value="Price:Low to High">Price:Low to High</option>
                        <option value="Price:High to Low">Price:High to Low</option>
                        <option value="Newest Arrival">Newest Arrival</option>
                    </select>

                </div>
            </div>
        </div>
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
