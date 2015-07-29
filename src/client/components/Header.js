import React from 'react';
import mui from 'material-ui';

let ThemeManager = new mui.Styles.ThemeManager();
let AppBar = mui.AppBar;

class Header extends React.Component {

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
  	return (
      <div>
        <AppBar zDepth="0" title="HARA - Realtime React Application" />
      </div>
  	);
  }

}

Header.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default Header;
