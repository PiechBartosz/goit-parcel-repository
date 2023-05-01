import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

let iframe = document.querySelector('#vimeo-player');
let player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000)
);

player.ready().then(function () {
  let savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime !== null) {
    player.setCurrentTime(savedTime);
  }
});
