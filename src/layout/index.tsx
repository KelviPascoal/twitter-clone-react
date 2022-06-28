import { Main } from "../components/Main";
import { MenuBar } from "../components/MenuBar";
import { SideBar } from "../components/SideBar";
import * as S from "./styles";

export function Layout() {
  return (
    <S.Container>
      <S.Wrapper>
        <MenuBar />
        <Main />
        <SideBar />
      </S.Wrapper>
    </S.Container>
  );
}
