import Image from "next/image";
import Button from "../Button";
import { AiFillPhone, AiOutlineSearch } from "react-icons/ai";
import Subtitle from "../Subtitle";
import IconWithBg from "../IconWithBg";
import Icon from "../Icon";
import P from "../P";

const Menu = () => {
  return (
    <nav className="w-full flex justify-center flex-col items-center lg:flex-row lg:justify-between lg:px-10 bg-primary py-2 ">
      <div className="relative">
        <Image src="/media/logo.png" width={250} height={100} alt="logo" />
      </div>
      <div className="lg:flex hidden">
        <Subtitle color="text-white" center>
          Call <span className="font-bold text-4xl">801.673.3333</span>
          <br />
          <span className="text-lg">or</span> Leave a Message for me here
        </Subtitle>
      </div>
      <div className="p-5 rounded-md justify-center items-center gap-5 cursor-pointer hidden lg:flex">
        <IconWithBg>
          <Icon color="text-yellow-200" hover>
            <AiOutlineSearch size={38} />
          </Icon>
        </IconWithBg>

        <P bold color="text-white">
          <span className="text-3xl">Search Homes</span>
        </P>
      </div>
      <div className="lg:hidden flex">
        <Button>
          <AiFillPhone size={35} /> Call Now
        </Button>
      </div>
    </nav>
  );
};

export default Menu;
