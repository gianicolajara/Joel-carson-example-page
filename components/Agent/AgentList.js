import Image from "next/image";
import { agentImagesList } from "../../config/agent.config";

const AgentList = () => {
  return (
    <div className="w-full h-max flex flex-wrap justify-center items-center gap-10 py-10">
      {agentImagesList.map((image) => (
        <div className="relative max-w-[130px]  w-[33.33%]" key={image.key}>
          <Image
            src={image.src}
            layout="responsive"
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </div>
      ))}
    </div>
  );
};

export default AgentList;
