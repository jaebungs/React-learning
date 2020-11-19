import React from 'react';

const Option = (props) => (
    <div>
        <div className="option">
            <p className="option__text">{props.count}. {props.optionText}</p>
            <button 
                className="small-button small-button--link"
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText)
                }}
                >
            remove
            </button>
        </div>
    </div>
);


export default Option;