import React, { useState } from 'react';
import './UserForm.css'; 

const UserForm = ({ initialUser }) => {

  // Use useState to manage the user state initialized with the initialUser prop or defaults
  const [user, setUser] = useState(initialUser || 
    {username: 'Jane Doe',
    city: 'New York',
    age: 30});

  // Function to handle changes in the name input
  const handleChange = (e) => {
    // Update the user state with the new name while keeping city and age the same
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
        <h2 className="heading">User Information</h2>
        <h3>Scenario</h3>
        <p>
            You want to update an object state on change of the input.
        </p>

        <h3>Info</h3>
        <p>
            In this scenario, we have a user object with the parameters: <strong>username</strong>, <strong>city</strong>, and <strong>age</strong>.
            We want to update the <strong>name</strong> without losing the other property values.
        </p>

        <h3>Solution</h3>
        <p>
            When the input changes, the <code>handleChange</code> function is called, which updates the user state with the new name while keeping the values of <strong>city</strong> and <strong>age</strong> intact.
        </p>
        <div className="container">          
            <p>Name: {user.username}</p>
            <p>City: {user.city}</p>
            <p>Age: {user.age}</p>
            {/* Input field to change the user's name */}
            <i>Change the text and the data will automatically change</i>
            <input
                type="text"
                name="username" // Specify the name attribute for the input
                value={user.username}
                onChange={handleChange}
                placeholder="Enter your name"
                className="input"
            />
            
            <input
                type="text"
                name="city" // Specify the name attribute for the city
                value={user.city}
                onChange={handleChange}
                placeholder="Enter your city"
                className="input"
            />
            
            <input
                type="number"
                name="age" // Specify the name attribute for the age
                value={user.age}
                onChange={handleChange}
                placeholder="Enter your age"
                className="input"
            />
        </div>
    </div>
  );
};

export default UserForm;
