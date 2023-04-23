import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>

            <form>
                {/* <h2>Login</h2>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required />

                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required />

                <button type="submit">Login</button>
                 */}
                <br />
                <Link to="/Register">new to this website</Link>

            </form>


        </div>
    );
};

export default Login;