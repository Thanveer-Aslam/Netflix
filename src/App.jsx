import {Routes, Route} from 'react-router-dom'
// import AuthForm from './pages/AuthForm'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { AuthContextProvider } from './context/AuthContext'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Account from './pages/Accounts'
import ProtectedRoutes from './components/ProtectedRoutes'

const App = () => {
  return (
    <>
      {/* <AuthForm /> */}
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/account"
            element={
              <ProtectedRoutes>
                <Account />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App
