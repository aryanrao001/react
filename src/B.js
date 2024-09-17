import React from 'react'
import C from './C'

export default function B(props) {
  return (
    <div>
      <C greet={props.greet} />
    </div>
  )
}
