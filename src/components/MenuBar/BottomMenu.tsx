import * as S from "./styles";

export function BottomMenu() {
  return (
    <S.BottomMenu>
      <S.HomeIcon alt="Pagina inicial" className="active" />
      <S.SearchIcon alt="Buscar" />
      <S.BellIcon alt="Notificações" />
      <S.EmailIcon alt="Mensagens" />
    </S.BottomMenu>
  );
}
