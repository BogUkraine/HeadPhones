const fetchSearch = (track_name) => ({
    type: "FETCH_SEARCH",
    payload: {
        track_name,
    }
});

export default fetchSearch;