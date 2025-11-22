import img1 from '../assets/news1.png';
import img2 from '../assets/news2.png';
import img3 from '../assets/news3.png';
import fram from '../assets/Frame.png';


const FackNews = () => {
    return (
        <div className='mt-5 p-4rounded-xl space-y-8'>
            <div className='shadow-lg p-3'>
                <img className='w-full' src={img1} alt="" />
                <p className='text-lg font-semibold myText'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                <div className='flex items-center justify-between mt-5 myText'>
                    <p className='text-black/80'>Sports</p>
                    <div className='flex items-center gap-3'><img src={fram} alt="" /><p>Jan 4, 2022</p></div>
                </div>
            </div>
            <div className='shadow-lg p-3'>
                <img className='w-full' src={img2} alt="" />
                <p className='text-lg font-semibold myText'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                <div className='flex items-center justify-between mt-5 myText'>
                    <p className='text-black/80'>Sports</p>
                    <div className='flex items-center gap-3'><img src={fram} alt="" /><p>Jan 4, 2022</p></div>
                </div>
            </div>
            <div className='shadow-lg p-3'>
                <img className='w-full' src={img3} alt="" />
                <p className='text-lg font-semibold myText'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                <div className='flex items-center justify-between mt-5 myText'>
                    <p className='text-black/80'>Sports</p>
                    <div className='flex items-center gap-3'><img src={fram} alt="" /><p>Jan 4, 2022</p></div>
                </div>
            </div>
        </div>
    );
};

export default FackNews;