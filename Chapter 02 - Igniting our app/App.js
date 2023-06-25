/**
 *
 *  <div id="parent">
 *      <div id="child1">
 *          <div id="list">
 *              <ul>
 *                  <li>A</li>
 *                  <li>B</li>
 *                  <li>C</li>
 *                  <li>D</li>
 *              </ul>
 *          </div>
 *      </div>
 *      <div id="child2">
 *          <div id="list">
 *              <ul>
 *                  <li>A</li>
 *                  <li>B</li>
 *                  <li>C</li>
 *                  <li>D</li>
 *              </ul>
 *          </div>
 *      </div>
 *  </div>
 *
 *
 **/
import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('div', { id: 'parent' }, [
  React.createElement(
    'div',
    { id: 'child1', key: '1'},
    React.createElement(
      'div',
      { id: 'list' },
      React.createElement('ul', {}, [
        React.createElement('li', {key: '1'}, 'A'),
        React.createElement('li', {key: '2'}, 'B'),
        React.createElement('li', {key: '3'}, 'C'),
      ])
    )
  ),
  React.createElement(
    'div',
    { id: 'child2', key: '2' },
    React.createElement(
      'div',
      { id: 'list' },
      React.createElement('ul', {}, [
        React.createElement('li', {key: '1'}, 'A'),
        React.createElement('li', {key: '2'}, 'B'),
        React.createElement('li', {key: '3'}, 'C'),
      ])
    )
  ),
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)
