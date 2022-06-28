import React from "react";

import { Feed } from "../Feed";

import * as S from "./styles";

export function ProfilePage() {
  return (
    <S.Container>
      <S.Banner>
        <S.Avatar />
      </S.Banner>

      <S.ProfileData>
        <S.EditButton outlined>Editar perfil</S.EditButton>

        <h1>Kelvi Pascoal</h1>
        <h2>@KelviPascoal</h2>

        <ul>
          <li>
            <S.LocationIcon />
            Espirito Santo, Brasil
          </li>
          <li>
            <S.CakeIcon />
            Nascido(a) em 06 de novembro de 1998
          </li>
        </ul>

        <S.Followage>
          <span>
            seguindo <strong>34</strong>
          </span>
          <span>
            <strong>0 </strong> seguidores
          </span>
        </S.Followage>
      </S.ProfileData>

      <Feed />
    </S.Container>
  );
}
