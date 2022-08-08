import ButtonHeroe from "../ButtonHeroe";
import Description from "../Description";
import P from "../P";
import Subtitle from "../Subtitle";
import Wrapper from "../Wrapper";
import InputContact from "./InputContact";

const Contact = () => {
  return (
    <section>
      <Wrapper last bg>
        <Subtitle color="text-primary">
          Fill out the form below or call{" "}
          <span className="font-bold">801.673.3333</span> to get started.
        </Subtitle>
        <P>
          Fill out the form below and I will provide you with a comprehensive
          market analysis (CMA) for your property and discuss with you what your
          property might sell for in today&apos;s market.
        </P>
        <div className="py-10 flex flex-col gap-5 ">
          <div className="grid grid-cols-12 h-auto gap-3">
            <div className="col-span-5">
              <Description>Name</Description>
            </div>
            <div className="col-span-7 flex flex-col gap-2">
              <InputContact placeholder="First Name" />
              <InputContact placeholder="Last Name" />
            </div>
            <div className="col-span-5">
              <Description>Email</Description>
            </div>
            <div className="col-span-7 flex flex-col gap-2">
              <InputContact />
            </div>
            <div className="col-span-5">
              <Description>Phone</Description>
            </div>
            <div className="col-span-7 flex flex-col gap-2">
              <InputContact />
            </div>
            <div className="col-span-5">
              <Description>Property Address</Description>
            </div>
            <div className="col-span-7 flex flex-col gap-2">
              <InputContact placeholder="Street Address" />
              <InputContact placeholder="City" />
              <InputContact placeholder="ZIP Code" />
            </div>
          </div>
          <div className="self-center">
            <ButtonHeroe>GET STARTED</ButtonHeroe>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Contact;
