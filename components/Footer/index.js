import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import Icon from "../Icon";
import Wrapper from "../Wrapper";

const Footer = () => {
  return (
    <section>
      <div className=" bg-primary">
        <Wrapper last>
          <div className="flex flex-wrap w-full justify-center items-center gap-14">
            <AiFillYoutube
              size={35}
              className="hover:text-yellow-400 text-sky-500 cursor-pointer"
            />
            <AiFillFacebook
              size={35}
              className="hover:text-yellow-400 text-sky-500 cursor-pointer"
            />
            <AiOutlineTwitter
              size={35}
              className="hover:text-yellow-400 text-sky-500 cursor-pointer"
            />
          </div>
        </Wrapper>
      </div>
    </section>
  );
};

export default Footer;
