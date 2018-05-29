import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {getMessages} from './actions';

class App extends Component {

  componentWillMount() {
    this.props.dispatch(getMessages());
  }

  renderList = ({messages}) => (
    messages ?
      messages.map(item => (
        <div key={item.id} className="item-list">
          <div className="title">{item.title}</div>
          <div className="sender">Message form:<span> {item.from} </span> </div>
          <div className="body">{item.message}</div>
        </div>
      ))
    :null
  )

  render() {
    return (
      <div className="App">
        <div className="top">
          <h3>Messages</h3>
          <Link to="/form">Add</Link>
        </div>
        <div className="messages_container">
          {this.renderList(this.props.messages)}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  messages: PropTypes.object,
  dispatch: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(App);
