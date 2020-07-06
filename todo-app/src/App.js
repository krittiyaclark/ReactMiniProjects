import React, { Component } from 'react'

import { v4 as uuidv4 } from 'uuid'
import 'bootstrap/dist/css/bootstrap.min.css'

import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

class App extends Component {
	state = {
		items: [
			{ id: 1, title: 'wake up' },
			{ id: 2, title: 'learn react' },
			{ id: 3, title: 'gocery' },
			{ id: 1, title: 'wake up' },
		],
		id: uuidv4(),
		item: '',
		editItems: false,
	}

	handleChange = () => {
		console.log('handleChange')
	}

	handleSubmit = () => {
		console.log('handleSubmit')
	}

	clearList = () => {
		console.log('clearList')
	}

	handleDelete = (id) => {
		console.log(`handleDelete ${id}`)
	}

	handleEdit = (id) => {
		console.log(`handleEdit ${id}`)
	}

	render() {
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-10 mx-auto col-md-8 mt-5'>
						<h3 className='text-capitalize text-center'>todo input</h3>
						<TodoInput
							item={this.state.item}
							handleChange={this.handleChange}
							handleSubmit={this.handleSubmit}
							editItem={this.state.editItem}
						/>
						<TodoList
							items={this.state.items}
							clearList={this.clearList}
							handleDelete={this.handleDelete}
							handleEdit={this.handleEdit}
						/>
					</div>
				</div>
			</div>
		)
	}
}

export default App
