import React from 'react';
import './search-panel.css';

class SearchPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueSearch: ''
        }
    }

    onValuseChange = (e) => {
        const valueSearch = e.target.value;
        this.setState({valueSearch});
        this.props.onValueSearch(valueSearch);
    }

    render() {
        const { valueSearch} = this.state;
        return (
            <input
                defaultValue={valueSearch}
                type="text"
                className="form-control search-input" 
                placeholder="Найти сотрудника"
                onChange={this.onValuseChange}
            />
            )
    }
    
        
    
}

export default SearchPanel;