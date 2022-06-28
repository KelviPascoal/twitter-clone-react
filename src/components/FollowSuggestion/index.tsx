import React from "react";

import * as S from "./styles";

interface FollowSuggestionProps {
  name: string;
  nickname: string;
}

export function FollowSuggestion({ name, nickname }: FollowSuggestionProps) {
  return (
    <S.Container>
      <div>
        <S.Avatar />

        <S.Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </S.Info>
      </div>

      <S.FollowButton outlined>Seguir</S.FollowButton>
    </S.Container>
  );
}
