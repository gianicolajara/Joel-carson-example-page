import Image from "next/image";
import { agentImagesList } from "../../config/agent.config";
import Flag from "../Flag";
import P from "../P";
import Subtitle from "../Subtitle";
import Wrapper from "../Wrapper";
import AgentList from "./AgentList";

const Agent = () => {
  return (
    <section>
      <Wrapper last>
        <div>
          <div className="mb-5">
            <Subtitle color="text-primary" center>
              <span className="text-5xl">Joel Carson</span>
            </Subtitle>
          </div>
          <div className="mb-5">
            <Flag>
              <P color="text-white">
                <span className="text-xl font-light">
                  Salt Lake City&apos;s #1 Agent
                </span>
              </P>
            </Flag>
          </div>
          <div className="relative w-full lg:hidden block mb-10 lg:mb-0">
            <Image
              src="/media/joel.png"
              layout="responsive"
              alt="joel"
              width={1024}
              height={1024}
            />
          </div>
          <div>
            <P>
              My service in the U.S. Navy prepared me to fulfill my lifelong
              dream of becoming one of Utah&apos;s top Realtors. Through service
              to my country I learned focus, discipline, respect and a profound
              work ethic. Today, I am an award-winning real estate professional
              ranked No. 1 in Utah by RealTrends Inc. and Newsweek Magazine.
            </P>
            <br />
            <P>
              I have lived in the Salt Lake Valley my entire life. As a real
              estate professional with more than 30 years experience, my
              expertise is unmatched in Utah. I use my knowledge and experience
              to provide second-to-none service for my clients. I am regularly
              nominated for local awards and in 2020, I was voted the Top Utah
              Real Estate Agent in Salt Lake City by residents of the Salt Lake
              Valley.
            </P>

            <AgentList />
            <P>
              Selling your home can be overwhelming so I take a strategic
              approach. My company is a well-oiled machine meticulously planned
              to work for you from our first meeting to closing. My strategy
              will make the entire process smooth and will have a low impact on
              you and your family. I am Covid-trained and conscious. I adhere to
              CDC recommended guidelines to keep you safe during the selling
              process.
            </P>
            <br />
            <Subtitle color="text-primary" center>
              Highest Standards
            </Subtitle>
            <br />
            <P center>
              You will work with me directly throughout the process. I will not
              pawn you off to another agent like a lot of large teams do. I
              pride myself on being available every step of the way. I do this
              by having a full-time professional staff that supports me behind
              the scenes. I approach home sales with a full service approach. I
              insist on a flawless presentation so I work with some of the best
              professionals in the business and pay for them to make sure
              you&apos;re happy with the final result.
            </P>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Agent;
