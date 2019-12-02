import axios from 'axios';

const initialState = {
    user_id: '1',
    user_password: 'initial',
    user_login: 'BogUkraine',
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

export default function user (state = initialState, action) {
  	switch(action.type){
		case('CHECK_USER'): {
            const user = getUser(action.payload.user_login, action.payload.user_password);
            setTimeout(()=> {
                console.log(user, "user")
            }, 2000)
            
            if(user.length == 0)
                return state;
            else
                return user;
        }
        case('CHECKED_USER_SUCCESS'): {
            return action.data
        }
        case('CHECKED_USER_FAIL'): {
            return action.data
        }
        case('ADD_USER'): {
            return action.payload
        }
		default: {
			return state;
		}
	}
}