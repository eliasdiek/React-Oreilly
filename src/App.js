import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { id: 'addv435', name: "Max", age: 28 },
            { id: 'bvfdh4333', name: "Manu", age: 29 },
            { id: 'ddsfdsff4', name: "Stephanie", age: 26 }
        ],
        showPersons: false
    };

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
        const style = {
            backgroundColor: 'green',
            color: 'white',
            border: '1px solid blue',
            font: 'inherit',
            padding: '10px',
            cursor: 'pointer',
        };

        const classesArr = [];

        if(this.state.persons.length <= 2) {
            classesArr.push(classes.red); // classes = ['red']
        }

        if(this.state.persons.length <= 1) {
            classesArr.push(classes.bold); // classes = ['red', 'bold']
        }

        let persons = null;

        if (this.state.showPersons) {
            style.backgroundColor = 'red';

            persons = (
                <div>
                    {
                        this.state.persons.map((person, index) => {
                            return <Person
                                        click={() => this.deleteHandler(index)}
                                        key={person.id}
                                        name={person.name}
                                        age={person.age}
                                        changed={(event) => this.nameChangedHandler(event, person.id)}
                                    />
                        })
                    }
                </div>
            );
        }

        return (
            <div className={classes.App}>
                <h1>Hi Forkers!</h1>
                <p className={classesArr.join(' ')}>This is really working!</p>
                <button style={style} onClick={this.togglePersons}>Toggler Persons</button>
                {persons}
            </div>
        );
    };
}

export default App;
