import React from 'react'

const DeleteButton = props => (
	<button onClick={props.deleteLastItem} disabled={props.noItemsFound()}>
       Delete Last Item
    </button>
)

export default DeleteButton;
