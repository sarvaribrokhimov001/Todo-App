// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// const TodoForm = () => {
//  const [learn , setLearn] = useState([]);


//  useEffect(() => {
//     axios.get(`http://localhost:3001/todos`).then((response) => setLearn(response?.data));
//  } , [])


//   return (
//     <div>
//         {
//             learn.map((item , index) => (
//                 <div key={index}>
//                     <p> {item.title} </p>
//                     <p> {item.completed} </p>
//                 </div>
//             ))
//         }
//     </div>
//   )
// }

// export default TodoForm



import React from 'react'

const TodoForm = () => {
  return (
    <div>
        <form>
            <input type="text" placeholder='text' />
            <button> +Add </button>
            <button> View <i class="ri-eye-line"></i> </button>
            <button> Edit <i class="ri-pencil-line"></i> </button>
            <button> Delete <i class="ri-delete-bin-fill"></i> </button>
        </form>
    </div>
  )
}

export default TodoForm