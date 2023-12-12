import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

function SingleQuestion({ question, answer, id }) {
 const [showAnswer, setShowAnswer] = useState(false)

 return (
  <>
   <div key={id}>
    <div className='flex items-center justify-between border-2 border-md my-3 p-3'>
     <h2
      className='text-lg font-semibold tracking-wider cursor-pointer text-lightBlue'
      onClick={() => setShowAnswer(!showAnswer)}>
      {question}
     </h2>

     <button className='text-lightBlue transition-all text-fontSize2 cursor-pointer'>
      {showAnswer ? (
       <FaMinus onClick={() => setShowAnswer(!showAnswer)} />
      ) : (
       <FaPlus onClick={() => setShowAnswer(!showAnswer)} />
      )}
     </button>
    </div>
    <div className='px-5'>
     {showAnswer && (
      <p className='transition-all text-gray-500 font-medium  bg-gray-50 py-5 px-5'>
       {answer}
      </p>
     )}
    </div>
   </div>
  </>
 )
}

export default SingleQuestion
