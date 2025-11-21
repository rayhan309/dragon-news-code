import { Outlet } from 'react-router';
import Header from '../components/Header';
import MarqiuNews from '../components/MarqiuNews';
import Navber from '../components/Navber';

const Layouts = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Header></Header>
            <section className='my-8'>
                <MarqiuNews />
            </section>
            <Navber />
            <main>
                <section>
                    <section className='left_side'></section>
                    <section><Outlet></Outlet></section>
                    <section className='Rigth_side'></section>
                </section>
            </main>
        </div>
    );
};

export default Layouts;