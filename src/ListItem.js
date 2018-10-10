import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

//Component
const ListItem = props => {
  	const { items } = props;
  
    return (
        <ol className="item-list">
        	{items.map((item, index) => <Item key={index} item={item} />)}
        </ol>
    );
}

//PropTypes
ListItem.propTypes = {
	items: PropTypes.array.isRequired,
}

export default ListItem;
