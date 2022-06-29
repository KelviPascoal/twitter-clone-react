import Image, { ImageProps } from "next/image";
import * as S from "./styles";

type AvatarProps = {
  src: string;
};

export function Avatar({ src }: AvatarProps) {
  return (
    <S.Wrapper>
      <Image src={src} alt="Foto de perfil" height={150} width={150} />
    </S.Wrapper>
  );
}
