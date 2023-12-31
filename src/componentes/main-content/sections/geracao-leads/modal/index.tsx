import { useEffect, useState } from 'react';
import * as S from './style';
import * as F from '@/fonts';
import { TPropsModal } from '@/types';
export default function Modal({video,setVideoModal}:TPropsModal):JSX.Element{
	//posicionammento do scroll
	const [scrollPositionY, setScrollPositionY] = useState(0);
	useEffect(() => {
		const handleScroll = () => {
			const position = window.scrollY ;
			setScrollPositionY(position);
		};

		// Adicionar um event listener para capturar a posição do scroll quando houver rolagem
		window.addEventListener('scroll', handleScroll);

		// Remover o event listener quando o componente for desmontado
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
    
	return (
		<S.ModalVStyled className={F.plusVariable.variable} video={video} scrollY={scrollPositionY} onClick={()=>{setVideoModal(undefined);}}>
			<S.CardVideoStyled>
				<S.TitleModalStyled>
					<span>Webnar: </span>{video?.title}
				</S.TitleModalStyled>
				<S.VideoStyled src={video&&`${video.url}?autoplay=1`}/>
				<S.TitleInfoStyled>
					Descrição
				</S.TitleInfoStyled> 
				<S.TextInfoStyled>
					{video?.description}
				</S.TextInfoStyled>   
				<S.TitleInfoStyled>
					Download
				</S.TitleInfoStyled>
				<S.ImageDownloadsStyled src='/assets/images/download-opt.png'/> 
			</S.CardVideoStyled>
		</S.ModalVStyled>
	);
}