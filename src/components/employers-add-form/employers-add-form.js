import React from 'react';
import './employers-add-form.css';

class EmployersAddForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            salary: "",
        }
    }
    onValuseChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddPerson(this.state.name, this.state.salary);
        this.setState ({
            name: "",
            salary: "",
        })
    }
    render() {
        const { id, name, salary } = this.state;
        const {onAddPerson} = this.props;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}
                    
                    >
                    <input type="text"
                        name="name"
                        value={name}
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        onChange={this.onValuseChange} 
                        />
                    <input type="number"
                        name= "salary"
                        value={salary}
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        onChange={this.onValuseChange} 
                        />
    
                    <button type="submit"
                        className="btn btn-outline-light"
                        onClick={() => onAddPerson(id)}
                        >
                        Добавить
                    </button>
                </form>
            </div>
        )
    }  
}

export default EmployersAddForm;