import React, { Component } from 'react';
import {gql} from 'apollo-boost'; // used to parse graphql queries
import {graphql} from 'react-apollo'; // bind apollo with react

const getBooksQuery = gql`
  {
    books {
      name
      author
    }
  }
`

class BookList extends Component {
  render() {
    console.log(this.props)
    return (
      <div id="book-list-container">
        <ul id="book-list">
          <li>Book Name</li>
        </ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
