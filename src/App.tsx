import { useState } from 'react'
import logo from './logo.svg'

function App() {
  const [name, setName] = useState<string | null>(null)

  return (
    <div className='inline'>
    <h1 className='text-7xl text-center text-purple-400 hover:text-purple-900'>Alisson</h1>
    <h1 className='text-7xl text-center text-purple-400'>Tadeu</h1>
    </div>
  )
}

export default App
