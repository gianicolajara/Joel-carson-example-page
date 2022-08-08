import PropTypes from "prop-types";

const Subtitle = ({
  children,
  center = false,
  color = "text-gray-500",
  bold = false,
  size = "text-2xl",
}) => {
  return (
    <h2
      className={`${size}  ${center && "text-center"} ${color} ${
        bold && "font-semibold"
      }`}
    >
      {children}
    </h2>
  );
};

Subtitle.propTypes = {
  children: PropTypes.node.isRequired,
  center: PropTypes.bool,
  color: PropTypes.string,
  bold: PropTypes.bool,
  size: PropTypes.string,
};

export default Subtitle;
