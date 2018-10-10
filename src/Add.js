import React from 'react'

class Add extends React.component(){
	
  addItem = event => {
    event.preventDefault();
    this.setState(oldState => ({
      items: [...oldState.items, this.state.value],
    }));
  };
  
  render(){
  	return();
  }
}



export default Add;
