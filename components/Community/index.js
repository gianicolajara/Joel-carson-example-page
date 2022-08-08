import Wrapper from "../Wrapper";
import Image from "next/image";
import P from "../P";
import Subtitle from "../Subtitle";
import ButtonHeroe from "../ButtonHeroe";

const Community = () => {
  return (
    <section>
      <Wrapper last>
        <div className="w-full h-full bg-gray-100 rounded-lg flex flex-col justify-center items-center p-10 gap-10 lg:flex-row">
          <div className="max-w-[240px] lg:min-w-[240px] w-full border-[1px] border-gray-500 rounded-md overflow-hidden p-1">
            <Image
              src="/media/community.png"
              width={240}
              height={310}
              layout="responsive"
              alt="Community"
            />
          </div>
          <div className="flex flex-col gap-7 items-center">
            <P center color="text-black">
              My Recent Interview from VoyageUtah.com
            </P>
            <Subtitle center color="text-black">
              Community Highlights: Meet Joel Carson of Utah Real Estate
            </Subtitle>
            <P center color="text-black">
              <span className="font-bold">
                Hi Joel, it&apos;s an honor to have you on the platform. Thanks
                for taking the time to share your story with us - to start maybe
                you can share some of your backstories with our readers?
              </span>
              I joined the Navy in 1983. I earned a degree in accounting and
              became a certified public accountant during my service. I served
              four years. It was a great place to get an education on multiple
              levels. In addition to the art of accounting, I learned to focus,
              developed discipline and came to understand the meaning of
              respect. It helped me develop a great....
            </P>
            <ButtonHeroe>Continue Reading at VoyageUtah.com</ButtonHeroe>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Community;
