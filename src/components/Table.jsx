import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import EditModal from './EditModal';
import AddModal from './AddModal';
import ViewModal from './ViewModal';

const Table = ({tasks}) => {
  const [editModal , setEditModal] = useState(false);
  const [editId , setEditId] = useState();
  const [addModal , setAddModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [viewId, setViewId] = useState(null);

     useEffect(() => {
      console.log(editId);
     } , [editId]);

    const handleEditModal = () => {
      setEditModal(true);
    }

    const handleAddModal = () => {
      setAddModal(true);
    }

    const handleDelete = (id) => {
      if(window.confirm('ishonchingiz komilmi ?')) {
      axios.delete(`http://localhost:3001/tasks/${id}`)
      .then(data => {
        console.log(data);
      });
    } else {
      toast.error('item ni ochirish imkoni yoq');
    }
  }

  return (
    <div>
      { editModal ? ( <EditModal setEditModal={setEditModal} editId={editId} /> ) : null }
      { addModal ? <AddModal setAddModal={setAddModal} /> : null }
      { viewModal && (<ViewModal setViewModal={setViewModal} viewId={viewId} />)}

    <div className='flex justify-end bg-[#1E2230] p-[20px]'>
      <button onClick={handleAddModal} 
        className='w-[200px] h-[40px] rounded-[15px] bg-black text-green-500 shadow-[0_4px_12px_rgba(0,128,0,0.5)] text-[22px] border-[4px]
        border-green-500 font-bold transition-all duration-300 ease-in-out hover:bg-green-500 hover:border-white hover:text-white
        active:border-green-500 active:text-green-500 active:bg-black active:shadow-[0_4px_12px_rgba(0,128,0,0.5)]'> AddBtn 
        <span className="text-[24px] font-extrabold"> + </span> 
      </button>
    </div>


    <table>
      <thead>
        <tr>
          <th> T/R </th>
          <th> Image </th>
          <th> Title </th>
          <th> Status </th>
          <th> Description </th>
          <th> Actions </th>
        </tr>
      </thead>

      <tbody>
       { tasks.length > 0 ? (
          tasks.map(({id , image , title , status , description}) => (
        <tr key={id}>
          <td> {id} </td>
          <td> <img src={image} width={'150'} height={'100'} alt="image" /> </td>
          <td> {title} </td>
          <td> {status} </td>
          <td> {description} </td>
          <td className='flex flex-col justify-center items-center gap-[7px]'> 
            <button className='w-[100px] h-[40px] rounded-[20px] bg-black text-green-500 text-[18px] font-bold border-[3px] border-green-500 
              shadow-[0_4px_12px_rgba(0,128,0,0.5)] transition-all duration-500 ease-in-out hover:bg-green-500 hover:text-white hover:border-white
              active:bg-black active:text-green-500 active:border-green-500 active:shadow-[0_4px_12px_rgba(0,128,0,0.5)]' onClick={() => {
                setViewId(id);
                setViewModal(true);
            }}> View </button>
            <button className='w-[100px] h-[40px] rounded-[20px] bg-black text-yellow-400 text-[18px] font-bold border-[3px] border-yellow-400 
              shadow-[0_4px_12px_rgba(255,193,7,0.6)] transition-all duration-500 ease-in-out hover:bg-yellow-400 hover:text-black hover:border-black
              active:bg-black active:text-yellow-400 active:border-yellow-400 active:shadow-[0_4px_12px_rgba(255,193,7,0.6)]' onClick={() => {
                setEditId(id);
                handleEditModal();
            }}> Edit </button>
            <button className='w-[100px] h-[40px] rounded-[20px] bg-black text-red-500 text-[18px] font-bold border-[3px] border-red-500 
              shadow-[0_4px_12px_rgba(255,0,0,0.5)] transition-all duration-500 ease-in-out hover:bg-red-500 hover:text-white hover:border-white
              active:bg-black active:text-red-500 active:border-red-500 active:shadow-[0_4px_12px_rgba(255,0,0,0.5)]' onClick={() => {
                handleDelete(id);
            }}> Delete </button>
          </td>
        </tr>
          ))
        ) : null }
      </tbody>
    </table>
  </div>
  )
}
export default Table