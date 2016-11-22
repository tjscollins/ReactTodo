var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Ein the corgi'
      };

      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      }

      var res = reducers.showCompletedReducer(df(false), df(action));
      expect(res).toEqual(true);
      res = reducers.showCompletedReducer(df(true), df(action));
      expect(res).toEqual(false);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'Shave the cat'
      }

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle todos', () => {
      var action = {
        type: 'TOGGLE_TODO',
        id: '11'
      };
      var todos = [
        {
          id: '11',
          text: 'Shave the cat',
          completed: false,
          createdAt: 123,
          completedAt: undefined
        }
      ];
      var res = reducers.todosReducer(df(todos), df(action));
      expect(res[0].completed).toBe(true);
      expect(res[0].completedAt).toBeA('number');
    })
  });
});
