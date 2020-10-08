const buttonR = document.getElementById('btn-right');

buttonR.onclick = function () {
  document.getElementById('slider').scrollLeft += 170;
};

const buttonL = document.getElementById('btn-left');

buttonL.onclick = function () {
  document.getElementById('slider').scrollLeft -= 170;
};