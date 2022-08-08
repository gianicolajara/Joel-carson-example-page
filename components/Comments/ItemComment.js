import Image from "next/image";
import Description from "../Description";
import P from "../P";
import Starts from "./Starts";
import PropTypes from "prop-types";

const ItemComment = ({
  avatar = "",
  name = "",
  stars = 5,
  date = "",
  comment = "",
}) => {
  return (
    <article className="w-full flex flex-col">
      <div className="flex justify-between gap-3">
        <div className="w-[50px] h-[50px]">
          <Image
            src={avatar}
            alt="avatar"
            layout="responsive"
            width={250}
            height={250}
          />
        </div>
        <div className="flex-1">
          <Description color="text-black">{name}</Description>
          <div className="flex items-center">
            <Starts stars={stars} />
            <P>
              <time>{date}</time>
            </P>
          </div>
        </div>
        <div className="w-[25px] h-[25px]">
          <Image
            src="/media/comment-icon.png"
            alt="comment"
            width={150}
            height={150}
          />
        </div>
      </div>
      <div className="pl-[62px]">
        <P color="text-gray-700" leading={false}>
          <span className="text-base">{comment}</span>
        </P>
      </div>
    </article>
  );
};

ItemComment.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  stars: PropTypes.number,
  date: PropTypes.string,
  comment: PropTypes.string,
};

export default ItemComment;
