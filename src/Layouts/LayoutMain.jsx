import { Outlet } from 'react-router-dom'
import PopUps from '../components/PopUps'

export default function LayoutMain() {
  return (
    <div className='h-screen p-10 container mx-auto'>
        <div className='container mx-auto h-full bg-secondary rounded-3xl p-5'>
            <Outlet/>
        </div>

        <PopUps />
    </div>
  )
}
