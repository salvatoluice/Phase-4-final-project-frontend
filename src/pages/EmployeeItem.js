import React from 'react'
import './employees.css'

const EmployeeItem = ({employee, onDeleteEmployee}) => {
    const { id } = employee;

        
    function handleDeleteEmployee() {
        fetch(`https://ecommerce-production-921a.up.railway.app/employees/${id}`, {
          method: "DELETE",
        }).then((r) => {
          if (r.ok) {
            onDeleteEmployee(employee);
          }
        });
      }


  return (
    <div className='epmloyee_data'>
        <button onClick={handleDeleteEmployee}>Fire</button>
        <div className='data-info'>
            <img src={employee.employee_image} />
            <h1>{employee.employee_name}</h1>
        </div>
        <div><p>{employee.designation}</p></div>
        <div><p>{employee.country}</p></div>
        <div><p>{employee.hire_date}</p></div>
        <div><p>{employee.reports_to}</p></div>
    </div>
  )
}

export default EmployeeItem