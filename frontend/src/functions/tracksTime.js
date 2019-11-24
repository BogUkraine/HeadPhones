const tracksTime = (data) => {
    let time = 0;
    for( let i = 0; i < data.length; i++ ) {
        time += data[i].track_time;
    }
    return timeDelimiter(time);
}

const timeDelimiter = (db_time) => {
    //let hours = Math.floor(db_time/3600);
    let minutes = Math.floor(db_time/60);
    let seconds = db_time%60;
    if(seconds < 10) seconds = "0" + seconds.toString();
    return(`${minutes}:${seconds}`)
}

export default tracksTime;