import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees.list';
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css'

function App() {

    const data = [
        {name: "John S.", salary: 1000, increase: false},
        {name: "Ado K.", salary: 3000, increase: true},
        {name: "Vasya P.", salary: 7000, increase: false}
    ];  

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;