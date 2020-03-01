import React, { useEffect } from 'react';

import classes from './Cockpit.css';

const Cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        setTimeout(() => {
            alert('Data saved in cloud');
        }, 1000);

        return () => {
            console.log('[Cockpit.js] cleanup works in useEffect');
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup works in 2nd useEffect');
        }
    })

    const classesArr = [];
    let btnClass = '';
    if(props.showPersons) {
        btnClass = classes.red;
    }

    if(props.personsLength <= 2) {
        classesArr.push(classes.red); // classes = ['red']
    }

    if(props.personsLength <= 1) {
        classesArr.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classesArr.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>Toggler Persons</button>
        </div>
    );
}

export default React.memo(Cockpit);