import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'

import registerImg from '../../assets/others/authentication1.png'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';
const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {createUser, profileUpdate, logOut} = useContext(AuthContext);
    const navigate = useNavigate()
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result =>{
          const loggedUser = result.user;
          console.log(loggedUser)
          Swal.fire({
            icon: 'success',
            title: 'Wow!!',
            text: 'User Regiser Successfully',
            footer: '<a href="">Why do I have this issue?</a>'
          })
          profileUpdate(data.name, data.photoURL)
          .then(result =>{
            console.log(result)
          })
          .catch(err =>{
            console.log(err)
          })
          logOut().then(result => console.log(result)).catch(err => console.log(err))
          
          reset()
          navigate('/login')
        })
        .catch(err =>{
          console.log(err)
        })
    };
    return (
        <div class="hero min-h-screen">
            
        <div class="hero-content bg-base-200 shadow-2xl p-16">
          <div class="text-center w-1/2 lg:text-left">
           <img className='w-[800px]' src={registerImg} alt="" />
          </div>
          <div class="card flex-shrink-0 w-1/2 max-w-sm">
            <form onSubmit={handleSubmit(onSubmit)} class="card-body">
              <h1 className='text-3xl font-bold text-center'>Register!</h1>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input type="text" {...register("name", { required: true })}  placeholder="Name"  class="input input-bordered w-" />
                {errors.name && <span className=' text-red-600'>* Name field is required</span>}
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Photo URL</span>
                </label>
                <input type="text" {...register("photoURL")}  placeholder="Photo URL"  class="input input-bordered w-" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input type="email"  {...register("email")} placeholder="email"  class="input input-bordered w-" />
                {errors.email && <span className=' text-red-600'>* Email field is required</span>}
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input type="password" {...register("password", { required: true,
                   minLength: 6, 
                   maxLength: 20,
                   pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} placeholder="password" class="input input-bordered" />
                {errors.password && <p className='text-red-600'>* Password Must be six characters</p>}
                {errors.password?.type === 'pattern' && <p className='text-red-600'>* Password Must have One uppercase one lower cas one number and one special Character six characters</p>}

                <label class="label">
                  <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div class="form-control mt-6">
                <button class="btn-outline hover:bg-yellow-700  border-yellow-600 py-4 rounded-lg text-xl font-semibold border-b-4">Register</button>
              </div>
              <div>
                <p className="text-center">Already Have an account? please <Link to='/login'>Login</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;