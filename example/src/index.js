import React from 'react';
import { render} from 'react-dom';
import axiosAache from '../../src/index.js'

class App extends React.Component{

	componentDidMount(){
		let a = axiosAache({
			url:'http://hn.algolia.com/api/v1/search',
			type:'GET'
		},[])

		console.log(a)

		let b = axiosAache({
			url:'http://hn.algolia.com/api/v1/search?query=yuex',
			type:'GET'
		},[])

		console.log(b)
	}

	handleClick () {
		axiosAache({
			url:'http://hn.algolia.com/api/v1/search',
			type:'GET'
		},['']).then(res => {
			console.log(res)
		})

		// console.log(a)
	}

	render(){
		return (
			<React.Fragment>
				<h1>test</h1>
				<button onClick={this.handleClick.bind(this)}>click</button>
			</React.Fragment>
		)
	}
}

render(<App />, document.getElementById("root"));