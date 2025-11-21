import Marquee from "react-fast-marquee";

const MarqiuNews = () => {
    return (
        <div className="flex items-center gap-7 bg-base-300 p-2 rounded-lg">
            <button className="btn bg-[#D72050] text-white font-bold px-5">Latest</button>
            <Marquee className="font-bold">
            <p className="mr-7">Match Highlights: Germany vs Spain — as it happened  !</p>
            <p className="mr-7">Match Highlights: Germany vs Spain — as it happened  !</p>
            <p>Match Highlights: Germany vs Spain — as it happened  !</p>
            </Marquee>
        </div>
    );
};

export default MarqiuNews;