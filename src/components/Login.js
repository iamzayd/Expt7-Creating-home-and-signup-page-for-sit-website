import React, {useState} from 'react';
import '../style/Login.css'; 

export default function Login() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userID, setUserID] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submit action
      
        if (password !== confirmPassword) {
          alert('Passwords do not match');
          return; // Stop the function if passwords do not match
        }
      
        if (!firstName || !lastName || !userID || !password ) {
          alert('Please fill in all fields');

          return; // Stop the function if any field is empty
        }
      
        // If everything is fine, show success message
        alert('Success! You have signed up.');
        // Here, you can also clear the form or redirect the user to another page
      };
      

  return (
    <div className='Login'>
    
        <form className='SignUp' action="#" method="#" onSubmit={handleSubmit}>
            <h1> Sign Up</h1>

            <label for="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName"
            value={firstName} onChange={(e)=> setFirstName(e.target.value)}></input>

            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName"
            value={lastName} onChange={(e)=> setLastName(e.target.value)}></input>

            <label for="UserID">User ID</label>
            <input type = "text" id="UserID" name = "UserID"
            value={userID} onChange={(e)=> setUserID(e.target.value)}></input>

            <label for="password">Password</label>
            <input type="password" id="password" name="password" 
            value={password} onChange={(e)=> setPassword(e.target.value)}
            ></input>

            <label for="cPassword">Confirm Password</label>
            <input type="password" id="cPassword" name="cPassword"
            value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}></input>

            <label for="country">Country:</label>
            <select id="country" name="country">
                <option value="">Select...</option>
                <option value="afghanistan">Afghanistan</option>
                <option value="australia">Australia</option>
                <option value="brazil">Brazil</option>
                <option value="canada">Canada</option>
                <option value="china">China</option>
                <option value="france">France</option>
                <option value="germany">Germany</option>
                <option value="india">India</option>
                <option value="italy">Italy</option>
                <option value="japan">Japan</option>
                <option value="mexico">Mexico</option>
                <option value="russia">Russia</option>
                <option value="southafrica">South Africa</option>
                <option value="spain">Spain</option>
                <option value="switzerland">Switzerland</option>
                <option value="unitedarabemirates">United Arab Emirates</option>
                <option value="southkorea">South Korea</option>
                <option value="newzealand">New Zealand</option>
                <option value="singapore">Singapore</option>
            </select>       

            <button type="submit">Sign Up</button>

           
        </form>


    </div>
  )
}
