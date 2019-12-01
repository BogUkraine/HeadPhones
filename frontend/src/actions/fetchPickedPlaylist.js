const fetchPickedPlaylist = (playlist_id) => ({
    type: "FETCH_PICKED_PLAYLIST",
    payload: {
        playlist_id: playlist_id
    }
});

export default fetchPickedPlaylist;