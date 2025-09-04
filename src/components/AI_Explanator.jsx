import React, { useState } from 'react'
import { getAIExplanation } from '../lib/getAIExplanation'
import Markdown from 'react-markdown'

const AI_Explanator = ({ expression }) => {
  const [explanation, setExplanation] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit() {
    setLoading(true)
    const res = await getAIExplanation(expression)
    setExplanation(res)
    setLoading(false)
  }

  return (
    <div className='p-5 bg-white/20 rounded-md flex-1 max-w-[500px]'>
      <div className='flex flex-wrap justify-between items-center gap-3'>
        <h4>AI Explain</h4>
        <button onClick={handleSubmit} disabled={loading} className='bg-white/25 p-2 cursor-pointer'>{loading ? 'Preparing Explanation...' : 'Ask AI'}</button>
      </div>

      {/* Explanation Section */}

      <div className='py-8'>
        {
          explanation.trim().length > 0 ?
            <div className="prose max-w-none break-words whitespace-pre-wrap">
              {/* <Markdown>{explanation}</Markdown> */}
              {explanation}
            </div>
            :
            <div className='text-gray-300'>
              Gives Explanation About the Sum.. Click Ask AI for teaching..
            </div>
        }
      </div>

    </div>
  )
}

export default AI_Explanator