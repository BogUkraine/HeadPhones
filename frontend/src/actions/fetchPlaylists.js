const fetchPlaylists = (user_id) => ({
    type: "FETCH_PLAYLISTS",
    payload: [{
        user_id: user_id
    }]
});

export default fetchPlaylists;