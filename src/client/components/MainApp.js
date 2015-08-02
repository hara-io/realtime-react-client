import React from 'react';
import mui from 'material-ui';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import styles from '../../../assets/stylesheets/base.scss';

let ThemeManager = new mui.Styles.ThemeManager();

class MainApp extends React.Component {

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
  	return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
  	);
  }

}

MainApp.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default MainApp;
