var React = require('react');

var AddTodo = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var {onAddTodo} = this.props;
    var text = this.refs.newTodo.value;
    if (text.length > 0) {
      this.refs.newTodo.value = '';
      onAddTodo(text);
    } else {
      this.refs.newTodo.focus();
    }
  },
  render: function() {
    return (
      <div>
        <form ref="form" onSubmit={this.handleSubmit}>
          <input ref="newTodo" type="text" placeholder="New Todo"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
