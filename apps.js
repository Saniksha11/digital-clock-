window.onload =() => {
    function buildclock()  {
      const date = new date();

    console.log(date);
    let hours = date.getHours(); //0 - 23
    let minutes = date.getMinutes(); //0 - 59
    let seconds = date.getSeconds(); //0 - 59


    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

     
    document.querySelector('#clock-hours').innerText = hours;
    document.querySelector('#clock-minutes').innerText = minutes;
    document.querySelector('#clock-second').innerText = seconds;

    setTimeout(buildclock, 1000);
    }
    buildclock();
}