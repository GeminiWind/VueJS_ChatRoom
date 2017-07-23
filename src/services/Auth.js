export default function(Vue) {
	let authenticatedUser = {};
	Vue.auth = {
		//set token
		setToken: (token,expiration) => {
			localStorage.setItem('token',token);
			localStorage.setItem('expiration', expiration);
		},
		//get token
		getToken :() => {
			var token = localStorage.getItem('token');
			var expiration = localStorage.getItem('expiration');
			if ( !token || !expiration) {
				return null;
			}
			if (Date.now() > parseInt(expiration)) {
				return null;
			} else {
				return token;
			}
		},
		//destroy token
		destroyToken :() => {
			localStorage.removeItem('token');
			localStorage.removeItem('expiration');
			delete axios.defaults.headers.common['Authorization'];
		},
		//isAuthenticated
		isAuthenticated :() => {
			var token = localStorage.getItem('token');
			var expiration = localStorage.getItem('expiration');
			if ( !token || !expiration) {
				return false;
			}
			if (Date.now() > parseInt(expiration)) {
				return false;
			} else {
				return true;
			}
		}
	}
	Object.defineProperties(Vue.prototype, {
		$auth: {
			get: () =>{
				return Vue.auth
			}
		}
	})
}