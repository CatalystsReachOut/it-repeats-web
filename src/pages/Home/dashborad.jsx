import React from 'react'
import trash from '../../assets/images/trash.png'
import download from '../../assets/images/import.png'
import upload from '../../assets/images/export.png'
import { Select } from 'antd'

import './Home.css'

function dashborad() {
  return (
    <div className='bg-[#eeeeee] h-[100vh] overflow-hidden'>
        <div className='w-[100%] h-[12px] ' style={{background: 'linear-gradient(90deg, rgba(49, 83, 67, 0.44) 0%, #315343 100%)'}}></div>

       <div className='flex h-[100%] overflow-hidden'>
        <div className='grow-[0.2]  flex flex-col  pl-[3.8rem] py-[2.80rem] border-r' style={{borderColor: 'rgba(49, 83, 67, 0.2)'}}>
        <h2 className='text-xl text-[#222222]  font-semibold tracking-wider' style={{fontFamily: "Bebas Neue"}}>IT REPEATS</h2>
        <h2 className='text-base text-[#999999]' style={{fontFamily: 'proxima-nova'}}>Dashboard.</h2>
        <h2 className='text-lg text-[#000000] font-bold  mt-[3.5rem]' style={{fontFamily: 'proxima-nova'}}>Your uploads.</h2>
        <div className='scrollbar scroll-smooth overflow-y-scroll max-h-[476px]'>
          <div className='w-[370px] p-2 rounded mt-[1rem] flex justify-between items-center px-[1rem] py-[0.75rem]' style={{background: 'rgba(49, 83, 67, 0.6)'}}>
            <div>

             <div className=' text-lg font-semibold text-[white]'>Linear Algebra</div>

             <div className='text-[white]'><span className='font-semibold uppercase'>cse</span> <span>. 8th</span> <span>. 2012</span> </div>

            </div>
               <div className='flex gap-[1.2rem] '>
                <img src={trash} className="w-[1.4rem] h-[1.4rem]" alt="" />
                <img src={download} className="w-[1.4rem] h-[1.4rem]" alt="" />
               </div>
             </div>
          <div className='w-[370px] p-2 rounded mt-[1rem] flex justify-between items-center px-[1rem] py-[0.75rem]' style={{background: 'rgba(49, 83, 67, 0.6)'}}>
            <div>

             <div className=' text-lg font-semibold text-[white]'>Linear Algebra</div>

             <div className='text-[white]'><span className='font-semibold uppercase'>cse</span> <span>. 8th</span> <span>. 2012</span> </div>

            </div>
               <div className='flex gap-[1.2rem] '>
                <img src={trash} className="w-[1.4rem] h-[1.4rem]" alt="" />
                <img src={download} className="w-[1.4rem] h-[1.4rem]" alt="" />
               </div>
             </div>
          <div className='w-[370px] p-2 rounded mt-[1rem] flex justify-between items-center px-[1rem] py-[0.75rem]' style={{background: 'rgba(49, 83, 67, 0.6)'}}>
            <div>

             <div className=' text-lg font-semibold text-[white]'>Linear Algebra</div>

             <div className='text-[white]'><span className='font-semibold uppercase'>cse</span> <span>. 8th</span> <span>. 2012</span> </div>

            </div>
               <div className='flex gap-[1.2rem] '>
                <img src={trash} className="w-[1.4rem] h-[1.4rem]" alt="" />
                <img src={download} className="w-[1.4rem] h-[1.4rem]" alt="" />
               </div>
             </div>
          <div className='w-[370px] p-2 rounded mt-[1rem] flex justify-between items-center px-[1rem] py-[0.75rem]' style={{background: 'rgba(49, 83, 67, 0.6)'}}>
            <div>

             <div className=' text-lg font-semibold text-[white]'>Linear Algebra</div>

             <div className='text-[white]'><span className='font-semibold uppercase'>cse</span> <span>. 8th</span> <span>. 2012</span> </div>

            </div>
               <div className='flex gap-[1.2rem] '>
                <img src={trash} className="w-[1.4rem] h-[1.4rem]" alt="" />
                <img src={download} className="w-[1.4rem] h-[1.4rem]" alt="" />
               </div>
             </div>
          <div className='w-[370px] p-2 rounded mt-[1rem] flex justify-between items-center px-[1rem] py-[0.75rem]' style={{background: 'rgba(49, 83, 67, 0.6)'}}>
            <div>

             <div className=' text-lg font-semibold text-[white]'>Linear Algebra</div>

             <div className='text-[white]'><span className='font-semibold uppercase'>cse</span> <span>. 8th</span> <span>. 2012</span> </div>

            </div>
               <div className='flex gap-[1.2rem] '>
                <img src={trash} className="w-[1.4rem] h-[1.4rem]" alt="" />
                <img src={download} className="w-[1.4rem] h-[1.4rem]" alt="" />
               </div>
             </div>
          <div className='w-[370px] p-2 rounded mt-[1rem] flex justify-between items-center px-[1rem] py-[0.75rem]' style={{background: 'rgba(49, 83, 67, 0.6)'}}>
            <div>

             <div className=' text-lg font-semibold text-[white]'>Linear Algebra</div>

             <div className='text-[white]'><span className='font-semibold uppercase'>cse</span> <span>. 8th</span> <span>. 2012</span> </div>

            </div>
               <div className='flex gap-[1.2rem] '>
                <img src={trash} className="w-[1.4rem] h-[1.4rem]" alt="" />
                <img src={download} className="w-[1.4rem] h-[1.4rem]" alt="" />
               </div>
             </div>
          <div className='w-[370px] p-2 rounded mt-[1rem] flex justify-between items-center px-[1rem] py-[0.75rem]' style={{background: 'rgba(49, 83, 67, 0.6)'}}>
            <div>

             <div className=' text-lg font-semibold text-[white]'>Linear Algebra</div>

             <div className='text-[white]'><span className='font-semibold uppercase'>cse</span> <span>. 8th</span> <span>. 2012</span> </div>

            </div>
               <div className='flex gap-[1.2rem] '>
                <img src={trash} className="w-[1.4rem] h-[1.4rem]" alt="" />
                <img src={download} className="w-[1.4rem] h-[1.4rem]" alt="" />
               </div>
             </div>
          <div className='w-[370px] p-2 rounded mt-[1rem] flex justify-between items-center px-[1rem] py-[0.75rem]' style={{background: 'rgba(49, 83, 67, 0.6)'}}>
            <div>

             <div className=' text-lg font-semibold text-[white]'>Linear Algebra</div>

             <div className='text-[white]'><span className='font-semibold uppercase'>cse</span> <span>. 8th</span> <span>. 2012</span> </div>

            </div>
               <div className='flex gap-[1.2rem] '>
                <img src={trash} className="w-[1.4rem] h-[1.4rem]" alt="" />
                <img src={download} className="w-[1.4rem] h-[1.4rem]" alt="" />
               </div>
             </div>
          <div className='w-[370px] p-2 rounded mt-[1rem] flex justify-between items-center px-[1rem] py-[0.75rem]' style={{background: 'rgba(49, 83, 67, 0.6)'}}>
            <div>

             <div className=' text-lg font-semibold text-[white]'>Linear Algebra</div>

             <div className='text-[white]'><span className='font-semibold uppercase'>cse</span> <span>. 8th</span> <span>. 2012</span> </div>

            </div>
               <div className='flex gap-[1.2rem] '>
                <img src={trash} className="w-[1.4rem] h-[1.4rem]" alt="" />
                <img src={download} className="w-[1.4rem] h-[1.4rem]" alt="" />
               </div>
             </div>
          <div className='w-[370px] p-2 rounded mt-[1rem] flex justify-between items-center px-[1rem] py-[0.75rem]' style={{background: 'rgba(49, 83, 67, 0.6)'}}>
            <div>

             <div className=' text-lg font-semibold text-[white]'>Linear Algebra</div>

             <div className='text-[white]'><span className='font-semibold uppercase'>cse</span> <span>. 8th</span> <span>. 2012</span> </div>

            </div>
               <div className='flex gap-[1.2rem] '>
                <img src={trash} className="w-[1.4rem] h-[1.4rem]" alt="" />
                <img src={download} className="w-[1.4rem] h-[1.4rem]" alt="" />
               </div>
             </div>
          <div className='w-[370px] p-2 rounded mt-[1rem] flex justify-between items-center px-[1rem] py-[0.75rem]' style={{background: 'rgba(49, 83, 67, 0.6)'}}>
            <div>

             <div className=' text-lg font-semibold text-[white]'>Linear Algebra</div>

             <div className='text-[white]'><span className='font-semibold uppercase'>cse</span> <span>. 8th</span> <span>. 2012</span> </div>

            </div>
               <div className='flex gap-[1.2rem] '>
                <img src={trash} className="w-[1.4rem] h-[1.4rem]" alt="" />
                <img src={download} className="w-[1.4rem] h-[1.4rem]" alt="" />
               </div>
             </div>
          <div className='w-[370px] p-2 rounded mt-[1rem] flex justify-between items-center px-[1rem] py-[0.75rem]' style={{background: 'rgba(49, 83, 67, 0.6)'}}>
            <div>

             <div className=' text-lg font-semibold text-[white]'>Linear Algebra</div>

             <div className='text-[white]'><span className='font-semibold uppercase'>cse</span> <span>. 8th</span> <span>. 2012</span> </div>

            </div>
               <div className='flex gap-[1.2rem] '>
                <img src={trash} className="w-[1.4rem] h-[1.4rem]" alt="" />
                <img src={download} className="w-[1.4rem] h-[1.4rem]" alt="" />
               </div>
             </div>
          <div className='w-[370px] p-2 rounded mt-[1rem] flex justify-between items-center px-[1rem] py-[0.75rem]' style={{background: 'rgba(49, 83, 67, 0.6)'}}>
            <div>

             <div className=' text-lg font-semibold text-[white]'>Linear Algebra</div>

             <div className='text-[white]'><span className='font-semibold uppercase'>cse</span> <span>. 8th</span> <span>. 2012</span> </div>

            </div>
               <div className='flex gap-[1.2rem] '>
                <img src={trash} className="w-[1.4rem] h-[1.4rem]" alt="" />
                <img src={download} className="w-[1.4rem] h-[1.4rem]" alt="" />
               </div>
             </div>
          <div className='w-[370px] p-2 rounded mt-[1rem] flex justify-between items-center px-[1rem] py-[0.75rem]' style={{background: 'rgba(49, 83, 67, 0.6)'}}>
            <div>

             <div className=' text-lg font-semibold text-[white]'>Linear Algebra</div>

             <div className='text-[white]'><span className='font-semibold uppercase'>cse</span> <span>. 8th</span> <span>. 2012</span> </div>

            </div>
               <div className='flex gap-[1.2rem] '>
                <img src={trash} className="w-[1.4rem] h-[1.4rem]" alt="" />
                <img src={download} className="w-[1.4rem] h-[1.4rem]" alt="" />
               </div>
             </div>

          </div>

     </div>
     <div className='grow-[0.8] px-[3.8rem] pt-[5.75rem]'>
      <h2 className='text-lg text-[#000000] font-bold  mt-[3.5rem]' style={{fontFamily: 'proxima-nova'}}>New upload.</h2>

      <div className='mt-[1rem] flex flex-col justify-center items-center  h-[215px] rounded' style={{background: 'rgba(49, 83, 67, 0.1)'}}>
      <img src={upload} className="w-[32px] h-[32px]" alt="" />
      <h2 className='text-lg text-[#000000] font-bold'>Upload PDF</h2>
      <h2 style={{fontFamily: 'proxima-nova', color:'rgba(34, 34, 34, 0.8)'}}>Max Size Limit is 10 MB</h2>
      </div>

{/* dropdown buttons */}

<Select
    defaultValue="lucy"
    style={{
      width: 200,
    }}
    
    options={[
      {
        label: 'Manager',
        options: [
          {
            label: 'Jack',
            value: 'jack',
          },
          {
            label: 'Lucy',
            value: 'lucy',
          },
        ],
      },
      {
        label: 'Engineer',
        options: [
          {
            label: 'yiminghe',
            value: 'Yiminghe',
          },
        ],
      },
    ]}
  />

{/* ends here  */}

      <div className='text-center pt-[32px] '>
         
        <button className={`bg-[#222222] p-2 px-3 w-[120px] h-[42px] rounded-[4px] text-[white] rounded-md hover:bg-[#999999] hover:text-[black]` } style={{fontFamily: 'proxima-nova'}} >Upload</button>
         
        </div>

     </div>

     

     </div>


    
        
    </div>
  )
}

export default dashborad