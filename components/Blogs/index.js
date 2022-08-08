import Description from "../Description";
import Subtitle from "../Subtitle";
import Wrapper from "../Wrapper";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BsNewspaper } from "react-icons/bs";

const Blogs = () => {
  return (
    <section>
      <Wrapper last>
        <div className="flex flex-col justify-center items-center">
          <div className="w-full bg-primary flex items-center pl-5 rounded-t-lg">
            <BsNewspaper size={25} className="text-white" />
            <Subtitle color="text-white p-3">Latest Blog Posts</Subtitle>
          </div>
          <div className="w-full border-2 border-primary flex flex-col justify-center items-center p-3 rounded-b-lg">
            <div className="bg-white">
              <Subtitle color="text-primary">
                How Much are Apartment Utilities in Utah?
              </Subtitle>
            </div>
            <div className="flex gap-3">
              <AiOutlineArrowLeft size={25} className="cursor-pointer" />
              <AiOutlineArrowRight size={25} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Blogs;
