const timer = nodecg.Replicant('timer', 'nodecg-speedcontrol');
timer.on('change', (timer) => {
  let time = timer.time.substring(1);
  $('#timer').text(time);
});