import React from "react";
import { ProfilePage } from "../ProfilePage";

import * as S from "./styles";

const Main: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <button>
          <S.BackIcon />
        </button>

        <S.ProfileInfo>
          <strong>Kelvi Pascoal</strong>
          <span>0 Tweets</span>
        </S.ProfileInfo>
      </S.Header>

      <ProfilePage />

      <S.BottomMenu>
        <S.HomeIcon className="active" />
        <S.SearchIcon />
        <S.BellIcon />
        <S.EmailIcon />
      </S.BottomMenu>
    </S.Container>
  );
};

export default Main;
