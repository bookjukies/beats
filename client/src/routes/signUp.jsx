import {useForm} from 'react-hook-form'
import { Link } from 'react-router-dom';



export default function SignUp() {
  const {register, handleSubmit} = useForm()

  const onSubmit = data =>{
    console.log(data);
    // reset()
  }

  return (
    <div className='grid h-[80vh] w-screen justify-center content-center gap-4 '>
      
        <h1 className='text-2xl mb-4 font-bold text-center'>Sign up</h1>

     
        <form className='w-[80vw] md:w-[30vw] grid px-2 gap-4' onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <label htmlFor="email">Email</label>
            <input className='bg-slate-400 block p-2 w-full rounded' autoComplete="off" type='email' id="email" {...register("email")}/>
          </div>

          <div className="">
            <label htmlFor="password">Password</label>
            <input className='bg-slate-400 block p-2 w-full rounded' autoComplete="off" type='password' id="password" {...register("password")}/>
          </div>

          <button className='bg-sky-500 w-4/5 py-2 justify-self-center rounded text-white'>Sign Up</button>
        </form>

        {/* <DevTool control={control} /> */}

        <p className='text-center'>Already, have an account?  <Link className='text-sky-500 font-bold' to='/login'>Log In</Link></p>

    </div>
  )
}
