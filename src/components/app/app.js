import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployersAddForm from '../employers-add-form/employers-add-form';
import EmployersList from '../employers-list/employers-list';
import SearchPanel from '../search-panel/search-panel';
import './app.css'

const data = [
    {
        id: 0,
        "name": "Dim Byzin",
        "salary": "30000$",
        "increase": true,
    },
    {   
        id: 1,
        "name": "Veronika Byzina",
        "salary": "40000$",
        "increase": true,
    },
    {
        id: 2,
        "name": "Anzelika Byzina",
        "salary": "50000$",
        "increase": true,
    },

]
function App() {
    return (
        <div className='app'>
            <AppInfo />
            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <EmployersList data = {data} />
            <EmployersAddForm />
        </div>
    )
 
}
export default App;