import React from "react";

import * as S from "./styles";

export function LeftMenu() {
  return (
    <S.Container>
      <S.Topside>
        <S.Logo />

        <S.MenuButton>
          <S.HomeIcon />
          <span>Página Inicial</span>
        </S.MenuButton>

        <S.MenuButton>
          <S.BellIcon />
          <span>Notificações</span>
        </S.MenuButton>

        <S.MenuButton>
          <S.EmailIcon />
          <span>Mensagens</span>
        </S.MenuButton>

        <S.MenuButton>
          <S.FavoriteIcon />
          <span>Favoritados</span>
        </S.MenuButton>

        <S.MenuButton className="active">
          <S.ProfileIcon />
          <span>Perfil</span>
        </S.MenuButton>

        <S.TweetarButton>
          <span>Tweetar</span>
        </S.TweetarButton>
      </S.Topside>

      <S.Botside>
        <S.Avatar />

        <S.ProfileData>
          <strong>Kelvi Pascoal</strong>
          <span>@KelviPascoal</span>
        </S.ProfileData>

        <S.ExitIcon />
      </S.Botside>
    </S.Container>
  );
}
