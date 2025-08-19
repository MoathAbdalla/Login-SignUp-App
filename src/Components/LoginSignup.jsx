import React, { useState } from 'react'
import './LoginSignup.css'

const LoginSignup = () => {
    const [action, setAction] = useState("Sign Up");

    const handleSubmit = () => {
        alert(`${action} success`);
    }

  return (
    <div className='container'>
        <div className='Navbar'>
            <div className='submit-container'>
                <div className={action === "Login"? "submit gray":"submit"} onClick={() => setAction("Sign Up")}>Sign Up</div>
                <div className={action === "Login"? "submit":"submit gray"} onClick={() => setAction("Login")}>Login</div>
            </div>
        </div>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <form>
            <div className='inputs'>
                {action === "Login"? <div></div> :             
                    <div className='input'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6" width="24px" height="24px">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        <input autoFocus type='text' title='Enter your Name'/>
                    </div> }
                <div className='input'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6" width="24px" height="24px">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <input type='email' title='Enter your e-mail'/>
                </div>
                <div className='input'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6" width="24px" height="24px">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                    <input type='password' title='Enter password'/>
                </div>
            </div>
            <button className='btn' type='submit' /*No backend*/onClick={handleSubmit}>{action}</button>
        </form>
        <div className="forgot-password">Fogot Your Password? <a href="#" rel="noopener noreferrer" className="custom-link">Click Here</a></div>
    </div>
  )
}

export default LoginSignup;