import React from 'react'

function Badge({status}) {
  if(status){
    return (
      <span className={`${status==='active' ? 'bg-green-400' : 'bg-red-400'} rounded-full px-3 pb-1 text-white text-sm`}>{status}</span>
    )
  }
}

export default Badge