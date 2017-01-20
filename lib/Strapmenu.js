'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _reactRouterBootstrap = require('react-router-bootstrap');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

require('../css/strapmenu.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GENERATOR_FIELDS = ['path', 'name', 'icon', 'divideAfter'];

var Strapmenu = function (_React$Component) {
    _inherits(Strapmenu, _React$Component);

    function Strapmenu() {
        _classCallCheck(this, Strapmenu);

        return _possibleConstructorReturn(this, (Strapmenu.__proto__ || Object.getPrototypeOf(Strapmenu)).apply(this, arguments));
    }

    _createClass(Strapmenu, [{
        key: 'calculateRoutes',
        value: function calculateRoutes() {

            var _routes = this.props.routes;
            var mainRoute = _routes[0];

            if (!mainRoute.childRoutes || mainRoute.childRoutes.length < 1) {
                return console.error('No child routes.');
            }

            var generatedRoutes = [];

            // TODO : Sorting
            var flatten = function flatten(routerRoutes) {

                routerRoutes.forEach(function (route) {

                    if (route.exposed) {

                        generatedRoutes.push(_lodash2.default.pick(route, GENERATOR_FIELDS));

                        if (route.childRoutes) {
                            flatten(route.childRoutes);
                        }
                    }

                    if (route.divideAfter) {
                        generatedRoutes.push({ divider: true });
                    }
                });

                return generatedRoutes;
            };

            return flatten(mainRoute.childRoutes);
        }
    }, {
        key: 'render',
        value: function render() {

            if (!this.props.routes) {
                console.error('gimme routs');
                return _react2.default.createElement(
                    'div',
                    null,
                    'No routes found'
                );
            }

            var _routes = this.calculateRoutes();

            return _react2.default.createElement(
                _reactBootstrap.NavDropdown,
                this.props.dropdownProps,
                _lodash2.default.map(_routes, function (route) {

                    if (route.divider) return _react2.default.createElement(_reactBootstrap.MenuItem, { key: ['divider', _lodash2.default.random(1000)].join('_'), divider: true });

                    return _react2.default.createElement(
                        _reactRouterBootstrap.LinkContainer,
                        { key: route.path, to: { pathname: route.path } },
                        _react2.default.createElement(
                            _reactBootstrap.MenuItem,
                            null,
                            _react2.default.createElement(
                                'div',
                                { className: 'menu-item-icon' },
                                _react2.default.createElement('span', { className: route.icon })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'menu-item-title' },
                                route.name
                            )
                        )
                    );
                })
            );
        }
    }]);

    return Strapmenu;
}(_react2.default.Component);

Strapmenu.propTypes = {
    routes: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object).isRequired,
    dropdownProps: _react2.default.PropTypes.shape({
        id: _react2.default.PropTypes.string.isRequired,
        title: _react2.default.PropTypes.string.isRequired
    })
};

Strapmenu.defaultProps = {
    dropdownProps: {
        id: 'navbar-dropdown',
        title: 'Dropdown'
    }
};

exports.default = Strapmenu;