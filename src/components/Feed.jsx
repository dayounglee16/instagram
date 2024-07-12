import pastaImg from "../images/pasta.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profileImg from "../images/profile.jpg";
import {
  faComment,
  faPaperPlane,
  faBookmark,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as faSolidBookmark } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useState } from "react";

const Feed = () => {
  const [heart, setHeart] = useState(faHeart);
  const [bookmark, setBookmark] = useState(faBookmark);

  const onClickHeart = () => {
    //좋아요 버튼
    setHeart(heart === faHeart ? faSolidHeart : faHeart);
  };

  const onclickPaperPlane = () => {
    //공유 버튼
    alert("공유하시겠습니까 ?");
  };

  const onClickBoomark = () => {
    //북마크 버튼
    setBookmark(bookmark === faBookmark ? faSolidBookmark : faBookmark);
  };

  return (
    <div>
      <img src={pastaImg} alt="파스타 배너" style={{ backgroundSize: "50%" }} />
      <IconBox>
        <IconBoxLeft>
          <IconBtn>
            <FontAwesomeIcon
              className="buttons"
              icon={heart}
              size="xl"
              onClick={onClickHeart}
            />
          </IconBtn>
          <IconBtn>
            <FontAwesomeIcon className="buttons" icon={faComment} size="xl" />
          </IconBtn>
          <IconBtn>
            <FontAwesomeIcon
              className="buttons"
              icon={faPaperPlane}
              size="xl"
              onClick={onclickPaperPlane}
            />
          </IconBtn>
        </IconBoxLeft>
        <IconBoxRight>
          <IconBtn>
            <FontAwesomeIcon
              className="buttons"
              icon={bookmark}
              size="xl"
              onClick={onClickBoomark}
            />
          </IconBtn>
        </IconBoxRight>
      </IconBox>
      <Heart>
        <HeartImg src={profileImg} alt="사진" width="3%" />
        <span>
          <b>hasang0.0</b>님 외 <b>3,234</b>명이 좋아합니다
        </span>
      </Heart>
    </div>
  );
};

export default Feed;

const IconBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin: 5px 10px;
`;

const IconBoxLeft = styled.div`
  display: flex;
  gap: 10px;
  margin: 5px;
`;

const IconBoxRight = styled.div`
  margin: 5px;
`;

const IconBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

const Heart = styled.p`
  display: flex;
  margin: 5px 10px;
  cursor: pointer;
`;
const HeartImg = styled.img`
  margin-right: 5px;
`;
