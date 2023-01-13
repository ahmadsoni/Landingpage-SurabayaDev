import Head from 'next/head';
import Header from 'components/Organisms/Header';
import Hero from 'components/Organisms/Hero';
import Sponsor from 'components/Organisms/Sponsor';
import VisiMisi from 'components/Organisms/VisiMisi';
import Acara from 'components/Organisms/Acara';
import Blog from 'components/Organisms/Blog';
import Footer from 'components/Organisms/Footer';

export default function Home() {
	return (
		<>
			<Head>
				<title>Surabaya Dev</title>
				<meta name='title' content='Surabaya Dev'/>
				<meta name='description' content='SurabayaDev merupakan komunitas IT yang berdomisili di Kota Surabaya yang memiliki agenda kegiatan bertema edukasi teknologi saling bersinergi berkolaborasi.' />
				<link rel='icon' href='/favicon.ico' />

				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://surabayadev.vercel.app/' />
				<meta property='og:title' content='Surabaya Dev' />
				<meta property='og:description' content='SurabayaDev merupakan komunitas IT yang berdomisili di Kota Surabaya yang memiliki agenda kegiatan bertema edukasi teknologi saling bersinergi berkolaborasi.' />
				<meta property='og:image' content='https://surabayadev.vercel.app/surabayadev.png' />
				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content='https://surabayadev.vercel.app/' />
				<meta property='twitter:title' content='Surabaya Dev' />
				<meta property='twitter:description' content='SurabayaDev merupakan komunitas IT yang berdomisili di Kota Surabaya yang memiliki agenda kegiatan bertema edukasi teknologi saling bersinergi berkolaborasi.' />
				<meta property='twitter:image' content='https://surabayadev.vercel.app/surabayadev.png'></meta>
			</Head>
			<Header />
			<Hero />
			<Sponsor />
			<VisiMisi />
			<Acara />
			<Blog />
			<Footer />
		</>
	);
}
