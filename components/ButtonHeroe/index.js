import PropTypes from "prop-types";

const ButtonHeroe = ({ children }) => {
  return (
    <button className="w-full lg:w-max bg-yellow-200 text-primary font-bold p-5 rounded-md text-xl hover:bg-yellow-400 tracking-wider shadow-2xl transition duration-500">
      {children}
    </button>
  );
};

ButtonHeroe.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonHeroe;
