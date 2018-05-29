import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import {addMessage} from './actions/index';
import PropTypes from 'prop-types';

class Form extends Component {

  renderInputField = (field) => {
    const className = `form-input ${field.meta.touched && field.meta.error ? 'has-error': ''}`;
    return (
      <div className={className}>
        <label htmlFor="title">{field.myLable}</label>
        <input type="text" name="title" {...field.input}/>
        <div className="error">
          {field.meta.touched ? field.meta.error:''}
        </div>
      </div>
    );
  }

  renderTextarea = (field) => {
    const className = `form-input ${field.meta.touched && field.meta.error ? 'has-error': ''}`;
    return (
      <div className={className}>
        <label htmlFor="title">{field.myLable}</label>
        <textarea name="message" {...field.input} ></textarea>
        <div className="error">
          {field.meta.touched ? field.meta.error:''}
        </div>
      </div>
    );
  }

  onSubmit = (values) => {
    this.props.addMessage(values, ()=>(
      this.props.history.push('/')
    ));
  }
  render() {
    return (
      <div className="Form">
        <div className="top">
          <h3>Add s message</h3>
          <Link to="/">Back</Link>
        </div>
        <form onSubmit={this.props.handleSubmit((event)=>this.onSubmit(event))}>
          <Field
          myLable="Enter title"
            name="title"
            component={this.renderInputField}
          />
          <Field
            myLable="Enter sender"
            name="from"
            component={this.renderInputField}
          />
          <Field
            myLable="Enter message"
            name="message"
            component={this.renderTextarea}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = 'The title must not be empty';
  }
  if (!values.from) {
    errors.from = 'The sender must not be empty';
  }
  if (!values.message) {
    errors.message = 'The message must not be empty';
  }

  return errors;
};
Form.propTypes = {
  handleSubmit: PropTypes.func,
  addMessage: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

const mapStateToProps = (state) => {
  return {
    success: state.success
  };
};

export default reduxForm({
  validate,
  form:'PostMessage'
})(
  connect(mapStateToProps,{addMessage})(Form)
);
