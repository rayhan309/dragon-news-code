import { Link, NavLink } from 'react-router';
import { AiTwotoneHome } from 'react-icons/ai';
import { useContext } from 'react';
import usericon from '../assets/user.png';
import { AuthContext } from '../Provider/AuthContex';

const Navber = () => {

    const { user, logOutuser } = useContext(AuthContext)

    const logoutHandle = () => {
        logOutuser()
    }

    return (
        <nav className='flex flex-col md:flex-row justify-between items-center'>
            <div></div>
            <div className='links myText text'>
                <NavLink to='/' className='flex items-center px-2 py-1 rounded-lg gap-1.5'><AiTwotoneHome /> Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='flex items-center gap-4'>
                <img src={usericon} alt="user" />
                {
                    user ? <button onClick={logoutHandle} className='btn bg-[#403F3F] text-white font-semibold px-8'>LogOut</button> : <Link to='/auth/login' className='btn bg-[#403F3F] text-white font-semibold px-8'>Login</Link>
                }
            </div>
        </nav>
    );
};

export default Navber;