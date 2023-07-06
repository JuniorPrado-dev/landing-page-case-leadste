import Agencias from '@/componentes/agencias';
import ChatBot from '@/componentes/chatbot';
import GeracaoLeads from '@/componentes/geracao-leads';
import Header from '@/componentes/header';
import Marketing from '@/componentes/marketing';
import MarketingDigital from '@/componentes/marketing-digital';
import Menu from '@/componentes/menu';
import MidiaPage from '@/componentes/midia-page';
import Head from 'next/head';
import { useState } from 'react';

export default function Home(){
	//inicia na seção de videos
	const [section,setSection]=useState(4);
	
	let sectionContext;
	switch(section){
	case 1:
		sectionContext=<Agencias/>;
		break;
	case 2:
		sectionContext=<ChatBot/>;
		break;
	case 3:
		sectionContext=<MarketingDigital/>;
		break;
	case 4:
		sectionContext=<GeracaoLeads/>;
		break;
	case 5:
		sectionContext=<MidiaPage/>;
		break;
	}

	return <>
		<Head>
			<title>LandingPage</title>
			<meta name="description" content="Generated by Jr Prado dev" />
			<meta name='charset' content='UTF-8'/>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/assets/images/asset-header.png" />
		</Head>
		<Header/>	
		<Marketing/>
		<Menu section={section} setSection={setSection} />
		{sectionContext}
	</>;
}