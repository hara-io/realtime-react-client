import React from 'react';
import DeviceList from './DeviceList';
import Device from './Device';

class Content extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  componentWillUnmount() {

  }


  render() {
  	return (
      <div id="pageContent">
        <div id="deviceList">
          <DeviceList />
        </div>
        <div id="deviceConfig">
          <Device />
        </div>
      </div>
  	);
  }

}

export default Content;
