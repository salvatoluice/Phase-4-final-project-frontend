import React, {useState} from 'react'

const initialState = {
  employee_name: "",
    employee_image: "",
    designation: "",
    country: "",
    hire_date: "",
    reports_to: "",
}

const NewEmployee = ({ onAddEmployee }) => {
    const [formData, setFormData] = useState(initialState)
    function handleChange(e) {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }
    // function handleSubmit(e) {
    //     e.preventDefault();
    //     fetch("http://localhost:3000/employees", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(formData),
    //     })
    //     .then((r) => r.json)
    //     .then((newEmployee) => {
    //         setFormData(initialState);
    //         onAddEmployee(newEmployee);
    //     })
    // }

    function handleSubmit(e) {
      e.preventDefault();
      fetch("https://ecommerce-production-921a.up.railway.app/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((r) => r.json())
        .then((newEmployee) => {
          setFormData(initialState);
          onAddEmployee(newEmployee);
        });
    }


  return (
    <div className='employee_form'>
        <h2>New Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="employee_name">Name: </label>
          <input
            type="text"
            id="employee_name"
            value={formData.employee_name}
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          <label htmlFor="employee_image">Image URL: </label>
          <input
            type="text"
            id="employee_image"
            value={formData.employee_image}
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
        <label htmlFor="designation">Designation: </label>
        <input
          type="text"
          id="designation"
          value={formData.designation}
          onChange={handleChange}
        />
        
        </div>
        <div className="form-input">
        <label htmlFor="country">Country: </label>
        <input
          type="text"
          id="country"
          value={formData.country}
          onChange={handleChange}
        />
        
        </div>
        <div className="form-input">
        <label htmlFor="hire_date">Hire Date: </label>
        <input
          type="text"
          id="hire_date"
          value={formData.hire_date}
          onChange={handleChange}
        />
        
        </div>

        <div className="form-input">
        <label htmlFor="reports_to">Reports to: </label>
        <input
          type="text"
          id="reports_to"
          value={formData.reports_to}
          onChange={handleChange}
        />
        
        </div>
      <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default NewEmployee