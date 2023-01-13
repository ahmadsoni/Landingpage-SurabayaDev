import React from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import DecoreSwirl from 'images/decore-swirel-style-1.svg';
export default function Blog() {
	return (
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
	);
}
