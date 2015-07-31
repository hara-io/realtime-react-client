import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import styles from '../../../assets/stylesheets/base.scss';

class MainApp extends React.Component {

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

export default MainApp;
