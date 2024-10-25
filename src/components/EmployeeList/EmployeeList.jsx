import EmployeeListItem from '../EmployeeListItem/EmployeeListItem'
import employeeList from '../../utilities/data.mjs';



function EmployeeList(){
    return (
        <ul>
            <EmployeeListItem />
            <EmployeeListItem />
            <EmployeeListItem />
        </ul>
    )
}
export default EmployeeList;