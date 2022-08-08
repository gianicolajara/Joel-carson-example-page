import P from "../P";
import Subtitle from "../Subtitle";
import PropTypes from "prop-types";

const ItemAbout = ({ title = "", body = "" }) => {
  return (
    <div className="w-full">
      <div className="mb-5">
        <Subtitle color="text-primary" center>
          {title}
        </Subtitle>
      </div>
      <P center>{body}</P>
    </div>
  );
};

ItemAbout.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

export default ItemAbout;
