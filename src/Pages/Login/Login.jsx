import React, { useContext, useEffect, useRef, useState } from 'react';
import login from '../../assets/others/authentication2.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';import { AuthContext } from '../../Components/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
const Login = () => {
    // const capchaRef = useRef(null)
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate()
    const [disabled, setDisabled] = useState(true)
    const {signIn} = useContext(AuthContext)
    useEffect(()=>{
        loadCaptchaEnginge(6);
    },[])

    
    const handleLogin = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password).then(result => {
        console.log(result.user)
        Swal.fire({
          icon: 'success',
          title: 'Wow!!',
          text: 'User Login Successfully',
          footer: '<a href="">Why do I have this issue?</a>'
        })
        navigate(from, { replace: true });
        })
        .catch(err => console.log(err))
    }
    const handleValidateChapcha = (e)=>{
      const user_capcha_value = e.target.value;
      console.log(user_capcha_value)
      console.log(validateCaptcha)
      if(validateCaptcha(user_capcha_value)){
          setDisabled(false)
      }
      else{
          setDisabled(true)
      }
      // console.log(user_capcha_value)
  }
    return (
        <div class="hero min-h-screen">
            
  <div class="hero-content bg-base-200 shadow-2xl p-16">
    <div class="text-center w-1/2 lg:text-left">
     <img className='w-[800px]' src={login} alt="" />
    </div>
    <div class="card flex-shrink-0 w-1/2 max-w-sm">
      <form onSubmit={handleLogin} class="card-body">
        <h1 className='text-3xl font-bold text-center'>Login!</h1>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email"  class="input input-bordered w-" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" class="input input-bordered" />
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div class="form-control">
          <label class="label">
          <LoadCanvasTemplate />
          </label>
          <input onBlur={handleValidateChapcha} type="text" placeholder="Type chapcha follow above" class="input input-bordered" />
         {/* <button onClick={handleValidateChapcha} className='btn btn-outline btn-xs mt-2'>Validate</button> */}
        </div>
        <div class="form-control mt-6">
          <input disabled={disabled} className='btn btn-primary' type="submit" value="Login" />
        </div>
        <div>
            <p className='text-center'>New to Bistro Boss? Please <Link to='/register'>Register</Link></p>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;