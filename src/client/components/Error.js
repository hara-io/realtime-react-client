import React from 'react';

class Error extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  componentWillUnmount() {
  }

  render() {
  	return (
      <div className="error-message">
        <span className="error-icon fa fa-exclamation-triangle"></span>
        <span className="error-code">{ this.props.code }</span>
        <span className="error-title">{ this.props.title }</span>
        <span className="error-description">{ this.props.description }</span>
      </div>
  	);
  }

}

Error.propTypes = {
  code: React.PropTypes.string,
  title: React.PropTypes.string,
  description: React.PropTypes.string
}

export default Error;
