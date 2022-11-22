import './employers-list.css';
import EmployersListItem from '../employers-list-item/employers-list-item';



const EmployersList = ({data, onRemovePerson, onToggleIncrease, onToggleRise}) => {
            const elements = data.map(item => {
                return (
                    <EmployersListItem 
                        key = {item.id} 
                        name = {item.name} 
                        salary = {item.salary} 
                        increase= {item.increase} 
                        onRemovePerson={() => onRemovePerson(item.id)}
                        onToggleIncrease={() => onToggleIncrease(item.id)}
                        onToggleRise={() => onToggleRise(item.id)}
                    />
                ) 
            })
            return (
                <ul className="app-list list-group">
                    {elements}
                </ul>
            )
}
export default EmployersList;