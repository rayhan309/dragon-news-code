import { use } from "react";
import { NavLink } from "react-router";

const categoriesPromiss = fetch('/categories.json').then(res=> res.json())

const Categories = () => {

    const categoriesData = use(categoriesPromiss)
    
    return (
        <div>
            <h3 className="text-xl font-bold my-3">All Category (<span className="text-[#D72050]">{categoriesData.length}</span>)</h3>
            <div className="grid grid-cols-1 mt-3">
                {
                    categoriesData.map(category => <NavLink to={`/category/${category?.id}`} key={category?.id} className={'my-btn mb-3'}>{category?.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;