import React from 'react'
import {useDispatch, useSelector} from "react-redux";

import {RootState} from "../../../store/store";
import {addHardCount, subHardCount, resetHardCount, addTen, subTen, multipleByTwo, divideByTwo} from "./hard-counter-slice"

export const HardCounterComponent = (() => {
  const dispatch = useDispatch()
  const hardCount = useSelector((state: RootState) => state.hardCounter.hardCount)

  const handleAddCounter = () => {
    dispatch(addHardCount())
  }

  const handleSubCounter = () => {
    dispatch(subHardCount())
  }

  const handleResetCounter = () => {
    dispatch(resetHardCount())
  }

  const handleAddTenCounter = () => {
    dispatch(addTen())
  }

  const handleSubTenCounter = () => {
    dispatch(subTen())
  }

  const handleMultipleByTwoCounter = () => {
    dispatch(multipleByTwo())
  }

  const handleDivideByTwoCounter = () => {
    dispatch(divideByTwo())
  }

  return (
    <div>
      <div>Hard Counter</div>
      <div>count: {hardCount} </div>
      <button onClick={handleAddCounter}>add</button>
      <button onClick={handleSubCounter}>sub</button>
      <button onClick={handleResetCounter}>reset</button>
      <button onClick={handleAddTenCounter}>+10</button>
      <button onClick={handleSubTenCounter}>-10</button>
      <button onClick={handleMultipleByTwoCounter}>x2</button>
      <button onClick={handleDivideByTwoCounter}>1/2</button>
    </div>
  )
})
