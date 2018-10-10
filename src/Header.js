import React from 'react';
import PropTypes from 'prop-types';

//Component
const Header = props => {
	const {logo} = props;
  
	return(
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
	);
}

//PropTypes
Header.propTypes = {
	logo: PropTypes.string.isRequired,
}

export default Header;