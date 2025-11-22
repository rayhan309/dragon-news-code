import { useEffect } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";

const NewsDitailesCard = ({news}) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <div>
            <h3 className="text-xl font-bold">Dragon News</h3>

            {/* card */}
            <div className="space-y-5 pt-5">
                <img className="w-full rounded-lg" src={news?.image_url} alt="" />
                <h3 className="text-xl font-bold">{news?.title}</h3>
                <p className="text-lg w-[90%] myText">{news?.details} ..!</p>
                <Link to={`/category/${news?.category_id}`} className="bg-[#D72050] py-2 px-4 btn text-white mt-4"><FaArrowLeftLong /> All news in this category</Link>
            </div>
        </div>
    );
};

export default NewsDitailesCard;