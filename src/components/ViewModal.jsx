import axios from 'axios';
import { useEffect, useState } from 'react';

const ViewModal = ({ setViewModal, viewId }) => {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    if (viewId) {
      axios.get(`http://localhost:3001/todos/${viewId}`).then((res) => {
          setTasks(res.data);
        }).catch((err) => {
          console.log(err);
        });
    }
  }, [viewId]);

  return (
    <div>
        {
            tasks.map((item , index) => (
                <div key={index}>
                    <p> {item.title} </p>
                </div>
            ))
        }
    </div>
  );
};
export default ViewModal;