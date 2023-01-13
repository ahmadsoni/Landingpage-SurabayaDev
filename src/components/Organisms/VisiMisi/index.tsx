import React from 'react';
import Image from 'next/legacy/image';
export default function VisiMisi() {
	return (
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
	);
}
