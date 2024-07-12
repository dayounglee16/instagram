import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Comment = ({ data }) => {
  const [like, setLike] = useState(false);

  const onClickUser = () => {
    setLike(like === false ? true : false);
  };

  return (
    <Text>
      <CommentText>
        <b>{data.userId}</b>
        <span>{data.comment}</span>
      </CommentText>
      <div>
        <FontAwesomeIcon
          className="buttons"
          icon={like === false ? faHeart : faSolidHeart}
          size="xl"
          onClick={onClickUser}
        />
      </div>
    </Text>
  );
};

export default Comment;

const Text = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

const CommentText = styled.div`
  display: flex;
  gap: 5px;
`;
