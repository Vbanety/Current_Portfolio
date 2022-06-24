import React from 'react'

export default function Modal(props) {
  return (
    <div className='modal'>
      <div className="content">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <button>{props.modalButton}</button>
      </div>
    </div>
  )
}
