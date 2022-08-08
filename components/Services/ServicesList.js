import { itemsService } from "../../config/services.config";
import ServiceItem from "../ServiceItem";

const ServicesList = () => {
  return (
    <div className="grid grid-rows-[repeat(10, minmax(250px,_1fr))] lg:grid-cols-2 lg:grid-rows-[repeat(5, minmax(250px,_1fr))]">
      {itemsService.map((item) => (
        <ServiceItem key={item.key} icon={item.icon} title={item.title} />
      ))}
    </div>
  );
};

export default ServicesList;
