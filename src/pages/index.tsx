import Head from 'next/head';
import Header from 'components/Organisms/Header';
import Hero from 'components/Organisms/Hero';
import Sponsor from 'components/Organisms/Sponsor';
import VisiMisi from 'components/Organisms/VisiMisi';
import Acara from 'components/Organisms/Acara';
import Blog from 'components/Organisms/Blog';
import Footer from 'components/Organisms/Footer';
import Image from 'next/legacy/image';
import DecoreIntersec from 'images/decore-intersect.svg';
import DecoreTextUnderline from 'images/text-decore-hero.svg';
import DecorePlus1 from 'images/decore-plus-style-1.svg';
import DecoreSwirl from 'images/decore-swirel-style-1.svg';
import Date from 'images/date.svg';
import Time from 'images/time.svg';
import Map from 'images/map.svg';
import Link from 'next/link';
import Instagram from 'images/instagram.svg';
import Facebook from 'images/facebook.svg';
import Twitter from 'images/twitter.svg';
import Telegram from 'images/telegram.svg';
import LogoFooter from 'images/logo-footer.svg';
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
			<section className='relative mb-28'>
				<span className='absolute w-5/12 h-screen right-0 top-0 bottom-0 '>
					<DecoreIntersec className='fill-accent-4' />
				</span>
				<div className='w-96 h-96 bg-accent-3/50 rounded-full blur-3xl absolute -left-80 -top-10'></div>
				<div className='max-w-7xl mx-auto px-4'>
					<div className='flex'>
						{/* sebelah kiri hero */}
						<div className='w-full lg:w-6/12 pt-60'>
							<h2 className='w-2/3 lg:w-full text-gray-900 font-serif text-3xl lg:text-[80px] leading-tight lg:leading-[84px] tracking-tighter mb-8'>
								<span className='relative'>
                Komunitas IT
									<span className='absolute left-0 top-full lg:-mt-8 -ml-4 -z-10 transform -translate-y-1 lg:translate-y-4'>
										<DecoreTextUnderline className='w-[200px] h-1 lg:w-[730px]  lg:h-4 fill-accent-4' />
									</span>
									{''}
								</span>
								{''}Arek Suroboyo {''}
							Se-Indonesia
							</h2>
							<p className='text-gray-500 max-w-lg text-sm lg:text-base leading-6 lg:leading-8 mb-8'>
                SurabayaDev merupakan komunitas IT yang berdomisili di Kota Surabaya yang memiliki agenda kegiatan bertema edukasi teknologi saling bersinergi berkolaborasi.
							</p>
							<div className='flex'>
								<Link
									href='#section-category'
									className='mr-11 bg-accent-1 shadow-accent-1/10 shadow-[0_20px_35px] px-6 py-4 text-white rounded-xl'
								>
                  Find out more
								</Link>
							</div>
						</div>
						{/* sebelah kanan hero */}
						<div className='hidden lg:block w-[783px] h-[764px] pt-24 relative'>
							<div className='relative z-20 transform translate-x-20 translate-y-32'>
								<Image
									priority
									layout='responsive'
									width={750}
									height={500}
									src='/png/hero-surabayadev.png'
									alt='plane'
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='mb-32 scroll-mt-20' id='beranda'>
				<div className='max-w-7xl mx-auto relative px-4'>
					<div className='absolute w-36 h-36 lg:-right-10 -top-10'>
						<DecorePlus1 className='decore-plus-style-1' />
					</div>
					<div className='text-center flex flex-col mb-16'>
						<h3 className='uppercase text-lg mb-2 text-gray-500'>Beranda</h3>
						<h3 className='font-serif text-4xl lg:text-5xl text-gray-900 leading-tight lg:leading-snug'>
              Sponsor
						</h3>
					</div>
					<div className='flex flex-wrap items-center justify-center gap-10'>
						<div className='w-full lg:w-1/5 px-4'>
							<div className='h-28 px-4 py-4 relative grayscale hover:grayscale-0 bg-white transform hover:-translate-y-1 hover:shadow-great rounded-2xl transition-all duration-300'>
								<Image
									layout='fill'
									className='object-contain lg:object-none'
									src='/png/sponsor-1.png'
									alt='sponsor-1'
								/>
							</div>
						</div>
						<div className='w-full lg:w-1/5 px-4'>
							<div className='h-28 px-4 py-4 relative grayscale hover:grayscale-0 bg-white transform hover:-translate-y-1 hover:shadow-great rounded-2xl transition-all duration-300'>
								<Image
									layout='fill'
									className='object-contain lg:object-none'
									src='/png/sponsor-2.png'
									alt='sponsor-2'
								/>
							</div>
						</div>
						<div className='w-full lg:w-1/5 px-4'>
							<div className='h-28 px-4 py-4 relative grayscale hover:grayscale-0 bg-white transform hover:-translate-y-1 hover:shadow-great rounded-2xl transition-all duration-300'>
								<Image
									layout='fill'
									className='object-contain lg:object-none'
									src='/png/sponsor-3.png'
									alt='sponsor-3'
								/>
							</div>
						</div>
						<div className='w-full lg:w-1/5 px-4'>
							<div className='h-28 px-4 py-4 relative grayscale hover:grayscale-0 bg-white transform hover:-translate-y-1 hover:shadow-great rounded-2xl transition-all duration-300'>
								<Image
									layout='fill'
									className='object-contain lg:object-none'
									src='/png/sponsor-4.png'
									alt='sponsor-4'
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='mb-28 scroll-mt-20' id='tentangkami'>
				<div className='max-w-7xl mx-auto relative px-4'>
					<div className='flex flex-wrap'>
						<div className='w-full lg:w-6/12 px-0 lg:pl-8 pr-0 lg:pr-20'>
							<div className='flex flex-col mb-16'>
								<h3 className='uppercase text-lg mb-2 text-gray-500'>
                  Tentang Kami
								</h3>
								<h3 className='font-serif text-4xl lg:text-5xl text-gray-900 leading-tight lg:leading-snug mb-10'>
                  Visi Misi
									<p className='break-words'>
                  Surabaya DEV
									</p>
								</h3>
								<ul className='flex flex-col gap-y-10 pr-0 lg:pr-10'>
									<li className='flex items-center'>
										<span className='bg-accent-1 rounded-xl flex flex-none text-white justify-center items-center w-12 h-12'>
											<span className='material-icons'>settings_accessibility</span>
										</span>
										<div className='flex flex-col ml-4 leading-5'>
											<h6 className='font-bold mb-1 text-gray-500'>
                        Wadah Belajar
											</h6>
											<p className='font-[400] text-gray-500'>
                        Menjadi wadah belajar pegiat IT untuk
bisa terus update mengenai
tech industry saat ini.
											</p>
										</div>
									</li>
									<li className='flex items-center'>
										<span className='bg-accent-2 rounded-xl flex flex-none text-white justify-center items-center w-12 h-12'>
											<span className='material-icons'>lan</span>
										</span>
										<div className='flex flex-col ml-4 leading-5'>
											<h6 className='font-bold mb-1 text-gray-500'>
                        Koneksi
											</h6>
											<p className='font-[400] text-gray-500'>
                       Memperluas relasi melalui komunitas
untuk menjalin kebermanfaatan.
											</p>
										</div>
									</li>
									<li className='flex items-center'>
										<span className='bg-accent-6 rounded-xl flex flex-none text-white justify-center items-center w-12 h-12'>
											<span className='material-icons'>co_present</span>
										</span>
										<div className='flex flex-col ml-4 leading-5'>
											<h6 className='font-bold mb-1 text-gray-500'>
                        Berbagi Ilmu
											</h6>
											<p className='font-[400] text-gray-500'>
                       Komunitas adalah wadah yang tepat untuk
bisa saling berbagi ilmu, pengalaman maupun
wawasantentang update teknologi.
											</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className='w-full lg:w-5/12 flex items-center justify-center'>
							<div className='w-[370px] relative'>
								<div className='absolute rounded-full blur-2xl h-80 w-80 -top-10 -right-2 lg:-right-10 flex items-center justify-center overflow-hidden'>
									<div className='w-60 h-60 rounded-full blur-2xl z-10 bg-accent-4/40'></div>
								</div>
								<div className='mx-4 rounded-3xl h-40 top-5 -right-0 lg:-right-16 relative overflow-hidden mb-6'>
									<Image
										layout='fill'
										className='object-cover'
										width={100}
										height={100}
										src='/png/logo-surabayadev.png'
										alt=''
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='mb-28 scroll-mt-20' id='acara'>
				<div className='max-w-7xl mx-auto relative px-4'>
					<div className='text-center flex flex-col mb-16'>
						<h3 className='uppercase text-lg mb-2 text-gray-500'>
              Event
						</h3>
						<h3 className='font-serif text-4xl lg:text-5xl text-gray-900 leading-tight lg:leading-snug'>
              Kegiatan Terbaru
						</h3>
					</div>
					<div className='flex flex-wrap relative pr-0 lg:pr-10'>
						<div className='absolute w-[96px] h-[252px] bottom-10 right-0'>
							<DecoreSwirl className='stroke-gray-500' />
						</div>
						<div className='mb-10 lg:mb-0 w-full lg:w-4/12 px-6 relative z-20'>
							<div className='rounded-3xl pb-10 shadow-great bg-white flex flex-col'>
								<div className='rounded-tr-3xl rounded-tl-3xl overflow-hidden bg-white relative h-96'>
									<Image
										layout='fill'
										className='object-cover'
										src='/jpg/acara-1.jpg'
										alt=''
									/>
								</div>
								<div className='rounded-tr-3xl rounded-tl-3xl text-gray-500'>
									<div className='pt-7 px-4 flex justify-between'>
										<h6 className='text-lg w-48'>Mengenal Typescript dan Next  JS</h6>
										<h6 className='text-lg text-green-500'>Buka</h6>
									</div>
									<div className='pt-4 px-5 flex items-center'>
										<span className='mr-3 mb-1'><Date /></span>
										<span className=''>27 Januari 2023</span>
									</div>
									<div className='pt-4 px-5 flex items-center'>
										<span className='mr-3 mb-1'><Time /></span>
										<span className=''>13.00 - 15.00 PM</span>
									</div>
									<div className='pt-4 px-5 flex items-center'>
										<span className='mr-3 mb-1'><Map /></span>
										<Link href='/' className='text-green-500 underline underline-offset-1'>
                                        Link Meeting
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className='mb-10 lg:mb-0 w-full lg:w-4/12 px-6 relative z-20'>
							<div className='rounded-3xl pb-10 shadow-great bg-white flex flex-col'>
								<div className='rounded-tr-3xl rounded-tl-3xl overflow-hidden bg-white relative h-96'>
									<Image
										layout='fill'
										className='object-cover'
										src='/jpg/acara-2.jpg'
										alt=''
									/>
								</div>
								<div className='rounded-tr-3xl rounded-tl-3xl text-gray-500'>
									<div className='pt-7 px-5 flex justify-between'>
										<h6 className='text-lg w-48'>Mengenal Desain Think Lebih Dekat</h6>
										<h6 className='text-lg text-green-500'>Buka</h6>
									</div>
									<div className='pt-4 px-5 flex items-center'>
										<span className='mr-3 mb-1'><Date /></span>
										<span className=''>24 Januari 2023</span>
									</div>
									<div className='pt-4 px-5 flex items-center'>
										<span className='mr-3 mb-1'><Time /></span>
										<span className=''>13.00 - 15.00 PM</span>
									</div>
									<div className='pt-4 px-5 flex items-center'>
										<span className='mr-3 mb-1'><Map /></span>
										<Link href='/' className='text-green-500 underline underline-offset-1'>
                                        Link Meeting
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className='mb-10 lg:mb-0 w-full lg:w-4/12 px-6 relative z-20'>
							<div className='rounded-3xl pb-10 shadow-great bg-white flex flex-col'>
								<div className='rounded-tr-3xl rounded-tl-3xl overflow-hidden bg-white relative h-96'>
									<Image
										layout='fill'
										className='object-cover'
										src='/jpg/acara-3.jpg'
										alt=''
									/>
								</div>
								<div className='rounded-tr-3xl rounded-tl-3xl text-gray-500'>
									<div className='pt-7 px-5 flex justify-between'>
										<h6 className='text-lg w-52'>Mengenal Lebih Dekat Mengenai React JS</h6>
										<h6 className='text-lg text-red-500'>Tutup</h6>
									</div>
									<div className='pt-4 px-5 flex items-center'>
										<span className='mr-3 mb-1'><Date /></span>
										<span className=''>20 Januari 2023</span>
									</div>
									<div className='pt-4 px-5 flex items-center'>
										<span className='mr-3 mb-1'><Time /></span>
										<span className=''>14.00 - 15.00 PM</span>
									</div>
									<div className='pt-4 px-5 flex items-center'>
										<span className='mr-3 mb-1'><Map /></span>
										<Link href='/' className='text-green-500 underline underline-offset-1'>
                                        Link Meeting
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='mb-28 scroll-mt-20' id='blog'>
				<div className='max-w-7xl mx-auto relative px-4'>
					<div className='text-center flex flex-col mb-16'>
						<h3 className='uppercase text-lg mb-2 text-gray-500'>
              Event
						</h3>
						<h3 className='font-serif text-4xl lg:text-5xl text-gray-900 leading-tight lg:leading-snug'>
              Kegiatan Terbaru
						</h3>
					</div>
					<div className='flex flex-wrap relative pr-0 lg:pr-10'>
						<div className='absolute w-[96px] h-[252px] bottom-10 right-0'>
							<DecoreSwirl className='stroke-gray-500' />
						</div>
						<div className='mb-10 lg:mb-0 w-full lg:w-4/12 px-6 relative z-20'>
							<Link href={'/'}>
								<div className='rounded-3xl pb-10 shadow-great bg-white flex flex-col'>
									<div className='rounded-tr-3xl rounded-tl-3xl overflow-hidden bg-white relative h-96'>
										<Image
											layout='fill'
											className='object-cover'
											src='/jpg/blog-1.jpg'
											alt=''
										/>
									</div>
									<div className='rounded-tr-3xl rounded-tl-3xl text-gray-500'>
										<div className='pt-7 px-4 flex justify-between'>
											<h6 className='text-lg w-full'>10 Alat Generator CSS Berguna Yang Harus Anda Gunakan di Tahun 2023</h6>
										</div>
									</div>
								</div>
							</Link>
						</div>
						<div className='mb-10 lg:mb-0 w-full lg:w-4/12 px-6 relative z-20'>
							<Link href={'/'}>
								<div className='rounded-3xl pb-10 shadow-great bg-white flex flex-col'>
									<div className='rounded-tr-3xl rounded-tl-3xl overflow-hidden bg-white relative h-96'>
										<Image
											layout='fill'
											className='object-cover'
											src='/jpg/blog-2.jpg'
											alt=''
										/>
									</div>
									<div className='rounded-tr-3xl rounded-tl-3xl text-gray-500'>
										<div className='pt-7 px-5 flex justify-between'>
											<h6 className='text-lg w-full'>12 Kait React JS yang Harus Diketahui Setiap Pengembang React</h6>
										</div>
									</div>
								</div>
							</Link>
						</div>
						<div className='mb-10 lg:mb-0 w-full lg:w-4/12 px-6 relative z-20'>
							<Link href={'/'}>
								<div className='rounded-3xl pb-10 shadow-great bg-white flex flex-col'>
									<div className='rounded-tr-3xl rounded-tl-3xl overflow-hidden bg-white relative h-96'>
										<Image
											layout='fill'
											className='object-cover'
											src='/jpg/blog-3.jpg'
											alt=''
										/>
									</div>
									<div className='rounded-tr-3xl rounded-tl-3xl text-gray-500'>
										<div className='pt-7 px-5 flex justify-between'>
											<h6 className='text-lg w-full'>Mengenal Lebih Dekat Mengenai Pembuatan 3D Web dengan Three.js</h6>
										</div>
									</div>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section className='pb-32 relative overflow-hidden'>
				<div className='absolute w-80 h-80 bottom-0 right-0 overflow-hidden'>
					<div className='w-60 h-60 rounded-full blur-3xl absolute z-10 -bottom-10 -right-10 bg-accent-4/20 '></div>
				</div>
				<div className='max-w-full lg:max-w-7xl mx-auto relative px-4 '>
					<div className='flex flex-wrap mb-12'>
						<div className='w-full lg:w-3/12 px-4'>
							<LogoFooter className='mb-3'/>
							<p className='text-sm text-gray-500 pr-8'>
                &quot;Learn Better Together&quot; Built with ❤️ by your Friends
							</p>
						</div>
						<div className='w-full lg:w-2/12 px-4'>
							<h6 className='text-xl tracking-tight text-gray-900 mt-2 mb-7'>
                Company
							</h6>
							<ul className='text-lg text-gray-500 flex flex-col gap-y-2'>
								<li>
									<Link href='/'>About</Link>
								</li>
								<li>
									<Link href='/'>Volunter</Link>
								</li>
							</ul>
						</div>
						<div className='w-full lg:w-2/12 px-4'>
							<h6 className='text-xl tracking-tight text-gray-900 mt-2 mb-7'>
                Contact
							</h6>
							<ul className='text-lg text-gray-500 flex flex-col gap-y-2'>
								<li>
									<Link href='/'>Nomor</Link>
								</li>
								<li>
									<Link href='/'>Email</Link>
								</li>
							</ul>
						</div>
						<div className='w-full lg:w-2/12 px-4'>
							<h6 className='text-xl tracking-tight text-gray-900 mt-2 mb-2'>
                More
							</h6>
							<ul className='text-lg text-gray-500 flex gap-x-5 '>
								<li>
									<a
										href=''
										className='w-10 h-10 bg-white group overflow-hidden relative shadow-lg flex items-center justify-center rounded-full'
										target='_blank'
										rel='noreferrer noopener'
									>
										<span className='group-hover:opacity-100 opacity-0 z-10 transform rotate-0 group-hover:rotate-180 transition-all duration-300 bg-gradient-social absolute inset-0'></span>
										<span className='relative z-20'>
											<Facebook className='fill-black group-hover:fill-white transition-color duration-300' />
										</span>
									</a>
								</li>
								<li>
									<a
										href=''
										className='w-10 h-10 bg-white group overflow-hidden relative shadow-lg flex items-center justify-center rounded-full'
										target='_blank'
										rel='noreferrer noopener'
									>
										<span className='group-hover:opacity-100 opacity-0 z-10 transform rotate-0 group-hover:rotate-180 transition-all duration-300 bg-gradient-social absolute inset-0'></span>
										<span className='relative z-20'>
											<Instagram className='fill-black group-hover:fill-white transition-color duration-300' />
										</span>
									</a>
								</li>
								<li>
									<a
										href=''
										className='w-10 h-10 bg-white group overflow-hidden relative shadow-lg flex items-center justify-center rounded-full'
										target='_blank'
										rel='noreferrer noopener'
									>
										<span className='group-hover:opacity-100 opacity-0 z-10 transform rotate-0 group-hover:rotate-180 transition-all duration-300 bg-gradient-social absolute inset-0'></span>
										<span className='relative z-20'>
											<Twitter className='fill-black group-hover:fill-white transition-color duration-300' />
										</span>
									</a>
								</li>
								<li>
									<a
										href=''
										className='w-10 h-10 bg-white group overflow-hidden relative shadow-lg flex items-center justify-center rounded-full'
										target='_blank'
										rel='noreferrer noopener'
									>
										<span className='group-hover:opacity-100 opacity-0 z-10 transform rotate-0 group-hover:rotate-180 transition-all duration-300 bg-gradient-social absolute inset-0'></span>
										<span className='relative z-20'>
											<Telegram className='fill-black group-hover:fill-white transition-color duration-300' />
										</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='text-center text-sm text-gray-500'>
            All rights pr.surabayadev@gmail.com
					</div>
				</div>
			</section>
		</>
	);
}
