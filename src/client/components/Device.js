import React from 'react';
import TesselModule from './TesselModule';

class Device extends React.Component {

  render() {
  	return (
      <div>
        <TesselModule guid='ciccio' type='L' />
        <TesselModule guid='caio' type='S' />
      </div>
  	);
  }

}

export default Device;
