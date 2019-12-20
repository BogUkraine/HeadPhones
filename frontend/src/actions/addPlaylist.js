const addPlaylist = (user_id) => ({
    type: "ADD_PLAYLIST",
    payload: {
        user_id
    }
});

export default addPlaylist;