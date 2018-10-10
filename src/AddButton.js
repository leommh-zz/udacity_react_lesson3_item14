import React from 'react'
import PropTypes from 'prop-types';

//Component Button
const AddButton = props => { 
  const { addItem, handleChange, inputIsEmpty, value } = props;
  
  return(
  <form onSubmit={addItem}>
    <input type="text" placeholder="Enter New Item" value={value} onChange={handleChange} />
    <button disabled={inputIsEmpty()}>Add</button>
  </form>
)}

//PropTypes
AddButton.propTypes = {
	addItem: PropTypes.func.isRequired,
  	value: PropTypes.string,
  	handleChange: PropTypes.func.isRequired,
  	inputIsEmpty: PropTypes.func.isRequired,
}

export default AddButton;
