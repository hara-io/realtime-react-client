import React from 'react';
import DeviceList from './DeviceList';
import Device from './Device';

class Content extends React.Component {

  render() {
  	return (
      <div>
        Devices list:
        <DeviceList />
        <br/>
        <Device />
      </div>
  	);
  }

}

export default Content;
