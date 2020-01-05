import axios from 'axios';

const initialState = {
    user_id: 1,
    user_login: 'BogUkraine',
    user_password: '123',
};

const getUser = (login, password) => {
    return axios.get('http://localhost:3210/checkUser', {
    params: {
        user_login: login,
        user_password: password
    }
    })
    .then( (response) => {
        return response.data[0];
    })
    .catch(function (error) {
        console.log(error);
    });
}

const addUser = (login, password) => {
    return axios.get('http://localhost:3210/checkLogin', {
    params: {
        user_login: login,
    }
    })
    .then( (response) => {
        if(response.data[0] === undefined) {
            axios.post('http://localhost:3210/addUser', {
                user_login: login,
                user_password: password,
            })
            .then( (response) => {
            })
            .catch(function (error) {
                console.log(error);
            }); 
        }
        return response.data[0];      
    })
    .catch(function (error) {
        console.log(error);
    });
}

export default function user (state = initialState, action) {
  	switch(action.type){
		case('CHECK_USER'): {
            const user = getUser(action.payload.user_login, action.payload.user_password)
            return user;
        }
        case('CHECKED_USER_SUCCESS'): {
            return action.data
        }
        case('CHECKED_USER_FAIL'): {
            return action.data
        }
        case('ADD_USER'): {
            const user = addUser(action.payload.user_login, action.payload.user_password)
            return user;
        }
        case('CHANGE_USER'): {
            return action.payload
        }
		default: {
			return state;
		}
	}
}