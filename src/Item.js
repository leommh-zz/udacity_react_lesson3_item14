import React from 'react'

const Item = props => {
	const { index, item } = props
	return(<li key={ index }>{ item }</li>)
}

export default Item;
