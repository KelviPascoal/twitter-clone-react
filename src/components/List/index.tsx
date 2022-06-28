import React from "react";

import * as S from "./styles";

interface Props {
  title: string;
  elements: React.ReactNode[];
}

const List: React.FC<Props> = ({ title, elements }) => {
  return (
    <S.Container>
      <S.Item>
        <S.Title>{title}</S.Title>
      </S.Item>

      {elements.map((element, index) => (
        <S.Item key={index}>{element}</S.Item>
      ))}
    </S.Container>
  );
};

export default List;
