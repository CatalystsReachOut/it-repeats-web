import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes/RouterConfig'
import './Home.css'
const Home = () => {


  return (
    <div className='flex flex-col bg-[#eeeeee] h-[100vh]  overflow-hidden'>

      <div className='w-[100%] h-[12px] ' style={{background: 'linear-gradient(90deg, rgba(49, 83, 67, 0.44) 0%, #315343 100%)'}}></div>

    <div className='Home flex flex-col px-[1.5rem] pb-[1.5rem] grow items-center  justify-center'>
        <div className="text-center">
           <h2 className='text-xl text-[#222222]  font-semibold tracking-wider' style={{fontFamily: "Bebas Neue"}}>IT REPEATS</h2>
           <h2 className='text-xl text-[#999999]' style={{fontFamily: 'proxima-nova'}}>Central Management System</h2>
        </div>

        <div className='input-box flex flex-col gap-2'>
          <input type="text" className='p-2 px-3 w-[242px] h-[36px] mt-[24px] rounded-[6px] placeholder:text-[black]' style={{fontFamily: 'proxima-nova'}} placeholder='username'/>
          <input type="text" className='p-2 px-3 w-[242px] h-[36px] mt-[8px] rounded-[6px] placeholder:text-[black]' style={{fontFamily: 'proxima-nova'}} placeholder='password'/>
        </div>

        <div className='button pt-[32px]'>
          <Link to="/dashboard">
        <button className={`bg-[#222222] p-2 px-3 w-[120px] h-[42px] rounded-[4px] text-[white] rounded-md hover:bg-[#999999] hover:text-[black]` } style={{fontFamily: 'proxima-nova'}} >Login</button>
          </Link>
        </div>

        
    </div>
    <div className='flex justify-between px-[1.5rem] pb-[1.5rem] '>
          <h3 className='text-[#999999]' >&copy;<span className='font-bold text-[#999999]'> IT REPEATS</span> </h3>
          <div className='flex gap-4'>
          <h3 className='font-medium text-[#999999]'>request access</h3>
          <h3 className='font-medium text-[#999999]'>about us</h3>
          </div>
          
        </div>
</div>
    

    
  )
}

export default Home