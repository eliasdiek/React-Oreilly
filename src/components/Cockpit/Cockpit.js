import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
    const classesArr = [];
    let btnClass = '';
    if(props.showPersons) {
        btnClass = classes.red;
    }

    if(props.persons.length <= 2) {
        classesArr.push(classes.red); // classes = ['red']
    }

    if(props.persons.length <= 1) {
        classesArr.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi Forkers!</h1>
            <p className={classesArr.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>Toggler Persons</button>
        </div>
    );
}

export default cockpit;