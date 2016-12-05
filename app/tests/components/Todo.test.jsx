var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');

import * as actions from 'actions';
import {Todo} from 'Todo';

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should call dispatch toggleTodo action when clicked', () => {
    var todoData = {
      id: 199,
      text: 'Shave the cat',
      completed: true
    }
    var action = actions.startToggleTodo(todoData.id, !todoData.completed)
    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todo));
    TestUtils
      .Simulate
      .click($el[0]);
    expect(spy).toHaveBeenCalledWith(action);

  });
});
