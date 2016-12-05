var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var text = this.refs.newTodo.value;
    if (text.length > 0) {
      this.refs.newTodo.value = '';
      dispatch(actions.startAddTodo(text));
    } else {
      this.refs.newTodo.focus();
    }
  },
  render: function() {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.handleSubmit}>
          <input ref="newTodo" type="text" placeholder="New Todo"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);
