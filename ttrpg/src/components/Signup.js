import "./Signin.css";
import {Link} from 'react-router-dom';

export default function Signup() {

    return ( 
        <div className="signup-main">
            <div className="signup-wrapper">
                <div className="signup-left">
                    <h3> Create an Account </h3>
                    <p>Welcome to TTrpg!</p>
                    <form> 
                        <label htmlFor="email">Email</label>
                        <input type='email' placeholder="email"/>
                        <label htmlFor='username'>Username</label>
                        <input type='text' placeholder="username" name='username' required/>
                        <label htmlFor='password'>Password</label>
                        <input type='password'placeholder='password' name='password' required/>

                        <button className="signin-button" type="submit">Sign In</button>
                        <span className="account-alert">Have an account? <Link to="/signin" className="sign-link">Sign in</Link></span>
                    </form>
                </div>

                <div className="signup-right">

                </div>

            </div>
        </div>
    
    )


}