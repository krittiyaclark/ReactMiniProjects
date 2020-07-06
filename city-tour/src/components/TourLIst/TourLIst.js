import React, { Component } from 'react'

import { tourData } from '../../tourData'
import Tour from '../Tour/Tour'
import './TourLIst.scss'

class TourLIst extends Component {
	state = {
		tours: tourData,
	}

	removeTour = (id) => {
		const { tours } = this.state
		const tourId = tours.filter((tour) => tour.id !== id)
		this.setState({
			tours: tourId,
		})
	}

	render() {
		console.log(this.state.tours)
		const { tours } = this.state
		return (
			<section className='tour-list'>
				{tours.length ? (
					tours.map((tour) => (
						<Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
					))
				) : (
					<h2 className='tour-list-center'>No tours</h2>
				)}
			</section>
		)
	}
}

export default TourLIst
