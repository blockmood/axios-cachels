import React from 'react';
import { render} from 'react-dom';
import axiosCache from '../../src/index.js'

class App extends React.Component{

	constructor(){
		super(...arguments)
		this.state = {
			list:[],
		}
	}

	componentDidMount(){
		this.getData()
	}

	updateHandle(e){
		this.getData(e.target.value)
	}

	getData(params = ''){
		axiosCache({
			url:`http://hn.algolia.com/api/v1/search?query=${params}`,
			type:'GET'
		}).then(res => {
			this.setState({
				list:res.hits
			})
		})
	}

	render(){
		return (
			<React.Fragment>
				<h1>axiosCache Example</h1>
				<div>
					<input  onChange={this.updateHandle.bind(this)}/>
					<ul>
						{
							this.state.list.length > 0 ? this.state.list.map(item => {
								return <li key={item.objectID}>{item.title}</li>
							}) : 'loading ...'
						}
					</ul>
				</div>
			</React.Fragment>
		)
	}
}

render(<App />, document.getElementById("root"));