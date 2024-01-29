import React from 'react'

const Avatar = (props) => {
  return (
    <div className={props.className}>
        <img src={props.src} alt={props.name} height={342} width={442}/>
    </div>
  )
}

export default Avatar