import React, { Component } from 'react'

import './Tour.scss'

class Tour extends Component {
	state = {
		showInfo: false,
	}

	handleInfoInfo = () => {
		this.setState({
			showInfo: !this.state.showInfo,
		})
	}

	render() {
		const { id, city, img, name, info } = this.props.tour
		const { removeTour } = this.props

		return (
			<article className='tour'>
				<div className='img-container'>
					<img src={img} alt='city tour' />
					<span className='close-btn' onClick={() => removeTour(id)}>
						<i className='fas fa-window-close' />
					</span>
				</div>
				<div className='tour-info'>
					<h3>{city}</h3>
					<h4>{name}</h4>
					<h5>
						info{' '}
						<span onClick={this.handleInfoInfo}>
							<i className='fas fa-caret-square-down' />
						</span>
					</h5>
					{this.state.showInfo && this.state.showInfo ? <p>{info}</p> : null}
				</div>
			</article>
		)
	}
}

export default Tour
