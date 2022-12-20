import { useContext, useState } from "react";
import Auth from "../context/Auth";
import { Button } from "@mui/material";
import './style.css'

export const Dashboard = () => {
  // const { isAuthenticated } = useContext(Auth);
  const [count, setCount] = useState(100);

  const incre = () => {
    setCount(count + 1)
    console.log(count)
  }

  const decr = () => {
    setCount(count - 1)
    console.log(count)
  }

  const needleStyle = {
    transform: `rotate(${count}deg)`
  };
  return (
    <div className="dashboard flex flex-col place-content-center items-center">
      <div className="flex flex-row">
        <Button variant="outlined" onClick={() => incre()}>+</Button>
        <Button variant="outlined" onClick={() => decr()}>-</Button>
      </div>
      <div className="semi-donut">
        {count}%
      </div>
      <div className="counter-needle" style={needleStyle} />
    </div>
  );
};