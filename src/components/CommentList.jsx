import data from "../data";
import styled from "styled-components";
import { useState, useRef } from "react";
import Comment from "./Comment";

const CommentList = () => {
  const [idData, setIdData] = useState(data);
  const [commentValue, setCommenValue] = useState("");
  const idRef = useRef(5);

  //댓글기능
  const onCreate = (comment) => {
    const newComment = [
      {
        id: idRef.current++,
        userId: "nice_man",
        comment: comment,
        click: !true,
      },
    ];
    setIdData([...idData, ...newComment]);
  };

  const onChangeComment = (e) => {
    setCommenValue(e.target.value);
  };

  const onsubmit = () => {
    setCommenValue("");
    onCreate(commentValue);
  };

  const onKeyDownComment = (e) => {
    if (e.key === "Enter") {
      onsubmit();
    }
  };

  return (
    <Container>
      <SubHeading>
        <b>nice_man</b> 냉면 돈까스 삼겹살 참치김밥 버거킹 회전초밥 불닭볶음면
        막창 대창 양꼬치 김치볶음밥 잡채밥 탕수육 짜장
        <TxtGray>...더보기</TxtGray>
      </SubHeading>
      {idData.map((data) => (
        <Comment data={data} key={data.id} />
      ))}
      <TxtDarkGray>42분 전</TxtDarkGray>
      <CommentBox>
        <CommentInput
          type="text"
          placeholder="댓글달기..."
          value={commentValue}
          onChange={onChangeComment}
          onKeyDown={onKeyDownComment}
        />
        <PostBtn onClick={onsubmit}>게시</PostBtn>
      </CommentBox>
    </Container>
  );
};

export default CommentList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  gap: 5px;
`;

const SubHeading = styled.div`
  margin: 5px 0;
`;
const TxtGray = styled.span`
  color: #999;
`;

const TxtDarkGray = styled.span`
  color: #666;
  font-weight: 500;
  font-size: 14px;
`;

const CommentBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin: 10px 0;
`;

const CommentInput = styled.input`
  display: flex;
  flex: 1;
  border: 1px solid #ccc;
  outline-color: #666;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const PostBtn = styled.button`
  border: none;
  background: #0866ff;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;
