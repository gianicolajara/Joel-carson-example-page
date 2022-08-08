import PropTypes from "prop-types";

const Button = ({ children }) => {
  return (
    <button className="bg-sky-500 w-max hover:bg-sky-700 px-4 py-1 rounded-full text-white font-semibold flex gap-1 justify-center items-center">
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
