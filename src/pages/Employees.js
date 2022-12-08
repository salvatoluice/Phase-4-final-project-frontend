import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import EmployeeItem from './EmployeeItem';
import './employees.css'
import NewEmployee from './NewEmployee';



const Employees = () => {
    const [employees, setEmployees] = useState([]);
    const getData = () =>
      fetch("https://ecommerce-production-921a.up.railway.app/employees")
        .then((res) => res.json())


        useEffect(() => {
          getData().then((data) => setEmployees(data))
        }, [])

        function handleAddEmployee(addedEmployee) {
          setEmployees((employees) => [...employees, addedEmployee])
        }

        function handleDeleteEmployee(deletedEmployee) {
          setEmployees((empoyees) =>  
            employees.filter((employee) => employee.id !== deletedEmployee.id)
          )
        }

  return (
    <>
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Amazon" title="Employees Table" />
      </div>

      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <NewEmployee onAddEmployee={handleAddEmployee} />
      </div>

      <div className='employees m-2 md:m-10 mt-24 p-2 md-p-10 bg-white rounded-3xl'>
        <div className='employees_header'>
          <div><h1>Name</h1></div>
          <div><h1>Designation</h1></div>
          <div><h1>Country</h1></div>
          <div><h1>Hire Date</h1></div>
          <div><h1>Reports to</h1></div>
        </div>

        {employees?.map((employee) => {
          return (
            <EmployeeItem key={employee.id} employee={employee} onDeleteEmployee={handleDeleteEmployee} />
          )
        })}
      </div>
      </>

    
  );
};
export default Employees;
