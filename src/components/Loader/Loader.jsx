import React from 'react'
import LoaderAnimation from "../../images/loader.svg";

function Loader() {
  return (
    <div className='loader flex flex-c'>
    <img src={LoaderAnimation} alt="loading ..." />
    </div>
  )
}

export default Loader