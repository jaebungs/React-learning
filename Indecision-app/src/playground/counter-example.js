class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleIncreaseCounter = this.handleIncreaseCounter.bind(this);
    this.handleDecreaseCounter = this.handleDecreaseCounter.bind(this);
    this.handleResetCounter = this.handleResetCounter.bind(this);
    this.state = {
      count: 0
    };
  }

  handleIncreaseCounter(){
    this.setState((prevState)=>{
      return {
        count: prevState.count + 1
      }
    });
  }
  handleDecreaseCounter(){
    this.setState((prevState)=>{
      return {
        count: prevState.count - 1
      }
    })
  }
  handleResetCounter(){
    this.setState(()=>{
      return {
        count: 0
      }
    });

    // this does not really work. not a good way.
    // this.setState({
    //   count: 0
    // });
    // this.setState({
    //   count: this.state.count + 1
    // });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleIncreaseCounter}>+1</button>
        <button onClick={this.handleDecreaseCounter}>-1</button>
        <button onClick={this.handleResetCounter}>Reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

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
