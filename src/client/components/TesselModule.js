import React from 'react';
import TesselModuleActions from '../actions/TesselModuleActions';
import TesselModuleStore from '../stores/TesselModuleStore';

class TesselModule extends React.Component {

  constructor(props) {
    super(props);
    this.state = { list: this.props.list };
    this._handleUpdateClick = this._handleUpdateClick.bind(this);
    this._onChange = this._onChange.bind(this);

  }

  componentDidMount() {
    TesselModuleStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    TesselModuleStore.removeChangeListener(this._onChange);
  }

  render() {
  	return (
      <div>
        <input type="button" onClick={this._handleUpdateClick} value="Update" />
        Tessel module {this.state.list} {this.props.type}
      </div>
  	);
  }

  _handleUpdateClick() {
    TesselModuleActions.update(this.props.guid, this.props.type);
  }

  /**
   * Event handler for 'change' events coming from the TesselModuleStore
   */
  _onChange() {
    console.log(TesselModuleStore.getList());
    this.setState({
      list: TesselModuleStore.getList()
    });
  }
}

TesselModule.propTypes = {
  guid: React.PropTypes.string.isRequired,
  type: React.PropTypes.oneOf(['L', 'S'])
}
TesselModule.defaultProps = { list: ['cane'] };

export default TesselModule;
