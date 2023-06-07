import { useNavigate } from 'react-router-dom';
const ScheduleBtn = () => {
    const navigate = useNavigate();
  return (
    <button className='btn' onClick={() => navigate("/pricing")}>Schedule a Demo</button>
  )
}

export default ScheduleBtn