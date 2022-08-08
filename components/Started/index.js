import Image from "next/image";
import ButtonHeroe from "../ButtonHeroe";
import P from "../P";
import Subtitle from "../Subtitle";
import Wrapper from "../Wrapper";

const Started = () => {
  return (
    <section>
      <div className="w-full h-full bg-[url('/media/heroe.png')] bg-no-repeat bg-center bg-cover flex flex-col items-center">
        <div className="px-10 pt-10 flex flex-col lg:flex-row w-full ">
          <div className="flex flex-col items-center lg:flex-1 lg:justify-center lg:items-center">
            <div className="lg:mb-20">
              <Subtitle color="text-white" size="text-2xl lg:text-6xl" center>
                <span>Salt Lake City&apos;s</span>
                <br />
                <span className="font-bold">#1 Agent!</span>

                <br />
                <br />
              </Subtitle>
            </div>
            <P color="text-white" size="text-lg lg:text-3xl" center>
              Why list with anyone else?
            </P>
            <br />
            <ButtonHeroe>GET STARTED HERE</ButtonHeroe>
          </div>

          <div className="w-full max-w-[310px] lg:min-w-[450px] ] h-full lg:max-w-[50%] lg:w-full mx-auto">
            <Image
              src="/media/joel-gold.png"
              width={879}
              height={1024}
              alt="joel"
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Started;
