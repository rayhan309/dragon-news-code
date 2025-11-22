import { Outlet } from "react-router";
import Header from "../components/Header";
import MarqiuNews from "../components/MarqiuNews";
import Navber from "../components/Navber";
import Left_side from "../components/Left_side";
import Rigth_side from "../components/Rigth_side";


const Layouts = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Header></Header>
      <section className="my-8">
        <MarqiuNews />
      </section>
      <Navber />
      <main className="grid grid-cols-12 mt-5 gap-4">
        <section className="left_side col-span-3">
          <Left_side />
        </section>
        <section className='col-span-6'>
          <Outlet></Outlet>
        </section>
        <section className="Rigth_side col-span-3">
          <Rigth_side/>
        </section>
      </main>
    </div>
  );
};

export default Layouts;
