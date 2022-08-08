import PropTypes from "prop-types";

const Wrapper = ({ children, last = false, bg = false }) => {
  return (
    <div
      className={`max-w-[999px] w-full h-full px-7 m-auto flex flex-col ${
        last && "py-10"
      } ${bg}`}
    >
      {children}
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  last: PropTypes.bool,
  bg: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default Wrapper;
