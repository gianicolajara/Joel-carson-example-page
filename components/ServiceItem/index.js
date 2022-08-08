import Icon from "../Icon";
import { BsTools } from "react-icons/bs";
import P from "../P";
import PropTypes from "prop-types";

const ServiceItem = ({ icon = <BsTools />, title = "" }) => {
  return (
    <article className="flex gap-5 my-10 mx-16 lg:mx-5">
      <Icon>{icon}</Icon>
      <P>{title}</P>
    </article>
  );
};

ServiceItem.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
};

export default ServiceItem;
