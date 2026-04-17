import axios from 'axios';
import { useEffect, useState } from 'react';

const ViewModal = ({ setViewModal, viewId }) => {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    if (viewId) {
      axios.get(`http://localhost:3001/tasks/${viewId}`).then((res) => {
          setTasks(res.data);
        }).catch((err) => {
          console.log(err);
        });
    }
  }, [viewId]);

  return (
    <div className="w-full h-screen fixed top-0 left-0 backdrop-blur-[20px] flex z-[999]">
      <div className="w-[450px] bg-black text-white m-auto rounded-[20px] p-[25px] text-center shadow-[0_0_25px_rgba(0,0,0,0.7)] flex flex-col gap-[10px]">
        
        {tasks ? (
          <>
            <img className="w-full h-[220px] rounded-[15px] object-cover" src={tasks.image} alt={tasks.title} />
            <h2 className="text-[26px] mt-[10px]"> {tasks.title} </h2>
            <p> <span className='text-[#00ff99] font-bold'> Status: </span> {tasks.status} </p>
            <p> <span className="text-[#00ff99] font-bold"> Description: </span> {tasks.description} </p>
          </>
        ) : (
          <p> Loading... </p>
        )}
        <button 
        className="mt-[15px] p-[10px] rounded-[10px] border-[5px] border-red-500 bg-black text-red-500 text-[21px] transition-all duration-700 shadow-[0_4px_15px_rgba(255,0,0,0.6)]
         hover:bg-red-500 hover:text-white hover:border-white
         active:bg-black active:text-red-500 active:border-red-500" 
        onClick={() => setViewModal(false)}> Close </button>
      </div>
    </div>
  );
};
export default ViewModal;