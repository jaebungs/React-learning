'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  //   babel src/playground/counter-example.js --out-file=public/scripts/app.js --prese 
  // ts=env,react --watch
  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.handleIncreaseCounter = _this.handleIncreaseCounter.bind(_this);
    _this.handleDecreaseCounter = _this.handleDecreaseCounter.bind(_this);
    _this.handleResetCounter = _this.handleResetCounter.bind(_this);
    _this.state = {
      count: 0
    };
    return _this;
  }

  _createClass(Counter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      try {
        var count = parseInt(localStorage.getItem('count'), 10);

        if (!isNaN(count)) {
          this.setState(function () {
            return { count: count };
          });
        }
      } catch (e) {
        console.log(e);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.count !== this.state.count) {
        localStorage.setItem('count', this.state.count);
        console.log('componentDidUpdate');
      }
    }
  }, {
    key: 'handleIncreaseCounter',
    value: function handleIncreaseCounter() {
      this.setState(function (prevState) {
        return {
          count: prevState.count + 1
        };
      });
    }
  }, {
    key: 'handleDecreaseCounter',
    value: function handleDecreaseCounter() {
      this.setState(function (prevState) {
        return {
          count: prevState.count - 1
        };
      });
    }
  }, {
    key: 'handleResetCounter',
    value: function handleResetCounter() {
      this.setState(function () {
        return {
          count: 0
        };
      });

      // this does not really work. not a good way.
      // this.setState({
      //   count: 0
      // });
      // this.setState({
      //   count: this.state.count + 1
      // });
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
          'Count: ',
          this.state.count
        ),
        React.createElement(
          'button',
          { onClick: this.handleIncreaseCounter },
          '+1'
        ),
        React.createElement(
          'button',
          { onClick: this.handleDecreaseCounter },
          '-1'
        ),
        React.createElement(
          'button',
          { onClick: this.handleResetCounter },
          'Reset'
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

// Counter.defaultProps = {
//   count: 0
// }

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));

// let count = 0;

// const addOne = () => {
//   count++;
//   console.log("addOne", count);
//   renderCounterApp();
// };

// const minusOne = () => {
//   count--;
//   console.log("minuseOne", count);
//   renderCounterApp();
// };

// const reset = () => {
//   count = 0;
//   console.log("reset", count);
//   renderCounterApp();
// };

// const appRoot = document.getElementById("app");

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };
// renderCounterApp();
