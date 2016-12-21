import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import BookDetails from './bookDetails';



class BookDetailsPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount(){
       this.props.fetchBookById(this.props.params.id);
    }

    addToCart(book){
      const item = {
        title: book.title,
        price: book.price
      };
      this.props.addToCart(item);
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
const mapStateToProps = (state, ownProps) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailsPage);
