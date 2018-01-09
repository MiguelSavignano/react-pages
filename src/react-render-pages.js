import React from 'react'
import ReactDOM from 'react-dom'

// import { render } from 'react-render-pages'
// class Example extends React.Component {
//   render() { return <h1>This component render in "#example-domId"</h1>}
// }
// ReactDOMRender("example-domId", Example)

const ReactDOMRender = (dom_id, Component) => {
  document.addEventListener('DOMContentLoaded', () => {
    const element = document.getElementById(dom_id)
    if (!element) return false
    const props = JSON.parse(element.getAttribute('data')) || {}
    ReactDOM.render(<Component {...props} />, element)
  })
}

// import { render } from 'react-render-pages'
// @render("example-domId")
// class Example extends React.Component {
//   render() { return <h1>This component render in "#example-domId"</h1>}
// }

function render(dom_id) {
  return (target, property, descriptor) => {
    ReactDOMRender(dom_id, target)
  }
}

// import { renderIn } from 'react-render-pages'
// const Example = renderIn("example-domId", (props) =>
//   <h1>This component render in "#example-domId"</h1>
// ))

function renderIn(dom_id, Component) {
  ReactDOMRender(dom_id, Component)
}

export { ReactDOMRender, render, renderIn }