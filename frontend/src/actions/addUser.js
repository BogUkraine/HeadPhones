const checkUser = (user_login, user_password) => ({
    type: "ADD_USER",
    payload: {
        user_id: 1,
        user_password: user_password,
        user_login: user_login,
    }
});

export default checkUser;