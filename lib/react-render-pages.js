import React from 'react';
import ReactDOM from 'react-dom';

// import { render } from 'react-render-pages'
// class Example extends React.Component {
//   render() { return <h1>This component render in "#example-domId"</h1>}
// }
// ReactDOMRender("example-domId", Example)
/**
 * render component in dom id.
 * @param {string} domId - dom id.
 */
var ReactDOMRender = function ReactDOMRender(domId, Component) {
  document.addEventListener('DOMContentLoaded', function () {
    var element = document.getElementById(domId);
    if (!element) return false;
    var props = JSON.parse(element.dataset.props || '{}');
    ReactDOM.render(React.createElement(Component, props, null), element);
  });
};

/**
 * Decorator function.
 * import { render } from 'react-render-pages'
 * @render("example-domId")
 * class Example extends React.Component {
 *   render() { return <h1>This component render in "#example-domId"</h1>}
 * }
 * @param {string} domId - dom id.
 */
var render = function render(domId) {
  return function (target, property, descriptor) {
    ReactDOMRender(domId, target);
  };
};

// import { renderIn } from 'react-render-pages'
// const Example = renderIn("example-domId", (props) =>
//   <h1>This component render in "#example-domId"</h1>
// ))
/**
 * render component in dom id.
 * @param {string} domId - dom id.
 * @param {function} Component - react-component.
 * @return {function} Component - react-component
 */
var renderIn = function renderIn(domId, Component) {
  ReactDOMRender(domId, Component);
  return Component;
};

export { ReactDOMRender, render, renderIn };
