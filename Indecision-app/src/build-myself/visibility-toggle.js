const appRoot = document.getElementById('app');

let toggle = false;


const onShowToggle =() => {
    if (toggle) {
        toggle = !toggle;
    } else {
        toggle = !toggle;
    }

    renderTemplate()
}

const renderTemplate = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>

            <button onClick={onShowToggle}>
                {toggle ? 'Hide details' : 'Show details'}
            </button>
            {toggle ? <p>'Now you can see the details'</p> : ''}
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderTemplate()