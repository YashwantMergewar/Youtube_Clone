import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { register } from '../api/authApi.js';

export default function Register() {
  const [credentials, setCredentials] = useState({ fullname: "", username: "", email: "", password: "", avatar: "", coverImage: ""})
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const response = register(credentials)
    response ? navigate('/') : alert("Registration Failed..!")
  }

  const onChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Register Page</h1>
        <label htmlFor="fullname">FullName</label>
        <input type="text" id="fullname" name="fullname" placeholder="Enter your fullname" value={credentials.fullname} onChange={onChange} />
      </form>
    </>
  );
}
