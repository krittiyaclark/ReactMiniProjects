import React from 'react'

import logo from '../../logo.svg'
import './Navbar.scss'

const Navbar = () => {
	return (
		<>
			<nav className='navbar'>
				<img src={logo} alt='ciry tour company' />

				<ul className='nav-links'>
					<li>
						<a href='/' className='nav-link'>
							home
						</a>
					</li>
					<li>
						<a href='/' className='nav-link'>
							about
						</a>
					</li>
					<li>
						<a href='/' className='nav-link active'>
							tour
						</a>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default Navbar
