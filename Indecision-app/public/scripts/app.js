'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Visibility = function (_React$Component) {
    _inherits(Visibility, _React$Component);

    function Visibility(props) {
        _classCallCheck(this, Visibility);

        var _this = _possibleConstructorReturn(this, (Visibility.__proto__ || Object.getPrototypeOf(Visibility)).call(this, props));

        _this.handleVisibility = _this.handleVisibility.bind(_this);
        _this.state = {
            visibility: false
        };
        return _this;
    }

    _createClass(Visibility, [{
        key: 'handleVisibility',
        value: function handleVisibility() {
            this.setState(function (prevState) {
                return {
                    visibility: !prevState.visibility
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Visibility toggle'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleVisibility },
                    this.state.visibility ? 'Hide details' : 'Show details'
                ),
                this.state.visibility && React.createElement(
                    'p',
                    null,
                    'Now you can see the details'
                )
            );
        }
    }]);

    return Visibility;
}(React.Component);

ReactDOM.render(React.createElement(Visibility, null), document.getElementById('app'));

// const appRoot = document.getElementById('app');

// let toggle = false;


// const onShowToggle =() => {
//     if (toggle) {
//         toggle = !toggle;
//     } else {
//         toggle = !toggle;
//     }

//     renderTemplate()
// }

// const renderTemplate = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>

//             <button onClick={onShowToggle}>
//                 {toggle ? 'Hide details' : 'Show details'}
//             </button>
//             {toggle ? <p>'Now you can see the details'</p> : ''}
//             {toggle && (
//                 <div>
//                     <p>Or I can use this</p>
//                 </div>
//             )}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// }

// renderTemplate()
