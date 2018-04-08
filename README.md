
configureBack() {
    back_image_version="7.1"
    read -p "[?] ¿Qué version de php necesitas?: [$back_image_version] " back_image_version

    back_template=$( cat images/back/Dockerfile )
    back_service=${back_template/\#\#BACK_DOCKER_IMAGE\#\#/$back_image_version}
    mkdir ./docker/development/back
    echo $back_service >> ./docker/development/back/Dockerfile
}

# React render pages

Simple lib for help render components in a dom node with own props; alternative to build routes.

If your app it not a single page application, this package help you to use the same function for render react components like a page

## Installation
```sh
npm install react-render-pages --save
```

## How work

If you want render your component like a page you need to write something like this.

```js
  document.addEventListener('DOMContentLoaded', () => {
    const element = document.getElementById(domId)
    if (!element) return false
    const props = JSON.parse(element.dataset.props) || {}
    ReactDOM.render(<HomeView {...props} />, element)
  })
```

This snippet help to render the component only if the dom node exists and use the data attribute to pass props to the component.

## Usage
## Example html

```html
<html>
  <body>
    <div id="example-domId" data-props='{"example":"data"}'></div>
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
[basic example](doc/basic_example.md)

### TODO
- [ ] add more examples
- [ ] pass context to react page
- [ ] test with server render
- [ ] use the same component name for render in dom?
- [ ] help to make layouts?
