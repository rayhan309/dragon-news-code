import { AiOutlineShareAlt, AiOutlineEye } from "react-icons/ai";
import { format } from "date-fns";
import { FaRegBookmark, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    rating,
    total_view,
    image_url,
    details,
    tags,
  } = news;

  return (
    <div className="rounded-xl shadow-xl p-5 bg-white mb-4 cursor-pointer">
      {/* Author Section */}
      <div className="flex items-center bg-base-300 p-4 rounded-xl justify-between mb-3">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt="author"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{author.name}</h3>
            <p className="text-sm text-gray-500">
              {format(new Date(author.published_date), "yyyy-MM-dd")}
            </p>
          </div>
        </div>

        <button className="text-gray-500 text-xl flex items-center gap-1.5">
          <FaRegBookmark />
          <AiOutlineShareAlt />
        </button>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold text-gray-800 mb-3">{title}</h2>

      {/* Thumbnail */}
      <div className="mb-4">
        <img
          src={image_url}
          alt="thumbnail"
          className="rounded-xl w-full object-cover"
        />
      </div>

      {/* Details */}
      <p className="text-gray-600 mb-3">
        {details.slice(0, 200)}...
        <span className="text-[#FF8C47] cursor-pointer"> Read More</span>
      </p>

      {/* Tags */}
      <div className="mb-3 flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span key={idx} className="badge badge-outline">
            #{tag}
          </span>
        ))}
      </div>

      <hr className="my-3" />

      {/* Footer (Rating + Views) */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-orange-500">
          <div className="flex items-center gap-1">
            {Array.from({ length: rating.number }).map((_, idx) => (
              <FaStar
                 key={idx}
              />

              // <FaRegBookmark
              //   key={idx}
              //   type="radio"
              //   className="mask mask-star-2 text-orange-700"
              //   readOnly
              // />

            ))}
          </div>
          <span className="font-semibold">{rating.number}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <AiOutlineEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
