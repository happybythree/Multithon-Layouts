nodecg.Replicant('total', 'nodecg-tiltify').on('change', (total) => {
  let toFixed = total.toFixed(2);
  $('#donationTotal').text(toFixed.slice(0, -3));
  $('#donationTotalDigits').text(toFixed.slice(-2));
});