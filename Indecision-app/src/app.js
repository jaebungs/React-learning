const appRoot = document.getElementById('app');
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

const app = {
  title: "Indecision App",
  subtitle: "Your life is depend on the computer",
  options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;
    
    if (option) {
         app.options.push(option);
         e.target.elements.option.value = ''
         renderTemplate()
    }
};

const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber];
    alert(option)
}

const onRemoveAll = () => {
    app.options = [];
    renderTemplate()
}

const renderTemplate = () => {
    const template = (
        <div>
          <h1>{app.title}</h1>
          {app.subtitle && <p>{app.subtitle}</p>}
          <p>
            {app.options.length > 0 ? "Here is your options" : "No options available"}
          </p>
          <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
          <button onClick={onRemoveAll}>Remove All</button>
          <ol>
            {
                app.options.map(option => <li key={option}>{option}</li>)
            }
          </ol>
          <form onSubmit={onFormSubmit}>
              <input type="text" name="option"></input>
              <button>Add Option</button>
          </form>
        </div>
      );

    ReactDOM.render(template, appRoot);
}

renderTemplate();
// const user = {
//   name: "Jae",
//   age: 27,
//   location: "Toronto"
// };

// function getLocation(location) {
//   if (location) {
//     return <p>Location: {location}</p>;
//   } else {
//     return "Unknown";
//   }
// }


