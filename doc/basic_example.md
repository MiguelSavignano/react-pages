# Example

- folder estructure
```
public
--index.html
--contact-us.html
js
--bundle.js
--entry.js
--pages
----home.jsx
----contact-us.jsx
```

* index.html
```html
<html>
  <body>
    <div id="home" data-props='{"company_name":"My Awesome Company"}'></div>
  </body>
  <script src="bundle.js"></script>
</html>

```
* home.jsx
```javascript
import { renderIn } from 'react-render-pages'

const HomePage = renderIn("home", (props) => (
  <h1>Home page {props.company_name} </h1>
))
```

* contact-us.html
```html
<html>
  <body>
    <div id="contact-us" data-props='{"company_phone":"12345678"}'></div>
  </body>
  <script src="bundle.js"></script>
</html>
```

* contact-us.jsx
```javascript
import { render } from 'react-render-pages'

@render("contact-us")
class ContactUsPage extends React.Component {
  render() { return <h1>Contact Us page number: { this.props.company_phone }</h1>}
}
```
* entry.js
```javascript
import HomePage from './pages/home.jsx'
import ContactUsPage from './pages/contact-us.jsx'
// only load pages component
// your bundle.js contain all components but only render the component if the dom node exist
```