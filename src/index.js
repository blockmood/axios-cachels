import axios from 'axios'

let cacheList = {}

const request =  async (config,filterURL = []) => {

	let response;

	if(!Array.isArray(filterURL)){
		throw new Error('type mast is Array')
	}

	if(Object.keys(cacheList).includes(config['url'])){
		return cacheList[config['url']]
	}

	if(filterURL.indexOf(config['url']) > -1){
		if(result.status == 200){
			let result = await axios(config);
			response = result.data
		}
	}else{
		let result = await axios(config);
		if(!cacheList[config['url']]){
			cacheList[config['url']] = result.data
			response = result.data
		}
	}

	return response
}

request.interceptors = axios.interceptors

export default request
