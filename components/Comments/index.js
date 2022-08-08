import Image from "next/image";
import Description from "../Description";
import Wrapper from "../Wrapper";
import { AiFillStar } from "react-icons/ai";
import P from "../P";
import ItemComment from "./ItemComment";

const commentsList = [
  {
    key: 1,
    avatar: "/media/avatar1.png",
    name: "Bully280",
    stars: 5,
    date: "Jun 24, 2022",
    comment:
      "Joel & his team are an amazing Team ! His Handyman/contractor (Ryan) whipped my house into shape in a week. And he even watched my dog while I was away ! The Ladies who staged my home did an awesome job ! Almost made me back out of selling!! Joel had my home sold in about 2 weeks from the time it was listed. I'd recommend Joel & his team to anyone who's looking to sell !!",
  },
  {
    key: 2,
    avatar: "/media/avatar2.png",
    name: "slrdra86",
    stars: 5,
    date: "Jun 8, 2022",
    comment: `Joel is AMAZING! We could not believe how wonder the whole process of selling our home went. Not only did Joel get our house sold within days but for a much higher price than we had ever thought possible. He was even able to get the appraisal higher! Joel has a whole team of people who take care of everything and I mean EVERYTHING you can think of and it is all just part of his services. Ryan, Joel's handyman worked magic in matching and touching up paint in a few places that needed it and was at the house to start work immediately even though he is a very busy guy. Nicole, Joel's coordinator was fantastic to work with also as was everyone else we had dealings with. Everyone on Joel's team is immediately responsive too. The house was prepared for market and staged beautifully, all thanks to Joel and his team. We had already moved out of state and Joel handled everything there in Utah for us without us having to even worry about it. We are still so amazed by it all. Joel went over and above anything we ever imagined and we are so happy that we chose his company to sell our home.`,
  },
  {
    key: 3,
    avatar: "/media/avatar3.svg",
    name: "user9437387",
    stars: 5,
    date: "May 30, 2022",
    comment: `Joel and his team were easy to work with and very responsive and professional. We sold our existing home and purchased a new home. Joel helped us get the best price we could for our existing home and had the resources and know how to help us manage both transactions. A high performer, with a lot of local experience and contacts in the Salt Lake City area. Highly recommended.`,
  },
  {
    key: 4,
    avatar: "/media/avatar4.svg",
    name: "Dave Giles",
    stars: 5,
    date: "May 20, 2022",
    comment: `Joel was fantastic! Professional, knowledgeable, got our stalled home sold in a weekend for considerably more than asking. Very responsive, highly recommended!`,
  },
  {
    key: 5,
    avatar: "/media/avatar5.svg",
    name: "melissasites08",
    stars: 5,
    date: "May 13, 2022",
    comment: `We met Joel back in 2014. He helped us buy our first house. We were immediately impressed by his knowledge and helpfulness. That is why we knew we had to reach back out to him again with help selling our home. He has so much experience and expertise. Whenever we had questions he or his coordinator were quick to respond and help us with our questions. Joel has a whole team that truly tries their very best to help you sell. His handyman is incredible and does great work. His stagers really are talented at what they do. His photographer really captured the beauty of our home. Joel's team does go above and beyond. All did their very best to make our home shine bright. We are from back East and don't have the vast knowledge or contacts that Joel has. So with Joel you can't go wrong, he connects you to the best to get the job done. He also helped us buy our next home!! He is amazing!! Thanks Joel and team! Forever grateful!!`,
  },
  {
    key: 6,
    avatar: "/media/avatar6.svg",
    name: "zuser20180726153504097",
    stars: 5,
    date: "Apr 26, 2022",
    comment: `We recently found Joel when we were looking to sell our home.
    Once we saw his social media and fast response to our inquiry we knew we had to meet him.
    Joel and his team are the real deal, we had no worries because they took care of everything. From start to finish, choosing Joel was our best bet.

    Joel and his team need to have their own TV show cause y’all are impressive.`,
  },
];

const Comments = () => {
  return (
    <section>
      <Wrapper last>
        <div className="flex flex-col gap-10">
          {commentsList.map((comment) => (
            <ItemComment
              key={comment.key}
              avatar={comment.avatar}
              comment={comment.comment}
              date={comment.date}
              name={comment.name}
              stars={comment.stars}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Comments;
