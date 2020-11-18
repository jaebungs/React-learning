// stateless functional component

class IndecisionApp extends React.Component {
  // babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    };
  }

  // lifecycle methods
  componentDidMount(){
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      
      if (options) {
        this.setState(()=>({ options }))
      }
    } catch (e) {
      console.log(e)
    }
  }
  componentDidUpdate(prevProps, prevState){
    if (prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      console.log('Saving Data');
    }
  }
  componentWillUnmount(){
    console.log('componentWillUnmount');
  }

  handleDeleteOptions() {
    this.setState(()=>({
      options: []
    }));
  }

  handleDeleteOption(optionToRemove){
    this.setState((prevState)=>({
      options: prevState.options.filter((option)=> option !== optionToRemove)
    }))
  }

  handlePick() {
    alert(this.state.options[Math.floor(Math.random() * this.state.options.length)])
  }

  handleAddOption(option){
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({
        options: prevState.options.concat(option)
      }));
  }

  render() {
    const title = 'Indecision App';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action 
          hasOptions={this.state.options.length > 0} 
          handlePick={this.handlePick}
          />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption = {this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
yar      <h1>{props.title}</h1>
      { props.subtitle && <h2>{props.subtitle}</h2> }
    </div>
  );
}

Header.defaultProps = {
  title: "Some default!"
}
// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

// Build with stateless function
const Action = (props) => {
  return (
    <div>
      <button 
      onClick={props.handlePick}
      disabled={!props.hasOptions}
      >What should I do?</button>
    </div>
  );
}
// build using class
// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button 
//         onClick={this.props.handlePick}
//         disabled={!this.props.hasOptions}
//         >What should I do?</button>
//       </div>
//     );
//   }
// }

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option</p>}

      {
      props.options.map((option) => (
        <Option
        key={option}
        optionText={option}
        handleDeleteOption={props.handleDeleteOption}
        />
      ))
      }
    </div>
  );
}
// class Options extends React.Component {
//   render () {
//     return (
//       <div>
//         <button onClick={this.props.handleDeleteOptions}>Remove All</button>

//         <h3>Options: {this.props.options.length}</h3>

//         {
//         this.props.options.map((option) => <Option key={option} optionText={option}/>)
//         }
//       </div>
//     );
//   }
// }

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button 
      onClick={(e) => {
        props.handleDeleteOption(props.optionText)
      }}
      >
      remove
      </button>
    </div>
  );
}
// class Option extends React.Component{
//   render() {
//     return (
//       <div>
//         {this.props.optionText}
//       </div>
//     );
//   }
// }

class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      error: undefined
    }
  }
  
  handleSubmit(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(()=>({ error }));

    if (!error) {
      e.target.elements.option.value = ''
    }
  }

  render() {
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="option"></input>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   )
// }

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));