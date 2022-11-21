import React from 'react';
import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployersAddForm from '../employers-add-form/employers-add-form';
import EmployersList from '../employers-list/employers-list';
import SearchPanel from '../search-panel/search-panel';
import './app.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1, "name": "Dim Byzin", "salary": "30000$", "increase": true,
                },
                {   
                    id: 2, "name": "Veronika Byzina", "salary": "40000$", "increase": true,
                },
                {
                    id: 3, "name": "Anzelika Byzina", "salary": "50000$", "increase": true,
                },
            
            ],
        }
        this.maxId = 4;
    }
    
    onRemovePerson = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(elem => elem.id !== id)
            }
            
        })
    }

    onAddPerson = (name, salary) => {
        const newPerson = {
            name,
            salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            return {
                data: [...data, newPerson]
            }
        })
    }
   render() {
    return (
        <div className='app'>
            <AppInfo />
            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <EmployersList data = {this.state.data} onRemovePerson={this.onRemovePerson}/>
            <EmployersAddForm onAddPerson={this.onAddPerson}/>
        </div>
    )
   }
   
}


export default App;