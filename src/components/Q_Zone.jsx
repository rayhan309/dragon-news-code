import Swimming from '../assets/swimming.png';
import Class from '../assets/class.png';
import Play from '../assets/playground.png';
import bg from '../assets/bg.png'

const Q_Zone = () => {
    return (
        <div className='mt-12'>
            <h3 className="text-left font-bold">Q-Zone</h3>

            <div>
                <img className='w-full' src={Swimming} alt="" />
            </div>
            <div>
                <img className='w-full' src={Class} alt="" />
            </div>
            <div>
                <img className='w-full' src={Play} alt="" />
            </div>
            <div>
                <img className='w-full' src={bg} alt="" />
            </div>
        </div>
    );
};

export default Q_Zone;