import Head from 'next/head';
import Header from 'components/Organisms/Header';
import Hero from 'components/Organisms/Hero';
export default function Home() {
	return (
		<>
			<Head>
				<title>Surabaya Dev</title>
				<meta
					name='description'
					content='SurabayaDev merupakan komunitas IT yang berdomisili di Kota Surabaya yang memiliki agenda kegiatan bertema edukasi teknologi saling bersinergi berkolaborasi.'
				/>
				<link rel='icon' href='/favicon.ico' />

				<meta
					property='og:url'
					content='https://travel-agent-lovat.vercel.app/'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:title' content='SurabayaDev' />
				<meta
					property='og:description'
					content='SurabayaDev merupakan komunitas IT yang berdomisili di Kota Surabaya dan sebagainya'
				/>
				<meta
					property='og:image'
					content='https://travel-agent-lovat.vercel.app/aplikasi-travel-online.jpg'
				/>
			</Head>
			<Header />
			<Hero />
		</>
	);
}
