import React from 'react';
import './app-filter.css';
const AppFilter = ({filter, onFilterSelect}) => {
    const buttonsData = [
        {name: "all", label: "Все сотрудники"},
        {name: "rise", label: "На повышение"},
        {name: "salary", label: "ЗП выше 1000$"},
    ]
    const buttons = buttonsData.map(({name,label}) => {
        const active = filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light'

        return (
            <button 
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => onFilterSelect(name)}
            >
            {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    ) 
}
export default AppFilter;