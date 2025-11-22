import { format } from 'date-fns';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3 mt-7'>
            <img src={logo} alt="dragon news" />
            <p className='myText'>Journalism Without Fear or Favour</p>
            <p className='text-xl myText mt-3'>{format(new Date(), "EEEE,   MMMM MM,   yyyy")}</p>
        </div>
    );
};

export default Header;