import "./Signin.css"
import {Link} from 'react-router-dom';

export default function Signin() {

    return ( 
        <div className="signup-main">
            <div className="signup-wrapper">
                <div className="signup-left">
                    <h3> Sign In</h3>
                    <p>Welcome back adventurer!</p>
                    <form> 
                        <label htmlFor='email'>Email</label>
                        <input type='text' placeholder="email" name='email' required/>
                        <label htmlFor='password'>Password</label>
                        <input type='password'placeholder='password' name='password' required/>

                        <button className="signin-button" type="submit">Sign In</button>
                        <span className="account-alert">Don't have an account? <Link to="/signup" className="sign-link">Sign up</Link></span>
                    </form>
                </div>

                <div className="signup-right">

                </div>

            </div>
        </div>
    
    )


}