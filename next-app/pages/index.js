export default function Home() {
	return (
		<main>
			{/* HEADER BUTTONS */}
			<div className='section-header-buttons'>
				<img src='/shared/logo.svg' alt='typemaster logo' width='40px' height='40px' />
				<button className='button button-secondary'>Pre-order now</button>
			</div>

			{/* PRIMARY  */}
			<section className='section-primary'>
				<h1>Typemaster keyboard</h1>

				<p>
					Improve your productivity and gaming without breaking the bank. Upgrade to a high quality
					mechanical typing experience.
				</p>
			</section>

			{/*  BUTTONS */}
			<div className='section-secondary-buttons'>
				<button className='button button-primary'>Pre-order now</button>

				<p className='bold'>RELEASE ON 5/27</p>
			</div>

			{/* IMAGES */}

			<img
				className='primary-image'
				src='/mobile/image-keyboard.jpg'
				alt='keyboard'
				width='372px'
				height='331px'
			/>

			<div className='flex-row'>
				{/* This is a div for the use of ::before and ::after 
				psuedo elements properties for the overlay */}
				<div className='secondary-image-left' />

				<img
					className='secondary-image-right'
					src='/mobile/image-glass-and-keyboard.jpg'
					alt='glass and keyboard'
					width='220px'
					height='193px'
				/>
			</div>

			{/* SECONDARY  */}
			<section className='section-secondary'>
				<h2>Mechanical wireless keyboard</h2>

				<p>
					The Typemaster keyboard boasts top-notch build and practical design. It offers a wide
					variety of switches and keycaps, along with reliable wireless connectivity.
				</p>
			</section>

			{/* SECTION INFO 1 */}
			<section className='section-info'>
				<div className='orange-icons'>
					<img src='/shared/icon-compatible.svg' height='20px' width='25px' alt='compatable icon' />
				</div>

				<h3>Highly compatible</h3>
				<p>
					Easy to use and works well with all major computer brands, gaming consoles and mobile
					devices. Plug & play, no installation or driver needed.
				</p>
			</section>

			{/* SECTION INFO 2 */}
			<section className='section-info'>
				<div className='orange-icons'>
					<img src='/shared/icon-bluetooth.svg' height='28px' width='18px' alt='bluetooth icon' />
				</div>
				<h3>Wireless with bluetooth</h3>
				<p>
					Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft
					away. Simply plug the unifying receiver into your computer.
				</p>
			</section>

			{/* SECTION INFO 3 */}
			<section className='section-info'>
				<div className='orange-icons'>
					<img src='/shared/icon-battery.svg' height='30px' width='32px' alt='battery icon' />
				</div>
				<h3>High capacity battery</h3>
				<p>
					Equipped with a long-lasting built-in battery, you’ll never have to spend a dime on
					replaceable ones.  Enjoy 40 hours of usage time between charges.
				</p>
			</section>

			{/* SECTION INFO 4 */}
			<section className='section-info'>
				<div className='orange-icons'>
					<img src='/shared/icon-light.svg' height='32px' width='32px' alt='lightbulb icon' />
				</div>
				<h3>RGB backlit modes</h3>
				<p>
					{' '}
					Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows
					intensely in the dark and helps you type in low light conditions.
				</p>
			</section>

			<div className='section-footer'>
				<p>
					<span className='bold'>Typemaster 2021 </span>| All Rights Reserved
				</p>
			</div>
		</main>
	)
}
