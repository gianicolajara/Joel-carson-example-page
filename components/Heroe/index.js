import ButtonHeroe from "../ButtonHeroe";
import P from "../P";
import Subtitle from "../Subtitle";
import Wrapper from "../Wrapper";
import Image from "next/image";

const Heroe = () => {
  return (
    <section className="w-full h-full bg-[url('/media/heroe.png')] bg-center bg-cover">
      <Wrapper>
        <div className="flex flex-col w-full h-full mt-7 lg:flex-row">
          <div className="mt-5 flex flex-col justify-center items-center w-full">
            <Subtitle center color="text-white">
              <span>
                <b>Sell</b>
              </span>{" "}
              your{" "}
              <span>
                <b>Home</b>
              </span>{" "}
              with{" "}
              <span>
                <b>Me</b>
              </span>{" "}
              and
              <br />
              <span>
                <b>HANDYMAN SERVICES</b>
              </span>
              <br />
              are{" "}
              <span className="text-5xl">
                <b>FREE!</b>
              </span>
            </Subtitle>
            <div className="mt-10">
              <P center color="text-white">
                Why list with anyone else?
              </P>
            </div>
            <div className="mt-5 flex justify-center">
              <ButtonHeroe>GET STARTED HERE</ButtonHeroe>
            </div>
          </div>

          <div className="mt-10 h-full w-full min-h-[520px] lg:min-h-[720px] relative">
            <Image
              src="/media/joel-ryan.png"
              alt="ryan"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Heroe;
