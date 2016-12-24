import React from 'react';
import { connect } from 'react-redux';
import BookForm from './BookForm';
import * as bookActions from '../../actions/bookActions';

class Book extends React.Component{
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
          <h3>Books</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th></th>
              </tr>
            </thead>
            <tbody>

            {this.props.books.map((b) => <tr key={b._id}>
              <td>{b.Title}</td>

            </tr> )}
            </tbody>
          </table>
        </div>
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

Book.propTypes = {
  createBook: React.PropTypes.func.isRequired,
  books: React.PropTypes.array.isRequired
};

// Use connect to put them together  <td><Link to={`/books/${b.id}`}>View</Link></td>
export default connect(mapStateToProps, mapDispatchToProps)(Book);
