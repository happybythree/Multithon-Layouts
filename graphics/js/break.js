nodecg.Replicant('total', 'nodecg-tiltify').on('change', (total) => {
  let toFixed = total.toFixed(2);
  $('#donationTotal').text(toFixed.slice(0, -3));
  $('#donationTotalDigits').text(toFixed.slice(-2));
});

let firstSongDisplay = true;
nodecg.Replicant('nowPlaying').on('change', (song) => {
  let timeout = 5000;
  if (firstSongDisplay) {
    firstSongDisplay = false;
    timeout = 0;
  }
  setTimeout(() => {
    $('#songTitle').text(song.title);
    $('#songArtists').text(`by ${song.artists} (ocremix.org)`);
  }, timeout);
});