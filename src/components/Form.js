import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthYear: "",
    admin: false,
  });

  // function handleFirstNameChange(event) {
  //   setFormData({...formData,
  //     firstName:event.target.value})
  // }

  // function handleLastNameChange(event) {
  //   setFormData({...formData,
  //     lastName:event.target.value})
  // }

  function handleChange(event) {
    // name is the KEY in of the formData object we're trying to update
    const name = event.target.name;
    let value = event.target.value;
    // use `checked` property of checkboxes instead of `value`
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }

      setFormData({
        ...formData,
        [name]: value,
      });
    }
    function handleSubmit(event) {
      event.preventDefault();
      console.log(formData);
    }
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" onChange={handleChange} placeholder="First name..." value={formData.firstName} />
        <input type="text" name="lastName" onChange={handleChange} placeholder="Last name..." value={formData.lastName} />
        <input type="number" name="birthYear" onChange={handleChange} placeholder="Birth year..." value={formData.birthYear} min="1900" max="2021" />
        <input type="checkbox" name="admin" onChange={handleChange} checked={formData.admin} /><label>Check Box</label>
        <button type="submit">Submit</button>
      </form>
    );
  }

  export default Form
