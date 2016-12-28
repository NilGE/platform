import React from 'react';
import { connect } from 'react-redux';
import BookForm from './BookForm';
import * as bookActions from '../../actions/bookActions';

class BookAddNews extends React.Component{
  constructor(props){
    super(props);
  }

  submitBook(input){
    this.props.createBook(input);
  }

  render(){
    return(
      <div className="row">
        <div className="col-md-6">
          <h3>New Book</h3>
          {/* Import and inject Book form */}
         <BookForm submitBook={this.submitBook.bind(this)} />
        </div>
      </div>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state) => {
  return {
    // You can now say this.props.books
    books: state.books
  };
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  // You can now say this.props.createBook
    createBook: book => dispatch(bookActions.createBook(book))
  };
};

BookAddNews.propTypes = {
  createBook: React.PropTypes.func.isRequired,
};

// Use connect to put them together  <td><Link to={`/books/${b.id}`}>View</Link></td>
export default connect( mapStateToProps, mapDispatchToProps)(BookAddNews);
