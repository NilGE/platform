import React from 'react';

const BookDetails = ({book, addToCart}) => {
  return (
    <div className="media">
      <div className="media-left">
        <a href="#">
          <img className="media-object" src="http://placehold.it/200x280" alt="Placehold" />
        </a>
      </div>
      <div className="media-body">
        <h4 className="media-heading">{book.title}</h4>
        <ul>
          <li><stron>Author: </stron> {book.author}</li>
          <li><stron>Price: </stron> ${book.price}</li>
          <li><stron>Year: </stron> {book.year}</li>
          <br/>
          {/* onClick event */}
          <button className="btn btn-primary" onClick={(e) => {addToCart(book); e.preventDefault();}}>Buy</button>
        </ul>
      </div>
    </div>
  );
};

BookDetails.propTypes = {
  book: React.PropTypes.object.isRequired,
  addToCart: React.PropTypes.func.isRequired
};

export default BookDetails;
