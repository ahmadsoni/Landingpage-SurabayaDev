import React from 'react';
import DecorePlus1 from 'images/decore-plus-style-1.svg';
import Image from 'next/legacy/image';
export default function Sponsor() {
	return (
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
	);
}
