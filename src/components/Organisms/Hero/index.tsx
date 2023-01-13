import React from 'react';
import Image from 'next/legacy/image';
import DecoreIntersec from 'images/decore-intersect.svg';
import DecoreTextUnderline from 'images/text-decore-hero.svg';
import Link from 'next/link';
export default function Hero() {
	return (
		<section className='relative mb-28'>
			<span className='absolute w-5/12 h-screen right-0 top-0 bottom-0 '>
				<DecoreIntersec className='fill-accent-4' />
			</span>
			<div className='w-96 h-96 bg-accent-3/50 rounded-full blur-3xl absolute -left-80 -top-10'></div>
			<div className='max-w-7xl mx-auto px-4'>
				<div className='flex'>
					{/* sebelah kiri hero */}
					<div className='w-full lg:w-6/12 pt-52'>
						<h1 className='text-accent-2 font-bold text-sm lg:text-xl uppercase mb-6'>
                Best Destinations around the world
						</h1>
						<h2 className='text-gray-900 font-serif text-4xl lg:text-[84px] leading-tight lg:leading-[84px] tracking-tighter mb-8'>
                Travel,{''}
							<span className='relative'>
                  enjoy
								<span className='absolute left-0 top-full -mt-3 lg:-mt-8 -ml-4 -z-10'>
									<DecoreTextUnderline className='w-[100px] lg:w-[385px] h-1 lg:height-[12px] fill-accent-2' />
								</span>
							</span>{' '}
							{''}
                and live a new and full life
						</h2>
						<p className='text-gray-500 max-w-lg text-sm lg:text-base leading-6 lg:leading-8 mb-8'>
                Built Wicket longer admire do barton vanity itself do in it.
                Preferred to sportsmen it engrossed listening. Park gate sell
                they west hard for the.
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
						<div className='absolute w-[137px] h-[95px] top-44 left-40 z-30'>
							<Image width={100} height={100} src='/plane.png' alt='plane' />
						</div>
						<div className='absolute w-[137px] h-[95px] top-56 right-6 z-10'>
							<Image width={100} height={100} src='/plane.png' alt='plane' />
						</div>
						<div className='relative z-20 transform -translate-x-16'>
							<Image
								priority
								width={783.87}
								height={764}
								src='/hero-traveller.png'
								alt='plane'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
