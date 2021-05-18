export default function Home() {
	return (
		<main>
			<button className='button button-secondary'>Pre-order now</button>

			<h1>Typemaster keyboard</h1>

			<p>
				Improve your productivity and gaming without breaking the bank. Upgrade to a high quality
				mechanical typing experience.
			</p>
			<button className='button button-primary'>Pre-order now</button>

			<p>Release on 5/27</p>

			<h2>Mechanical wireless keyboard</h2>

			<p>
				The Typemaster keyboard boasts top-notch build and practical design. It offers a wide
				variety of switches and keycaps, along with reliable wireless connectivity.
			</p>

			<div>
				<div className='orange-icons'>
					<img
						src='/assets/shared/icon-compatible.svg'
						height='20px'
						width='25px'
						alt='compatable icon'
					/>
				</div>

				<h3>Highly compatible</h3>
				<p>
					Easy to use and works well with all major computer brands, gaming consoles and mobile
					devices. Plug & play, no installation or driver needed.
				</p>
			</div>
			<div>
				<div className='orange-icons'>
					<img
						src='/assets/shared/icon-bluetooth.svg'
						height='28px'
						width='18px'
						alt='bluetooth icon'
					/>
				</div>
				<h3>Wireless with bluetooth</h3>
				<p>
					Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft
					away. Simply plug the unifying receiver into your computer.
				</p>
			</div>
			<div>
				<div className='orange-icons'>
					<img
						src='/assets/shared/icon-battery.svg'
						height='30px'
						width='32px'
						alt='battery icon'
					/>
				</div>
				<h3>High capacity battery</h3>
				<p>
					Equipped with a long-lasting built-in battery, you’ll never have to spend a dime on
					replaceable ones.  Enjoy 40 hours of usage time between charges.
				</p>
			</div>
			<div>
				<div className='orange-icons'>
					<img
						src='/assets/shared/icon-light.svg'
						height='32px'
						width='32px'
						alt='lightbulb icon'
					/>
				</div>
				<h3>RGB backlit modes</h3>
				<p>
					{' '}
					Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows
					intensely in the dark and helps you type in low light conditions.
				</p>
			</div>

			<p>
				<span className='bold'>Typemaster 2021</span>| All Rights Reserved
			</p>
		</main>
	)
}
