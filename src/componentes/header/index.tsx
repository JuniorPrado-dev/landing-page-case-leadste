import * as S from './style';
export default function Header(): JSX.Element {
	return (
		<S.HeaderStyled >
			<S.LogoStyled >
				<S.LogoSymbolStyled alt={'logo'} src={'/assets/images/logo-1.svg'} />
				<S.LogoTextStyled alt={'logo'} src={'/assets/images/logo-2.svg'} />
			</S.LogoStyled>
		</S.HeaderStyled>
	);
}
