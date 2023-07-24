import React, {useEffect} from 'react';
import "../style/loadingPage.scss";
import { useNavigate } from "react-router-dom";

function LoadingPage() {

  const navigate = useNavigate();
  
  useEffect(() => {
    setTimeout(() => {
      navigate("BilgeAdam")
    }, 4000);
  })

  return (
    <div className='loader'>

    </div>
  )
}

export default LoadingPage