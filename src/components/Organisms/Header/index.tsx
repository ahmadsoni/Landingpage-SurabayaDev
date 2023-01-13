import React, {useState, useCallback} from 'react';
import Logo from 'images/svg/logo.svg';
import Link from 'next/link';
export default function Header() {
	const [menu, setMenu] = useState(false);
	const toggleMenu = useCallback(() => {
		setMenu(prev => !prev);
	}, [setMenu]);
	return (
		<div className='absolute z-20 lg:z-10 w-full py-6 lg:py-12'>
			<header className='max-w-full lg:max-w-7xl mx-auto px-4'>
				<div className='flex justify-between items-center'>
					<div className='w-28'>
						<Logo className='logo-style-1' />
					</div>
					<button
						className={[
							'w-auto flex items-center justify-center lg:hidden p-2 appearance-none z-50',
							menu ? 'text-white fixed right-4' : 'relative text-inherit',
						].join(' ')}
						onClick={toggleMenu}
					>
						<span className='material-icons'>
							{menu ? 'close' : 'menu'}
						</span>
					</button>
					<div className={['lg:flex w-auto lg:opacity-100 lg:visible lg:h-auto z-20', menu ? 'flex items-center justify-center h-screen w-full inset-0 opacity-100 visible fixed bg-black' : 'hidden opacity-0 h-0 invisible'].join(' ')}>
						<ul className='flex items-center flex-col lg:flex-row gap-y-6 lg:gap-y-0 '>
							<li className=''>
								<Link href='#destination' className='px-9 text-white lg:text-gray-800' onClick={toggleMenu}>
                Destination
								</Link>
							</li>
							<li className=''>
								<Link href='#hotels' className='px-9 text-white lg:text-gray-800' onClick={toggleMenu}>
                Hotels
								</Link>
							</li>
							<li className=''>
								<Link href='#fligths' className='px-9 text-white lg:text-gray-800' onClick={toggleMenu}>
                Fligths
								</Link>
							</li>
							<li className=''>
								<Link href='#bookings' className='px-9 text-white lg:text-gray-800' onClick={toggleMenu}>
                Bookings
								</Link>
							</li>
							<li className=''>
								<Link href='#login' className='px-9 text-white lg:text-gray-800' onClick={toggleMenu}>
                Login
								</Link>
							</li>
							<li className=''>
								<Link
									href='#sign-up'
									className='px-5 text-white lg:text-gray-800 py-1 border border-gray-800 rounded-md mx-3'
									onClick={toggleMenu}>
                Sign up
								</Link>
							</li>
							<li className=''>
								<button className='px-9 text-white lg:text-gray-800 relative' onClick={toggleMenu}>
                EN
									<span className='absolute w-2 h-2 border-gray-800 border-b border-r transform rotate-45 translate-y-1/2 ml-2'></span>
								</button>
							</li>
						</ul>
					</div>
				</div>
			</header>
		</div>
	);
}
