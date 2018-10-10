import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem';
import Header from './Header';
import AddButton from './AddButton';
import DeleteButton from './DeleteButton';

class App extends React.Component {
  state = {
    value: '',
    items: [],
  };

  addItem = event => {
    event.preventDefault();
    this.setState(oldState => ({
      items: [...oldState.items, this.state.value],
    }));
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  inputIsEmpty = () => this.state.value === '';

  noItemsFound = event => this.state.items.length === 0;

  render() {
    return (
      <div className="App">
        <Header logo={ logo } />
        <h2>Shopping List</h2>
    	<AddButton value={this.state.value} handleChange={this.handleChange} addItem={this.addItem} inputIsEmpty={this.inputIsEmpty} />
		<DeleteButton deleteLastItem={this.deleteLastItem} noItemsFound={this.noItemsFound} />
        <p className="items">Items</p>
		<ListItem items={ this.state.items } />
      </div>
    );
  }
}

export default App;
