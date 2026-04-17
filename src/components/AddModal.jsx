import { useState } from 'react';
import axios from 'axios';

const AddModal = ({ setAddModal }) => {
  const [addFormData , setAddFormData] = useState({
      title: "",
      status: "",
      image: "",
      description: ""
  });

    const handleChange = (e) => {
        setAddFormData({
            ...addFormData,
            [e?.target?.name] : e?.target?.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post(`http://localhost:3001/tasks` , addFormData).then(data => {
            console.log(data?.data);
        });
        console.log(addFormData);
    }

  return (
    <div className='w-full h-screen absolute top-0 left-0 backdrop-blur-[40px] flex'>
        <form className='w-[500px] h-[480px] flex flex-col justify-center items-center m-auto border border-gray-500 bg-black rounded-[30px] 
           gap-[12px] pt-[20px]' onSubmit={handleSubmit}>
            <input className='w-[400px] h-[50px] focus:bg-black focus:text-red-500 focus:border-[5px] focus:outline-none" px-[20px] text-[22px] rounded-[10px] border border-red-600' onChange={handleChange} value={addFormData?.title} type="text" name='title' />
            <input className='w-[400px] h-[50px] focus:bg-black focus:text-red-500 focus:border-[5px] focus:outline-none" px-[20px] text-[22px] rounded-[10px] border border-red-600' onChange={handleChange} value={addFormData?.status} type="text" name='status' />
            <input className='w-[400px] h-[50px] focus:bg-black focus:text-red-500 focus:border-[5px] focus:outline-none" px-[20px] text-[22px] rounded-[10px] border border-red-600' onChange={handleChange} value={addFormData?.image} type="url" name='image' />
            <input className='w-[400px] h-[50px] focus:bg-black focus:text-red-500 focus:border-[5px] focus:outline-none" px-[20px] text-[22px] rounded-[10px] border border-red-600' onChange={handleChange} value={addFormData?.description} type="text" name='description' />

            <div className='flex gap-[20px] mt-[25px]'>
                <button className='w-[100px] h-[40px] rounded-[15px] bg-black text-green-500 border-[4px] border-green-500 shadow-[0_4px_12px_rgba(0,128,0,0.5)] 
                  text-[18px] transition-all duration-400 ease-in-out hover:bg-green-500 hover:text-white hover:border-white active:bg-black 
                  active:text-green-500 active:border-green-500 active:shadow-[0_4px_12px_rgba(0,128,0,0.5)]'> Submit </button>
                <button className='w-[100px] h-[40px] rounded-[15px] bg-black text-red-500 border-[4px] border-red-500 shadow-[0_4px_12px_rgba(255,0,0,0.5)] 
                  text-[18px] transition-all duration-400 ease-in-out hover:bg-red-500 hover:text-white hover:border-white active:bg-black
                  active:text-red-500 active:border-red-500 active:shadow-[0_4px_12px_rgba(255,0,0,0.5)]' onClick={() => {
                    setAddModal(false);
                }}> Cancel </button>
            </div>
        </form>
    </div>
  )
}
export default AddModal