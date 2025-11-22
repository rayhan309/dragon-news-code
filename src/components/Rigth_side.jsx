import FindUs from "./FindUs";
import Q_Zone from "./Q_Zone";
import ShocaleLogin from "./ShocaleLogin";

const Rigth_side = () => {
    return (
        <div className="mt-6">
           <ShocaleLogin />
           <FindUs />
           <Q_Zone />
        </div>
    );
};

export default Rigth_side;