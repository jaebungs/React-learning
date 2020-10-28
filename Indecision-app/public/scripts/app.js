'use strict';

var appRoot = document.getElementById('app');

var toggle = false;

var onShowToggle = function onShowToggle() {
    if (toggle) {
        toggle = !toggle;
    } else {
        toggle = !toggle;
    }

    renderTemplate();
};

var renderTemplate = function renderTemplate() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: onShowToggle },
            toggle ? 'Hide details' : 'Show details'
        ),
        toggle ? React.createElement(
            'p',
            null,
            '\'Now you can see the details\''
        ) : ''
    );

    ReactDOM.render(template, appRoot);
};

renderTemplate();
