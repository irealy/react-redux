import React from 'react'

const InfoTable = ({ list, details }) => {
  return (
    <div className='row mb2'>
      <div className='col-md-6'>
        {list}
      </div>
      <div className='col-md-6'>
        {details}
      </div>
    </div>
  )
}

export default InfoTable
