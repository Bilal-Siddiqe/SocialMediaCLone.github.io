import { Route, Routes, useNavigate, } from 'react-router-dom';
import Navbar from './components/Navbar'
import SignUpForm from './components/SignUpForm'
import SignInForm from './components/SignInForm'
import Profile from './components/Profile'
import NotFound from './components/NotFound'
import './App.css';

function App() {

    const navigate = useNavigate();

    return (
        <>
            <Navbar />

            <Routes>
                
                <Route path='/' element={<h1 className='text-center'>I am Home</h1>} />
                <Route path='signup' element={<SignUpForm />} />
                <Route path='signin' element={<SignInForm />} />
                <Route path='profile' element={<Profile />} />

            </Routes>

        </>
    )
}
export default App