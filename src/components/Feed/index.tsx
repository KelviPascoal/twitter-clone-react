import React from "react";

import { Tweet } from "../Tweet";

import * as S from "./styles";

export function Feed() {
  return (
    <S.Container>
      <S.Tab>Tweets</S.Tab>

      <S.Tweets>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </S.Tweets>
    </S.Container>
  );
}
