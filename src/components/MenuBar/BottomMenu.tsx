import * as S from "./styles";

export function BottomMenu() {
  return (
    <S.BottomMenu>
      <S.HomeIcon className="active" />
      <S.SearchIcon />
      <S.BellIcon />
      <S.EmailIcon />
    </S.BottomMenu>
  );
}
