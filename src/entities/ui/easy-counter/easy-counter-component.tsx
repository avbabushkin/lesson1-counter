import React from 'react'
import {useDispatch, useSelector} from "react-redux";

import {RootState} from "../../../store/store";
import {addCount, subCount, resetCount} from "./easy-counter-slice"

export const EasyCounterComponent = (() => {
  const dispatch = useDispatch()
  const count = useSelector((state: RootState) => state.easyCounter.count)

  const handleAddCounter = () => {
    dispatch(addCount())
  }

  const handleSubCounter = () => {
    dispatch(subCount())
  }

  const handleResetCounter = () => {
    dispatch(resetCount())
  }


  return (
    <div>
      <div>Easy Counter</div>
      <div>count: {count} </div>
      <button className="btn btn-primary" onClick={handleAddCounter}>add</button>
      <button onClick={handleSubCounter}>sub</button>
      <button onClick={handleResetCounter}>reset</button>
    </div>
  )
})
