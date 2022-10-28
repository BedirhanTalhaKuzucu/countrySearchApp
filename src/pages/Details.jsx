import React from 'react';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";

function Details() {

    const { id } = useParams();
    useEffect(() => {
      console.log(id);
    }, [])
    
    
  return (
    <div>Details</div>
  )
}

export default Details