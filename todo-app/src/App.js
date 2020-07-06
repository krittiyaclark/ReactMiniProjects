import React, { Component } from 'react'

import { v4 as uuidv4 } from 'uuid'
import 'bootstrap/dist/css/bootstrap.min.css'

import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

class App extends Component {
	state = {
		items: [],
		id: uuidv4(),
		item: '',
		editItems: false,
	}

	handleChange = (event) => {
		this.setState({
			item: event.target.value,
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()

		const newItems = {
			id: this.state.id,
			content: this.state.item,
		}
		const updatedItems = [...this.state.items, newItems]

		this.setState(
			{
				items: updatedItems,
				id: uuidv4(),
				item: '',
				editItems: false,
			},
			() => console.log(this.state)
		)
	}

	clearList = () => {
		this.setState({
			items: [],
		})
	}

	handleDelete = (id) => {
		const filterTtems = this.state.items.filter((item) => item.id !== id)
		this.setState({
			items: filterTtems,
		})
	}

	handleEdit = (id) => {
		const filteredItems = this.state.items.filter((item) => item.id !== id)
		const selectedItem = this.state.items.find((item) => item.id === id)
		this.setState({
			items: filteredItems,
			item: selectedItem.content,
			id: id,
			editItem: true,
		})
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
