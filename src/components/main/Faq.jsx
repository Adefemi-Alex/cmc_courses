import React, { useState } from 'react'

import { data } from '../../faqdata'
import SingleQuestion from './SingleQuestion'

const Faq = () => {
 const [questions, setquestions] = useState(data)
 const [expanded, setExpanded] = useState(false)
 const dataToDisplay = expanded ? questions : questions.slice(0, 4)

 return (
  <div className='p-5 mx-10 md:mx-2'>
   <h2
    className='text-fontSize1 font-bold sm:text-fontSize3
     mb-5 text-center'>
    Frequently asked Questions
   </h2>

   {dataToDisplay.map((question) => (
    <SingleQuestion
     question={question.question}
     answer={question.answer}
     id={question.id}
     key={question.id}
    />
   ))}

   <button
    onClick={() => setExpanded(!expanded)}
    className='bg-lightBlue px-5 transition-all hover:font-semibold py-2 text-white rounded-lg'>
    {expanded ? 'Show Less.. ' : 'Show More'}
   </button>
  </div>
 )
}

export default Faq
