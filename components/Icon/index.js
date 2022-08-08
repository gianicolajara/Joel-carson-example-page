import PropTypes from "prop-types";

const Icon = ({ children, color = "text-gray-400", hover = false }) => {
  return (
    <div className={`text-gray-400 ${color} ${hover && "hover:text-white"}`}>
      {children}
    </div>
  );
};

Icon.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

export default Icon;
