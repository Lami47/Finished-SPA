import React from 'react';
import './About.css';
import userData from '../usersData';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';

export const Registration = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();
   
    const handleSubmit = (e) => {
      e.preventDefault();
      const user = userData.find(
        (u) => u.name === username && u.surname === password
      );
   
      if (user) {
        setSuccess(true);
        setError('');
        //to hold state till loging out
        localStorage.setItem('username', username);
        // Navigate to the WelcomePage with the username
        navigate('/home', { state: { username } });
        // Handle successful login
      } else {
        setSuccess(false);
        setError('Invalid username or password');
      }
    };

    return (
        <div>
          <h3 className='heading'>Registration</h3>
          <form onSubmit={handleSubmit}>
          <div>
              <label>Username:</label>
              <input
                type="text"
                value={username}
                placeholder='johndoe@gmail.com'
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                placeholder='********'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>Login successful!</p>}
            <button type="submit">Sign In</button>
          </form>
        </div>
      );
    };

export default Registration