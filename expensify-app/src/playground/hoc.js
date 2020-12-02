/* 
    higher order component (HOC)
    A component that render another component
    This is to reuse code
    -Render hijacking
    -Prop manupulation
    -Abstract state

    HOC is basically another component that contains other component.
    It is good for conditional component rendering
*/

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin &&  <p>This is private info. Please don't share!</p>}    
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <p>Already Loged in</p>
                ) : (
                <p>Please Log in</p>
                )
            }
            <WrappedComponent {...props} />
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAdmin={false} isAuthenticated={false} info="there are the details" />, document.getElementById('app'));