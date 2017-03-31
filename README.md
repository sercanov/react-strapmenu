
# react-strapmenu

[![npm version](https://badge.fury.io/js/react-strapmenu.svg)](https://badge.fury.io/js/react-strapmenu)

Usable [bootstrap](https://github.com/react-bootstrap/react-bootstrap) dropdown menu generator for [react-router](https://github.com/ReactTraining/react-router)

### but why?
It's just another automated everyday-task. Simple but everyday, literally. According to statistics, currently **18312** kittens coding routes.js. No joke.
A lot of kittens with their tiny paws on keyboards.

### but how?
It basically loops through child routes to generate cute dropdown menu. 
like dis ;

![react-strapmenu](https://raw.githubusercontent.com/sercanov/react-strapmenu/master/example/preview.png)

Okay it's default. Not cute.

### teach me

**Installation**

```javascript
yarn add react-strapmenu
```
\- or -
```javascript
npm install react-strapmenu --save
```

----------

**Index.js**
```javascript

import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'
import browserHistory from 'react-router/lib/browserHistory'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route name='Root' path='/' component={App} >
      <Route path='/beers' name='Beers' icon='ion-beer' exposed component={Beers}/>
      <Route path='/paws' name='Paws' icon='ion-ios-paw' exposed component={Paws}/>
      <Route path='/octocats' name='Octocats' icon='ion-social-octocat' exposed component={Octocats} divideAfter>
        <Route path='/octocats/:id' name='Paws2' component={OctocatDetail} />
      </Route>
      <Route path='/logout' name='Logout' icon='ion-power' component={Logout} exposed />
    </Route>
  </Router>
),
  document.getElementById('root')
);

```

In your entry point ( where routes are defined ) expose which routes you want to include.
like dis ;

#### Route props

- **exposed**: appends to menu if true.
- **name**: name of your menu item.
- **icon**: class name of the icon. iconset should be included in the codebase. ex. `ion-users` , `fa fa-users` , `glyphicon glyphicon-users`
- **divideAfter**: appends menu divider after that item, doesn't need to exposed.

----------

**App.js**
```javascript
import { Navbar, Nav, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import NavbarGenerator from 'react-strapmenu'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Navbar fixedTop inverse>  
          <Navbar.Collapse>
            <Nav pullRight>
              <NavbarGenerator routes={this.props.routes} />
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="App-header">Insert content here</div>     
      </div>
    );
  }
}

export default App;
```

Import and render with routes.

#### Component props

- **routes (required)**: you have to pass the routes to the component. `this.props.routes` 🤔
- **dropdownProps**: props you want to pass to [`<NavDropdown />`][https://react-bootstrap.github.io/components.html#navs-dropdown]

----------

### TODO 
- [ ] Iconless layout
- [ ] Example project
- [ ] [Tell Me](https://www.youtube.com/watch?v=PXXdYttPTgc)
