import Description from "../Description";
import Icon from "../Icon";
import P from "../P";
import Wrapper from "../Wrapper";
import ServicesList from "./ServicesList";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import IconWithBg from "../IconWithBg";

const Services = () => {
  return (
    <section>
      <Wrapper last>
        <P color="text-primary">
          I strive to make the home selling process seem effortless with a...
        </P>
        <Description bold color="text-primary" size="lg:text-3xl">
          COMPLETELY TURN-KEY SELLER SERVICE
        </Description>
        <div className="mt-2">
          <P>My sellers&apos; program includes:</P>
        </div>
        <ServicesList />
        <div className="w-full h-full flex justify-center items-center lg:max-w-[760px] mx-auto">
          <Image src="/media/van.png" alt="van" width={1024} height={466} />
        </div>
        <div className="w-full bg-sky-100 p-5 rounded-md justify-center items-center gap-5 cursor-pointer lg:hidden flex">
          <IconWithBg>
            <Icon color="text-yellow-200" hover>
              <AiOutlineSearch size={38} />
            </Icon>
          </IconWithBg>

          <P bold color="text-primary">
            <span className="text-3xl">Search Homes</span>
          </P>
        </div>
      </Wrapper>
    </section>
  );
};

export default Services;
