import React from "react";

import * as S from "./styles";

export function LeftMenu() {
  return (
    <S.Container>
      <S.Topside>
        <S.Logo />

        <S.MenuButton>
          <S.HomeIcon aria-label="Página inicial" />

          <span>Página Inicial</span>
        </S.MenuButton>

        <S.MenuButton>
          <S.BellIcon aria-label="Notificação" />

          <span>Notificações</span>
        </S.MenuButton>

        <S.MenuButton>
          <S.EmailIcon aria-label="Mensagens" />

          <span>Mensagens</span>
        </S.MenuButton>

        <S.MenuButton>
          <S.FavoriteIcon aria-label="Favoritos" />

          <span>Favoritados</span>
        </S.MenuButton>

        <S.MenuButton className="active">
          <S.ProfileIcon aria-label="Perfil" />

          <span>Perfil</span>
        </S.MenuButton>

        <S.TweetarButton aria-label="Tweetar">
          <span>Tweetar</span>
        </S.TweetarButton>
      </S.Topside>

      <S.Botside>
        <S.Avatar />

        <S.ProfileData>
          <strong>Kelvi Pascoal</strong>
          <span>@KelviPascoal</span>
        </S.ProfileData>

        <S.ExitIcon aria-label="Sair" />
      </S.Botside>
    </S.Container>
  );
}
