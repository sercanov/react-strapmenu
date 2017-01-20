
#react-strapmenu

[![npm version](https://badge.fury.io/js/react-strapmenu.svg)](https://badge.fury.io/js/react-strapmenu)

[Bootstrap](https://github.com/react-bootstrap/react-bootstrap) dropdown menu generator for [react-router](https://github.com/ReactTraining/react-router)

###but why?
It's just another automated everyday-task. 
A lot of little kittens developing navigation menus synced with routes, every single day.

###but how?
It basically loops through the given routes to generate cute little dropdown menu. 
like dis ;

![react-strapmenu](https://raw.githubusercontent.com/sercanov/react-strapmenu/master/example/preview.png)

----------

###teach me
```javascript
yarn add react-strapmenu
```
\- or -
```javascript
npm install react-strapmenu --save
```
then, in your entry point - where the routes are defined - you'll need to expose which routes you want to include in menu.
like dis ;

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
####Route props

- **exposed**: indicates that you want it in the menu. 
- **name**: name of your menu item.
- **icon**: icon of your menu item. accepts any css icon class name. ex. `ion-users` , `fa fa-users` , `glyphicon glyphicon-users` ( related icon set should be included in your project ) 
- **divideAfter**: set menu item divider after that item, exposed or not.

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
####Component props

- **routes (required)**: you have to pass the routes to the component, which can be passed by `this.props.routes`
- **dropdownProps**: props you want to pass to [`<NavDropdown />`][https://react-bootstrap.github.io/components.html#navs-dropdown]


### TODO 
- [ ] Iconless layout
- [ ] Example project
- [ ] [Tell Me](https://www.youtube.com/watch?v=PXXdYttPTgc)