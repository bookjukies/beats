import { useNavigate } from 'react-router-dom'
import HeaderAuth from "../components/HeaderAuth"
import useGlobal from '../hooks/useGlobal'

const Details = () => {
  const { triedToCheckout} = useGlobal()
  const navigete = useNavigate()

  const handleSubmit = () =>{

    if(triedToCheckout){
      return navigete("/cart")
    }else{
      return navigete("/")
    }
  }
  return (
<>
<HeaderAuth />
<section className='px-8 w-screen'>
  <h1 className='text-center text-xl my-2 font-bold'>Details</h1>
  <form>
    <div className="">
      <label className='block'>First Name</label>
      <input className='bg-slate-400 w-full px-2 h-12 py-1 rounded-md my-2 font-bold'  autoComplete="off" type="text" name='first_name' />
    </div>

    <div className="">
      <label className='block' htmlFor="">Last Name</label>
      <input className='bg-slate-400 w-full px-2 h-12 py-1 rounded-md my-2 font-bold'  autoComplete="off" type="text"  name='last_name' />
    </div>
    <div className="">
      <label className='block' htmlFor="">Email</label>
      <input className='bg-slate-400 w-full px-2 h-12 py-1 rounded-md my-2 font-bold'  autoComplete="off" type="email" name='email' />
    </div>

    <div className="">
      <label className='block w-full' htmlFor="">Phone Number</label>
      <input className='bg-slate-400 w-full px-2 h-12 py-1 rounded-md my-2 font-bold'  autoComplete="off" type="tel" name='phone_number' />
    </div>


    
  </form>
  <button className='bg-sky-400 w-full my-8 py-3 rounded-md text-white text-xl font-bold' onClick={handleSubmit}>Submit</button>
</section>
</>
  )
}

export default Details