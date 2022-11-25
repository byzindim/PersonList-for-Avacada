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
            valueSearch: '',
            filter: 'all',
        }
    }
    
    onRemovePerson = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(elem => elem.id !== id)
            }
            
        })
    }

    onChangeValueInput = (salary) => {
        this.setState({salary})
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
    onValueSearch = (valueSearch) => {
        this.setState({valueSearch});
    }
    onListChange = (items, valueSearch) => {
        if (valueSearch.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(valueSearch) > -1
        })

    }

    onChangeSalary = (items, salary) => {
      if(salary) {
        return items;
      }
      return {
        ...items, salary: !salary
      }
    }
    
    onIncreasePerson = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise)
            case 'salary':
                return items.filter(item => item.salary > 1000)
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});

    }
   render() {
    const {data, valueSearch, filter, salary} = this.state;
    let employees = this.state.data.length;
    let increased = this.state.data.filter(item => item.increase).length;
    const visibleData = this.onIncreasePerson(this.onListChange(data, valueSearch), this.onChangeSalary(data, salary), filter)
    return (
        <div className='app'>
            <AppInfo 
                employees={employees} 
                increased={increased}
            />
            <div className="search-panel">
                <SearchPanel onValueSearch={this.onValueSearch}/>
                <AppFilter 
                    data = {visibleData} 
                    onFilterSelect={this.onFilterSelect} 
                    filter={filter}
                />
            </div>
            <EmployersList 
                data = {visibleData} 
                onRemovePerson={this.onRemovePerson}
                onToggleIncrease={this.onToggleIncrease}
                onToggleRise={this.onToggleRise}
                onListChange={this.onListChange}
                onChangeSalary={this.onChangeSalary}
                onChangeValueInput={this.onChangeValueInput}
            />
            <EmployersAddForm onAddPerson={this.onAddPerson}/>
        </div>
    )
   } 
}

export default App;