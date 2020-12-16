export const msToHMS = (ms: number) => {
  var hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((ms % (1000 * 60)) / 1000);

  let formattedMinutes =
    minutes.toString().length < 2 ? "0" + minutes.toString() : minutes;
  let formattedSeconds =
    seconds.toString().length < 2 ? "0" + seconds.toString() : seconds;

  return `${hours}:${formattedMinutes}:${formattedSeconds}`;
};
