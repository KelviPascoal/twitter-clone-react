import React from "react";

import * as S from "./styles";

export function LeftMenu() {
  return (
    <S.Container>
      <S.Topside>
        <S.Logo />

        <S.MenuButton>
          <S.HomeIcon alt="Página inicial" />

          <span>Página Inicial</span>
        </S.MenuButton>

        <S.MenuButton>
          <S.BellIcon alt="Notificação" />

          <span>Notificações</span>
        </S.MenuButton>

        <S.MenuButton>
          <S.EmailIcon alt="Mensagens" />

          <span>Mensagens</span>
        </S.MenuButton>

        <S.MenuButton>
          <S.FavoriteIcon alt="Favoritos" />

          <span>Favoritados</span>
        </S.MenuButton>

        <S.MenuButton className="active">
          <S.ProfileIcon alt="Perfil" />

          <span>Perfil</span>
        </S.MenuButton>

        <S.TweetarButton alt="Tweetar">
          <span>Tweetar</span>
        </S.TweetarButton>
      </S.Topside>

      <S.Botside>
        <S.Avatar />

        <S.ProfileData>
          <strong>Kelvi Pascoal</strong>
          <span>@KelviPascoal</span>
        </S.ProfileData>

        <S.ExitIcon alt="Sair" />
      </S.Botside>
    </S.Container>
  );
}
