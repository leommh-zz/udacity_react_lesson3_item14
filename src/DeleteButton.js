import React from 'react'
import PropTypes from 'prop-types';

//Component Button
const DeleteButton = props => {
	const {deleteLastItem, noItemsFound} = props

  	return (
    	<button onClick={deleteLastItem} disabled={noItemsFound()}>
         	Delete Last Item
      	</button>
  	)
}

//PropTypes
DeleteButton.propTypes = {
	deleteLastItem: PropTypes.func.isRequired,
  	noItemsFound: PropTypes.func.isRequired,
}

export default DeleteButton;
