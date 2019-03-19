import React from 'react';
import { SearchBar } from 'react-native-elements';

export default class Search extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
        <SearchBar
          lightTheme
          icon={{ type: 'font-awesome', name: 'search' }}
          placeholder='Type Here...' />
    );
  }
}