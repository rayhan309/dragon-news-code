import { Suspense } from "react";
import Categories from "./categories";
import FackNews from "./FackNews"; 

const Left_side = () => {
 
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
