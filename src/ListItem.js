import React from 'react';
import Item from './Item';

const ListItem = props => {

  	const { items } = props;
    return (
        <ol className="item-list">
        	{ items.map((item, index) => <Item key={ index } item={ item } /> )}
        </ol>
    );
}

export default ListItem;
