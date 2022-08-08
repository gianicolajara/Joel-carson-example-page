import PropTypes from "prop-types";

const P = ({
  children,
  center = false,
  color = "text-gray-500",
  bold = false,
  leading = true,
  size = "text-lg",
}) => {
  return (
    <p
      className={`${color} ${size} ${center && "text-center"} ${
        bold && "font-semibold"
      } ${leading && "leading-8"}`}
    >
      {children}
    </p>
  );
};

P.propTypes = {
  children: PropTypes.node.isRequired,
  center: PropTypes.bool,
  color: PropTypes.string,
  bold: PropTypes.bool,
  leading: PropTypes.bool,
  size: PropTypes.string,
};

export default P;
