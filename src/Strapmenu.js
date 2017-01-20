import React, { Component, PropTypes } from 'react'

import { MenuItem, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import _ from 'lodash'

import '../css/strapmenu.css'

const GENERATOR_FIELDS = ['path', 'name', 'icon', 'divideAfter']

class Strapmenu extends React.Component {

    calculateRoutes() {

        const _routes = this.props.routes
        const mainRoute = _routes[0]

        if (!mainRoute.childRoutes || mainRoute.childRoutes.length < 1) {
            return console.error('No child routes.')
        }

        let generatedRoutes = []

        // TODO : Sorting
        const flatten = (routerRoutes) => {

            routerRoutes.forEach(route => {

                if (route.exposed) {

                    generatedRoutes.push(_.pick(route, GENERATOR_FIELDS))

                    if (route.childRoutes) {
                        flatten(route.childRoutes)
                    }

                }


                if (route.divideAfter) {
                    generatedRoutes.push({ divider: true })
                }

            })

            return generatedRoutes
        }

        return flatten(mainRoute.childRoutes)

    }

    render() {

        if (!this.props.routes) {
            console.error('gimme routs')
            return <div>ERRÖR : No routes found</div>
        }

        const _routes = this.calculateRoutes()

        return (
            <NavDropdown {...this.props.dropdownProps}>
                {
                    _.map(_routes, route => {

                        if (route.divider)
                            return <MenuItem key={['divider', _.random(1000)].join('_')} divider />

                        return (
                            <LinkContainer key={route.path} to={{ pathname: route.path }}>
                                <MenuItem>
                                    <div className='menu-item-icon'><span className={route.icon} /></div>
                                    <div className='menu-item-title'>{route.name}</div>
                                </MenuItem>
                            </LinkContainer>
                        )

                    })
                }
            </NavDropdown>
        )
    }
}

Strapmenu.propTypes = {
    routes: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    dropdownProps: React.PropTypes.shape({
        id: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired
    })
}

Strapmenu.defaultProps = {
    dropdownProps: {
        id: 'navbar-dropdown',
        title: 'Dropdown'
    }
}

export default Strapmenu