import "./Signin.css"

export default function Signup() {

    return ( 
        <div className="signup-main">
            <div className="signup-wrapper">
                <form>
                            <h1>Sign Up</h1>
                            <input type="text" placeholder="ID" name="ID" required />
                            <input type="email" placeholder="email" name="email" required />
                            <input type="password" placeholder="Password" name="password" minLength="8"  required />
                            <input type="password" placeholder="Password Confirmation" name="password2"  required />
                           

                            <button className="signup-button" type="submit" >SIGN UP</button>
                            <span>Have an account? <a href="/login"> Sign in </a></span>
                </form>
            </div>
        </div>
    
    )


}