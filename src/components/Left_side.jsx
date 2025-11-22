import { Suspense } from "react";
import Categories from "./categories";
import FackNews from "./FackNews";
import { useLocation, useNavigate } from "react-router";

const Left_side = () => {

  const location = useLocation()
  console.log(location)
  const naviget = useNavigate()
  console.log(naviget)

  return (
    <aside>
      <Suspense
        fallback={<span className="loading loading-infinity loading-md"></span>}>
        <Categories />
      </Suspense>
      <FackNews />
    </aside>
  );
};

export default Left_side;
