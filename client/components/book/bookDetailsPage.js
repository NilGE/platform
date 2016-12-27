import React from 'react';
import {connect} from 'react-redux';
import BookDetails from './bookDetails';
import * as bookActions from '../../actions/bookActions';

class BookDetailsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount(){
    this.props.fetchBookById(this.props.params.id);
  }

  render() {
    return (
      <div>
        <h1>Book Details Page</h1>
        <BookDetails book={this.props.book}/>
      </div>
    );
  }
}

// Map state to props
const mapStateToProps = (state) => {
  return {
    book: state.book
  };
};
// Map dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    // This dispatch will trigger
    // the Ajax request we setup
    // in our actions
    fetchBookById: bookId => dispatch(bookActions.fetchBookById(bookId))
  };
};

BookDetailsPage.propTypes = {
  fetchBookById: React.PropTypes.func.isRequired,
  params: React.PropTypes.object.isRequired,
  book: React.PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailsPage);
