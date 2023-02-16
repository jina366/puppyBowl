import React from 'react'
import { getAllPuppyWithFetch } from '../apiAdapters'

export default function Players() {
  return (
    <div>{ getAllPuppyWithFetch }</div>
  )
}
