import React, { ReactNode } from "react";
import styled from "styled-components";

interface QuestionChoiceList {
  choiceScore: number;
  choiceDirection: string;
  choiceNo: number;
}

interface Props {
  title?: string;
  option: QuestionChoiceList[];
}

const BorderBox = ({ title, option }: Props) => {
  return (
    <Container>
      <Title>
        <TitleFont>{title}</TitleFont>
      </Title>
      {option.map((value) => (
        <Option>
          <OptionFont>{value.choiceDirection}</OptionFont>
        </Option>
      ))}
    </Container>
  );
};

export default BorderBox;

const Container = styled.div`
  border: 1px solid gray;
  margin-top: 20px;
`;

const Title = styled.div`
  background-color: #bbd6e3;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 10px;
`;
const TitleFont = styled.text`
  font-size: 13px;
`;


const Option = styled.div`
  flex-direction: row;
  background-color: #fff;
  padding-left: 10px;
  padding-top: 15px;
  padding-bottom: 15px;
  justify-content: center;
  align-items: center;
  /* border-bottom-width: 1px;
  border-bottom-color: gray; */
  border: 1px solid gray;
`;
const OptionFont = styled.div`
  font-size: 13px;
`;
