class Visibility extends React.Component {
    constructor(props){
        super(props);
        this.handleVisibility = this.handleVisibility.bind(this)
        this.state ={
            visibility: false
        }
    }

    handleVisibility() {
        this.setState((prevState)=>{
            return {
                visibility: !prevState.visibility
            }
        });

    }

    render(){
        return (
            <div>
                <h1>Visibility toggle</h1>

                <button onClick={this.handleVisibility}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visibility && <p>Now you can see the details</p>}
            </div>
        )
    }

}

ReactDOM.render(<Visibility />, document.getElementById('app'));

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