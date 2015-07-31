import React from 'react';

class Header extends React.Component {

  render() {
  	return (
      <div id="appHeader">
        <span className="fa fa-cogs"></span>
        <span>Tessel Dashboard</span>
      </div>
  	);
  }

}

export default Header;
