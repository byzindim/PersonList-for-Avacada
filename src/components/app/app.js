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
                    id: 1, "name": "Dim Byzin", "salary": "30000", "increase": true, rise: true,
                },
                {   
                    id: 2, "name": "Veronika Byzina", "salary": "40000", "increase": false, rise: false,
                },
                {
                    id: 3, "name": "Anzelika Byzina", "salary": "50000", "increase": false, rise: false,
                },
            
            ],
        }
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
            rise: false,
            id: this.state.data.length+1
        }
        this.setState(({data}) => {
            if(newPerson.name != '' && newPerson.salary != '' && newPerson.name != null && newPerson.salary != null) {
                return {
                    data: [...data, newPerson]
                }
            }
            
        })
    }
    onToggleIncrease = (id) => {
        this.setState(({data}) => ({
            data: data.map(item =>{
                if(item.id === id) {
                    return {
                        ...item, increase: !item.increase
                    } 
                }
                return item;
            })
        }))
    }
    onToggleRise = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {
                        ...item, rise: !item.rise
                    }
                }
                return item;
            })  
        }))
    }
   render() {
    let employees = this.state.data.length;
    let increased = this.state.data.filter(item => item.increase).length;
    return (
        <div className='app'>
            <AppInfo employees={employees} increased={increased}/>
            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <EmployersList 
            data = {this.state.data} 
            onRemovePerson={this.onRemovePerson}
            onToggleIncrease={this.onToggleIncrease}
            onToggleRise={this.onToggleRise}
            />
            <EmployersAddForm onAddPerson={this.onAddPerson}/>
        </div>
    )
   }
   
}


export default App;