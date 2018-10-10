import React from 'react'
import PropTypes from 'prop-types';

//Component
const Item = props => {
	const { index, item } = props
	return(<li key={ index }>{ item }</li>)
}

//PropTypes
Item.propTypes = {
	index: PropTypes.number.isRequired,
  	item: PropTypes.string.isRequired,
}

export default Item;
