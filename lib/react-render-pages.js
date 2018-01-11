import React from 'react';
import ReactDOM from 'react-dom';

// import { render } from 'react-render-pages'
// class Example extends React.Component {
//   render() { return <h1>This component render in "#example-domId"</h1>}
// }
// ReactDOMRender("example-domId", Example)
var ReactDOMRender = function ReactDOMRender(dom_id, Component) {
  document.addEventListener('DOMContentLoaded', function () {
    var element = document.getElementById(dom_id);
    if (!element) return false;
    var props = JSON.parse(element.dataset.props) || {};
    ReactDOM.render(React.createElement(Component, props, null), element);
  });
};

// import { render } from 'react-render-pages'
// @render("example-domId")
// class Example extends React.Component {
//   render() { return <h1>This component render in "#example-domId"</h1>}
// }

var render = function render(dom_id) {
  return function (target, property, descriptor) {
    ReactDOMRender(dom_id, target);
  };
};

// import { renderIn } from 'react-render-pages'
// const Example = renderIn("example-domId", (props) =>
//   <h1>This component render in "#example-domId"</h1>
// ))

var renderIn = function renderIn(dom_id, Component) {
  ReactDOMRender(dom_id, Component);
  return Component;
};

export { ReactDOMRender, render, renderIn };
