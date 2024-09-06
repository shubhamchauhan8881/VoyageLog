import { useContext } from 'react'
import bg from '../assets/bg.jpeg'
import PopUpContext from '../context/Popup'
import { ProfileButton } from '../components/UserProfile'

export default function LandingPage() {
    const {showPopUp} = useContext(PopUpContext)
  return (
    <div className='h-full flex gap-8'>
        <div className='w-1/2 bg-base-100 rounded-xl p-8'>
            <div className='h-full flex flex-col gap-10'>
                
                <div className=" avatar items-center gap-4">
                    <div className="w-14 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                    <span className='text-3xl font-semibold'>VoyageLog</span>
                </div>

                
            
                <div className=''>
                    <h1 className='text-3xl'>This is Where Incredible Journeys Begin!</h1>
                    <p className='mt-2'>Plan your perfect trip with our free travel app! Organize trips and hotels, map your journeys, and get AI-powered recommendations with Google Maps.</p>
                </div>

                <div className='grow bg-accent border overflow-y-scroll border-primary rounded-2xl p-5'>
                    <form>
                        <h1 className='text-3xl'>Plan a new trip!</h1>
                        <div className='grid grid-cols-2 gap-5 mt-5'>
                            <label className="form-control w-full col-span-2">
                                <div className="label">
                                    <span className="label-text text-lg">Where to?</span>
                                </div>
                                <input type="text" placeholder="Type here" className="input rounded-full text-lg input-bordered w-full " />
                            </label>

                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-lg">Dates (optional)</span>
                                </div>
                                <input type="text" placeholder="Type here" className="input rounded-full text-lg input-bordered w-full " />
                            </label>

                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text text-lg">&nbsp;</span>
                                </div>
                                <input type="text" placeholder="Type here" className="input rounded-full text-lg input-bordered w-full " />
                            </label>

                            <label className="form-control w-full col-span-2">
                                <div className="label">
                                    <span className="label-text text-lg">What is your name?</span>
                                </div>
                                <input type="text" placeholder="Type here" className="input rounded-full text-lg input-bordered w-full " />
                            </label>

                            <button className="btn btn-lg rounded-full btn-primary mx-auto col-span-2 text-lg">Start Planning</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div className='w-1/2 relative bg-base-100 rounded-xl h-full'>
    
            <div className='h-full w-full rounded-xl overflow-hidden'>
                {/* image wrapper */}
                <img src={bg} alt='' className='h-full w-full object-fill object-top' />
            </div>

            <div className='adfa absolute top-0 right-0 flex flex-col items-center bg-base-100 h-48 w-48 p-5 rounded-xl gap-5'>
                {/* <button type='button' onClick={()=>showPopUp("register")} className="btn rounded-full btn-primary">Sign Up</button>
                <button type='button' onClick={()=>showPopUp("login")} className="btn rounded-full btn-secondary">Log In</button> */}
                <ProfileButton onClick = {showPopUp} />
            </div>

        </div>
    </div>
  )
}
