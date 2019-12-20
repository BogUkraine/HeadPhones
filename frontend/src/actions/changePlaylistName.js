const changePlaylistName = (playlist_id, playlist_name) => ({
    type: "CHANGE_PLAYLIST_NAME",
    payload: {
        playlist_id,
        playlist_name
    }
});

export default changePlaylistName;