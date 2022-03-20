import { Routes, Route } from 'react-router-dom'

import Login from './components/login'
import ForgotPass from './components/login/ForgotPass'
import Profile from './components/Profile'
import Signup from './components/signup'
import Faq from './components/common/Faq'
import { useLoginState } from './state/login/hooks'

function App() {
  const { isUserLoggedIn } = useLoginState()
  return (
    <Routes>
      <Route path="/" element={isUserLoggedIn ? <Profile /> : <Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="forgot-pass" element={<ForgotPass />} />
      <Route path="faq" element={<Faq />} />
    </Routes>
  )
}

export default App
