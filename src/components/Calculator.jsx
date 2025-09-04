import {useState} from 'react'
import { FaDeleteLeft } from "react-icons/fa6";

const Calculator = ({ expression, setExpression }) => {
  
  const [result, setResult] = useState('')

  function handleClick(value) {
    setExpression(prev => prev + value)
  }

  function handleClear() {
    setExpression('')
    setResult('')
  }

  function handleEquals() {
    try {
      const res = eval(expression)
      setResult(res.toString())
    }
    catch (err){
     setResult('Error')
    }
  }

  function handleKeyDown(e) {
    if(e.key === 'Enter') handleEquals()
  }

  return (
    <div className='bg-white/20 p-3 rounded-md'>
      {/* Expression  */}
      <div className='pb-2'>
        <h3 className='text-gray-200'>
          Expression
        </h3>
        <input
          onChange={(e) => setExpression(e.target.value)}
          onKeyDown={handleKeyDown}
          value={expression}
          className='outline-none border-0' type="text" name="" id="" />
      </div>
      <hr />
      {/* Result */}
      <div className='mt-2'>
        <h3 className='text-gray-200'>
          Result
        </h3>
        <input value={result} className='outline-none border-0 text-xl font-semibold' type="text" name="" id="" readOnly />
      </div>

      {/* keyboard */}
      <div className='grid grid-cols-4 mt-4 gap-2'>
        {/* Row 1 */}
        <button onClick={handleClear} className="btn text-yellow-300">C</button>
        <button onClick={()=> setExpression(p=>p.slice(0,-1))} className="btn "><FaDeleteLeft className='mx-auto' /></button>
        <button onClick={()=> handleClick('%')} className="btn">%</button>
        <button onClick={()=> handleClick('+')} className="btn">+</button>
        {/* Row 2 */}
        <button onClick={()=> handleClick('7')} className="btn">7</button>
        <button onClick={()=> handleClick('8')} className="btn">8</button>
        <button onClick={()=> handleClick('9')} className="btn">9</button>
        <button onClick={()=> handleClick('*')} className="btn">x</button>
        {/* Row 3 */}
        <button onClick={()=> handleClick('4')} className="btn">4</button>
        <button onClick={()=> handleClick('5')} className="btn">5</button>
        <button onClick={()=> handleClick('6')} className="btn">6</button>
        <button onClick={()=> handleClick('-')} className="btn">-</button>

        {/* Row 4 */}
        <button onClick={()=> handleClick('1')} className="btn">1</button>
        <button onClick={()=> handleClick('2')} className="btn">2</button>
        <button onClick={()=> handleClick('3')} className="btn">3</button>
        <button onClick={()=> handleClick('/')} className="btn">/</button>
        {/* Row 5 */}
        <button onClick={()=> handleClick('0')} className="btn col-span-2">0</button>
        <button onClick={()=> handleClick('.')} className="btn">.</button>
        <button onClick={()=> handleEquals()} className="bg-gradient-to-br from-pink-500 to-blue-500 btn">=</button>
      </div>
    </div>
  )
}

export default Calculator