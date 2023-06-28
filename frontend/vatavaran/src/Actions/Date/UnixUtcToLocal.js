export default function unixUtcToLocal(sr, st){
    var date= new Date(sr * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = date.getMinutes().length < 2 ? '0' + date.getMinutes(): date.getMinutes();
    // Seconds part from the timestamp
    var seconds = date.getSeconds().length < 2 ? '0' + date.getSeconds(): date.getSeconds();
    var sunrise = hours + ':' + minutes + ':' + seconds;

    date= new Date(st * 1000);
    // Hours part from the timestamp
    hours = date.getHours();
    // Minutes part from the timestamp
    minutes = date.getMinutes().length < 2 ? '0' + date.getMinutes(): date.getMinutes();
    // Seconds part from the timestamp
    seconds = date.getSeconds().length < 2 ? '0' + date.getSeconds(): date.getSeconds();
    var sunset = hours + ':' + minutes + ':' + seconds;
    return [sunrise, sunset];
  }