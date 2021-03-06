import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] contrustor');
    }

    state = {
        persons: [
            { id: 'addv435', name: "Max", age: 28 },
            { id: 'bvfdh4333', name: "Manu", age: 29 },
            { id: 'ddsfdsff4', name: "Stephanie", age: 26 }
        ],
        showPersons: false,
        showCockpit: true,
    };

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }
    
    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate() {
        console.log('[App.js] componentDidUpdate');
    }

    nameChangedHandler = (event, personId) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === personId;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({ persons: persons });
    }

    deleteHandler = (personIndex) => {
        let persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    togglePersons = () => {
        let doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    }

    render() {
        console.log('[App.js] rendering...');
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons
                        persons={this.state.persons}
                        clicked={this.deleteHandler}
                        changed={this.nameChangedHandler}
                    />;
        }

        return (
            <div className={classes.App}>
                <button onClick={() => this.setState({showCockpit: !this.state.showCockpit})}>Toggle Cockpit</button>
                {
                    this.state.showCockpit ?
                        <Cockpit
                        title={this.props.appTitle}
                        showPersons={this.state.showPersons}
                        personsLength={this.state.persons.length}
                        clicked={this.togglePersons}
                    /> : null
                }

                {persons}
            </div>
        );
    };
}

export default App;
