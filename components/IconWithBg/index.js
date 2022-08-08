import PropTypes from "prop-types";

const IconWithBg = ({ children }) => {
  return (
    <div className="p-2 bg-primary rounded-full hover:bg-sky-700 ">
      {children}
    </div>
  );
};

IconWithBg.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IconWithBg;
