
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: "",
        password: "",
        role: "",
        token: ""
    });

    const [loggedin, setLoggedin] = useState(false);
    const [retryCount, setRetryCount] = useState(0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'username' && value.trim() === '') {
            console.log('Username cannot be empty');
            return;
        }
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const login = (e) => {
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };


        console.log(requestOptions);

        fetch("http://localhost:5272/api/User/Login", requestOptions)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Invalid username or password');
                }
                return res.json();
            })
            .then(res => {
                sessionStorage.setItem("token", res.token);
                sessionStorage.setItem("username", res.username);
                sessionStorage.setItem("userRole", res.role);
                sessionStorage.setItem("userId", res.userId);
                
                setLoggedin(true);
                
                sessionStorage.setItem("isLoggedIn", true);
                if (res.role === "User") { 
                    alert("Login success - " + res.username);
                    navigate('/UserDash');
                } else {
                    alert("Only users can access the User Dashboard.");
                }
            })
            .catch(err => {
                console.log(err);
                    alert('Server is not available. Please try again later.');
                setLoggedin(false);
            });
    };
    const handleSignUp = () => {
        navigate('/register');
    };
    const handleForgotPwd = () => {
        navigate('/forgotpassword');
    };

    return (
        <div >
            {loggedin ? <h2 className='alert-succes' style={{ textAlign: 'center', margin: '-20px auto 20px auto' }}></h2> : null}
            {/* Welcome {user.username} you have successfully logged in. */}
            <div>

                <form onSubmit={login} className="login__form">
                    <h2 className="login__title">Log In</h2>
                    <div className="login__group">
                        <div>
                            <label htmlFor="username" className="login__label">Username</label>
                            <input
                                name="username"
                                placeholder='Enter your username'
                                className="login__input"
                                type="text"
                                value={user.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="login__label">Password</label>
                            <input
                                name="password"
                                placeholder='Enter your password'
                                className="login__input"
                                type="password"
                                value={user.password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="login__button" >Log In</button>
                        <p className="login__signup">
                            Don't have an account? <button onClick={handleSignUp} color="#8bbe1b">Sign up</button>
                        </p>
                        <button onClick={handleForgotPwd} className="login__forgot">
                            Forgot your password? Click here.
                        </button>
                        
                    </div>
                </form>
                <i className="ri-close-line login__close" id="login-close" />
            </div>

        </div>
    );
}

export default Login;
