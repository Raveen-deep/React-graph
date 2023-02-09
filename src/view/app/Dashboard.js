import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from "react";


const Dashboard = () => {
    const [value, setValue] = useState("lineChart")
    const navigate = useNavigate();
    const onSubmit=()=>{
        localStorage.setItem("chartName",value);
        navigate("/DataForm");
    }
    const handleChange = (e) => {
        setValue(e.target.value);
      };
  return (
    <div>
        <div>Dashboard</div>
        <select value={value} onChange={handleChange}>
            <option value="lineChart">Line Chart</option>
            <option value="barChart">Bar Chart</option>
            <option value="pieChart">Pie Chart</option>
        </select>
        <button onClick={onSubmit} >  Submit </button>
    </div>
  )
}

export default Dashboard