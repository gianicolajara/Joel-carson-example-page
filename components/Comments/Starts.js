import { AiFillStar } from "react-icons/ai";
import PropTypes from "prop-types";

const Starts = ({ stars = 5 }) => {
  return (
    <div className="flex">
      {Array(stars)
        .fill(0, 0, stars)
        .map((_, index) => (
          <AiFillStar key={index} size={20} className="text-orange-400" />
        ))}
    </div>
  );
};

Starts.propTypes = {
  stars: PropTypes.number,
};

export default Starts;
