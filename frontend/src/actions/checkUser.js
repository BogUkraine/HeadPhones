const checkUser = (user_login, user_password) => ({
    type: "CHECK_USER",
    payload: {
        user_password: user_password,
        user_login: user_login,
    }
});

export default checkUser;