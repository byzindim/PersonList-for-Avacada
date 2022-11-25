import React from 'react';
import './employees-list-item.css';

class EmployersListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            salary: props.salary
        }
    }

    onValueChange = (e) => {
        const salary = e.target.value;
        this.setState({salary});
        this.props.onChangeValueInput(salary);
    }
    render() {
        const {name,  id, onRemovePerson, onToggleIncrease, onToggleRise, increase, rise} = this.props;

        const {salary} = this.state;

        let classNames = "list-group-item d-flex justify-content-between";
        if(increase) {
            classNames += ' increase'
        }
        if(rise) {
            classNames += ' like'
        }
        return (
            <li key ={id} className={classNames}>
                <span className="list-group-item-label" onClick={onToggleRise}>{name}</span>
                <input 
                    type="text" 
                    className="list-group-item-input" 
                    defaultValue={salary}
                    onChange={this.onValueChange}
                />
                    
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        onClick={onToggleIncrease}
                        className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                        
                    </button>
    
                    <button type="button"
                    onClick={onRemovePerson}
                        className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
        
}

export default EmployersListItem;