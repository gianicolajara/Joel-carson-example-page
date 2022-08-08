import { itemsAboutList } from "../../config/about.config";
import Wrapper from "../Wrapper";
import ItemAbout from "./ItemAbout";

const About = () => {
  return (
    <section>
      <Wrapper last>
        <div className="flex flex-col gap-10 lg:flex-row ">
          {itemsAboutList.map((item) => (
            <ItemAbout key={item.key} body={item.body} title={item.title} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default About;
