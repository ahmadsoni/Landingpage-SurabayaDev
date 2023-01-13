import React from 'react';
import Image from 'next/legacy/image';
import DecoreSwirl from 'images/decore-swirel-style-1.svg';
import Date from 'images/date.svg';
import Time from 'images/time.svg';
import Map from 'images/map.svg';
import Link from 'next/link';
export default function Acara() {
	return (
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
	);
}
