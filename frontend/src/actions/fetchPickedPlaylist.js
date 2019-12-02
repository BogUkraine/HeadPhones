const fetchPickedPlaylist = (user_id, playlist_id) => ({
    type: "FETCH_PICKED_PLAYLIST",
    payload: {
        user_id: user_id,
        playlist_id: playlist_id
    }
});

export default fetchPickedPlaylist;