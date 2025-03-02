import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DepositMoney from './components/DepositMoney'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DepositMoney />
    </>
  )
}

export default App
