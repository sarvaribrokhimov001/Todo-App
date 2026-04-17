  import axios from 'axios';
  import { useEffect, useState } from 'react'
  import Table from './Table';

  const Tasks = () => {
      const [tasks , setTasks] = useState([]);

      useEffect(() => {
          axios.get(`http://localhost:3001/tasks`)
          .then(data => {setTasks(data?.data)});
      } , [])

    return (
      <div>
          <Table tasks={tasks} />
      </div>
    )
  }
  export default Tasks