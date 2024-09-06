import React, { useContext } from 'react'
import PopUpContext from '../context/Popup'


function ProfileButton({onClick}){
    return(
        <>
            <div className="avatar items-center gap-2">
                <div onClick={()=> onClick("user")} className="w-16 cursor-pointer rounded-full border-2 border-primary">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>
            <button type='button' className="btn rounded-full btn-secondary">Log Out</button>
        </>
    )
}

function UserProfile() {
    const {hidePopUp} = useContext(PopUpContext)
  return (
    <div className='relative border-2 border-primary rounded-lg bg-base-100 w-5/12 flex items-start p-10 gap-10'>
        
        <button type='button' onClick={()=>hidePopUp()} className='absolute top-4 right-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </button>
        
        <div className="shrink-0 avatar relative">
            <div className="w-32 rounded-full border-2 border-primary">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>

            <button type='button' className='absolute btn btn-xs btn-circle btn-secondary right-2 bottom-2 z-10'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
                    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                </svg>

            </button>
        </div>

        <form className='flex flex-col grow'>

            <label className="form-control w-full max-w-sm">
                <div className="label">
                    <span className="label-text">Name</span>
                </div>
                <input type="text" placeholder="Type here" className="input input-bordered shadow shadow-primary bg-transparent input-primary w-full rounded-full" />
            </label>

            <label className="form-control w-full max-w-sm">
                <div className="label">
                    <span className="label-text">Username</span>
                </div>
                <input type="text" placeholder="Type here" className="input input-bordered shadow shadow-primary bg-transparent input-primary w-full rounded-full" />
            </label>

            <label className="form-control w-full max-w-sm">
                <div className="label">
                    <span className="label-text">Email</span>
                </div>
                <input type="text" placeholder="Type here" className="input input-bordered shadow shadow-primary bg-transparent input-primary w-full rounded-full" />
            </label>
            
            <button className='btn mt-5 btn-primary rounded-full me-auto px-6 btn-sm'>Save</button>
            <button className='btn mt-5 btn-secondary me-auto btn-ghost btn-xs'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
                Delete Account
            </button>
        </form>

    </div>
  )
}


export {
    UserProfile,
    ProfileButton
}
