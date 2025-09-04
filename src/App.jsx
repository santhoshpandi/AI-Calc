import { useState } from "react"
import AI_Explanator from "./components/AI_Explanator"
import Calculator from "./components/Calculator"


function App() {

  const [expression, setExpression] = useState('')

  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-purple-900 to-violet-900 px-8 md:px-16 py-8 text-white">
      <section className="w-full flex justify-between gap-4 px-5">
        <h3>AI Calculator</h3>
        <h5>by Santhosh</h5>
      </section>

      <div className="mt-8 flex flex-wrap flex-col md:flex-row gap-5 justify-center items-center">
        <Calculator expression={expression} setExpression={setExpression} />
        <AI_Explanator expression={expression} />
      </div>
    </div>
  )
}

export default App
