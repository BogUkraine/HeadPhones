let minutes, seconds;

const time = (db_time) => {
    minutes = Math.floor(db_time/60);
    seconds = db_time%60;
    if(seconds < 10) seconds = "0" + seconds.toString();
    return(`${minutes}:${seconds}`)
}

export default time;