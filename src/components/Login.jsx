import React,{useContext} from 'react'
import PopUpContext from '../context/Popup'

export default function Login() {
    const {hidePopUp} = useContext(PopUpContext)
  return (
    <>
        <form className='bg-base-100 border-2 border-primary rounded-lg py-5 px-3 min-w-80 flex flex-col gap-5 relative'>

            <button type='button' onClick={()=>hidePopUp()} className='absolute top-4 right-4'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>

            <h1 className='text-3xl text-primary text-center mb-5 mt-5'>Login</h1>

            <label className='form-control'>
                <input type="text" placeholder="Full name" className="input input-bordered bg-transparent input-sm input-primary  w-full rounded-full" />
            </label>

            <label className='form-control'>
                <input type="text" placeholder="retype password" className="input input-bordered bg-transparent input-sm input-primary  w-full rounded-full" />
            </label>

            <button className='btn mt-5 btn-primary rounded-full btn-sm w-32 mx-auto'>LOGIN</button>
        </form>
    </>
  )
}
