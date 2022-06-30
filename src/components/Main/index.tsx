import React from "react";
import { ProfilePage } from "../../templates/ProfilePage";

import * as S from "./styles";

export function Main() {
  return (
    <S.Container>
      <S.Header>
        <button>
          <S.BackIcon aria-label="Voltar" />
        </button>

        <S.ProfileInfo>
          <strong>Kelvi Pascoal</strong>
          <span>0 Tweets</span>
        </S.ProfileInfo>
      </S.Header>

      <ProfilePage />
    </S.Container>
  );
}
