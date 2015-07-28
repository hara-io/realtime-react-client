import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

class MainApp extends React.Component {

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
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
