import React from 'react';

class Header extends React.Component {

  render() {
  	return (
      <div id="appHeader">
        <span className="title-icon fa fa-tachometer"></span>
        <h1><span className="title-bold">Tessel</span><span className="title-normal">Dashboard</span></h1>
      </div>
  	);
  }

}

export default Header;
