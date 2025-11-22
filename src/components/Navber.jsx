import user from '../assets/user.png'
import { NavLink } from 'react-router';
import { AiTwotoneHome } from 'react-icons/ai';

const Navber = () => {
    return (
        <nav className='flex justify-between items-center'>
            <div></div>
            <div className='links myText text'>
                <NavLink to='/' className='flex items-center px-2 py-1 rounded-lg gap-1.5'><AiTwotoneHome /> Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='flex items-center gap-4'>
                <img src={user} alt="user" />
                <button className='btn bg-[#403F3F] text-white font-semibold px-8'>Login</button>
            </div>
        </nav>
    );
};

export default Navber;