# React render pages

Simple lib for help render components in a dom node with own props; alternative to build routes.

## Installation
```sh
npm install react-render-pages --save
```

## How work

If you want render your component like a page you need to write something like.

```js
  document.addEventListener('DOMContentLoaded', () => {
    const element = document.getElementById(domId)
    if (!element) return false
    const props = JSON.parse(element.getAttribute('data')) || {}
    ReactDOM.render(<HomeView {...props} />, element)
  })
```

This snippet help to render the component only if the dom node exists and use the data attribute to pass props to the component

## Usage
## Example html

```html
<html>
  <body>
    <div id="example-domId" data="{"example":"data"}"></div>
  </body>
  <script src="bundle.js"></script>
</html>
```

### renderIn

```javascript
import { renderIn } from 'react-render-pages'

const Example = renderIn("example-domId", (props) =>
  <h1>This component render in "#example-domId"</h1>
))
```

### render
Use es7 decorators
```javascript
import { render } from 'react-render-pages'

@render("example-domId")
class Example extends React.Component {
  render() { return <h1>This component render in "#example-domId"</h1>}
}
```

### ReactDOMRender
Core function to render components

```javascript
import { ReactDOMRender } from 'react-render-pages'

class Example extends React.Component {
  render() { return <h1>This component render in "#example-domId"</h1>}
}
ReactDOMRender("example-domId", Example)
```

# Example
(basic example)[doc/basic_example.md]

### TODO
- [ ] add more examples
- [ ] pass context to react page
- [ ] test with server render
- [ ] use the same component name for render in dom?
- [ ] help to make layouts?
