import React from "react";
import StickyBox from "react-sticky-box";

import List from "../List";
import { FollowSuggestion } from "../FollowSuggestion";
import { News } from "../News";

import * as S from "./styles";

export function SideBar() {
  return (
    <S.Container>
      <S.SearchWrapper>
        <S.SearchInput placeholder="Buscar no Twitter" />
        <S.SearchIcon />
      </S.SearchWrapper>

      <StickyBox>
        <S.Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion
                key="1"
                name="Michael Scott"
                nickname="@MichaelScott"
              />,

              <FollowSuggestion
                key="2"
                name="Dwight Schrute"
                nickname="@DwightSchrute"
              />,
              <FollowSuggestion
                key="3"
                name="Jim Halpert"
                nickname="@JimHalpert"
              />,
            ]}
          />
          <List
            title="O que está acontecendo"
            elements={[
              <News key="1" />,
              <News key="2" />,
              <News key="3" />,
              <News key="4" />,
              <News key="5" />,
              <News key="6" />,
              <News key="7" />,
              <News key="8" />,
              <News key="9" />,
            ]}
          />
        </S.Body>
      </StickyBox>
    </S.Container>
  );
}
