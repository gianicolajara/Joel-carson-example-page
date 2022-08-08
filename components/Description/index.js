import PropTypes from "prop-types";

const Description = ({
  children,
  center = false,
  color = "text-gray-500",
  bold = "false",
  size = "text-xl",
}) => {
  return (
    <h3
      className={`${size}  ${center && "text-center"} ${color} ${
        bold && "font-bold"
      }`}
    >
      {children}
    </h3>
  );
};

Description.propTypes = {
  children: PropTypes.node.isRequired,
  center: PropTypes.bool,
  color: PropTypes.string,
  bold: PropTypes.bool,
  size: PropTypes.string,
};

export default Description;
