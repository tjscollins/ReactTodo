var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');

var TodoApp = require('TodoApp');
var {AddTodo} = require('AddTodo');

import * as actions from 'actions';

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should dispatch ADD_TODO with valid new todo input', () => {
    var todoText = 'Shave the whales';
    var action = actions.startAddTodo(todoText);
    // {
    //   type: 'ADD_TODO',
    //   todo: {
    //     id: '123',
    //     text: 'Something to do',
    //     completed: false,
    //     createdAt: 89734254
    //   }
    // };
    var spy = expect.createSpy();;
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));
    addTodo.refs.newTodo.value = todoText;
    TestUtils
      .Simulate
      .submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should not dispatch ADD_TODO with invalid new todo input', () => {
    var spy = expect.createSpy();;
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));
    addTodo.refs.newTodo.value = '';
    TestUtils
      .Simulate
      .submit($el.find('form')[0]);
    expect(spy).toNotHaveBeenCalled();
  });
});
