import Wrapper from "../Wrapper";
import ItemAbout from "./ItemAbout";

const itemsAboutList = [
  {
    key: 1,
    title: "Teamwork",
    body: "Great communication and openness give our team room to express ideas and the ability to pivot and evolve in an ever-changing environment.",
  },
  {
    key: 2,
    title: "Availability",
    body: `If you read what people say about me online, you will find a common theme: My team members and I are always there for our clients. We are always ready and willing to "drop everything" to assist our clients' most immediate needs.`,
  },
  {
    key: 3,
    title: "Community",
    body: `I am heavily involved in protecting property rights in Utah. I contribute tens of thousands of dollars annually to our political survival fund that protects homeowners' property rights.`,
  },
  {
    key: 4,
    title: "Transparency",
    body: `I've built a legacy of honesty and integrity over 30 years serving the Salt Lake City area with real estate services. My name is well known locally in association with these principles.`,
  },
];

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
