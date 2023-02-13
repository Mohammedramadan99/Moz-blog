import React from 'react'

function Spinner({type,size}) {
    if(type === "full") return(
        <div className={size === "sm" ? `sm full_width` : "full_width"}>
            <div className="custom-loader"></div>
        </div>
    )
  return (
    <div className={size === "sm" ? `sm custom-loader` : "custom-loader"}></div>
  )
}

export default Spinner