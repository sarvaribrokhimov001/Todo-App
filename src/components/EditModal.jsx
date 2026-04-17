import axios from 'axios';
import { useEffect, useState } from 'react';

const EditModal = ({setEditModal , editId}) => {
    const [formData , setFormData] = useState({
      id: editId,
      title: "",
      status: "",
      image: "",
      description: ""
    });

    useEffect(() => {
       axios.get(`http://localhost:3001/tasks/${editId}`).then((data) => {
        const response = data?.data;

        setFormData({
            title: response?.title, 
            image: response?.image,
            status: response?.status,
            description: response?.description
        })
        console.log(response);
       });
    } , [editId]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:3001/tasks/${editId}` , formData).then((data) => {
          console.log(data); 
        });
    }

  return (
    <div className='w-full h-screen absolute top-0 left-0 backdrop-blur-[40px] flex'>
        <form className='w-[500px] h-[480px] flex flex-col justify-center items-center m-auto border border-gray-500 bg-black rounded-[30px] 
           gap-[12px] pt-[20px]' onSubmit={handleSubmit}>
            <input className='rounded-[10px] bg-black text-red-500 focus:text-green-500 p-2 border border-red-700' value={formData?.title} onChange={handleChange} type="text" placeholder='write product title' name='title' />
            <input className='rounded-[10px] bg-black text-red-500 focus:text-green-500 p-2 border border-red-700' value={formData?.status} onChange={handleChange} type="text" placeholder='write product status' name='status' />
            <input className='rounded-[10px] bg-black text-red-500 focus:text-green-500 p-2 border border-red-700' value={formData?.image} onChange={handleChange} type="url" placeholder='upload product image' name='image' />
            <input className='rounded-[10px] bg-black text-red-500 focus:text-green-500 p-2 border border-red-700' value={formData?.description} onChange={handleChange} type="text" placeholder='write product description' name='description' />

            <div className='flex gap-[20px] mt-[25px]'>
                <button className='w-[100px] h-[40px] rounded-[15px] bg-black text-green-500 text-[18px] border-[5px] border-green-500 
                  shadow-[0_4px_12px_rgba(0,128,0,0.5)] transition-all duration-400 ease-in-out hover:bg-green-500 hover:text-white
                  hover:border-white active:bg-black active:text-green-500 active:border-green-500 
                  active:shadow-[0_4px_12px_rgba(0,128,0,0.5)]'> Submit </button>
                <button className='w-[100px] h-[40px] rounded-[15px] bg-black text-red-500 text-[18px] border-[5px] border-red-500 
                  shadow-[0_4px_12px_rgba(255,0,0,0.5)] transition-all duration-400 ease-in-out hover:bg-red-500 hover:text-white
                  hover:border-white active:bg-black active:text-red-500 active:border-red-500 
                  active:shadow-[0_4px_12px_rgba(255,0,0,0.5)]' onClick={() => {
                    setEditModal(false);
                }}> Cancel </button>
            </div>
        </form>
    </div>
  )
}
export default EditModal