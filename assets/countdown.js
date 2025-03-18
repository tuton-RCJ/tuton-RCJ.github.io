document.addEventListener('DOMContentLoaded', function () {
  var countdownElement = document.getElementById('countdown');
  var targetDate = new Date('2025-03-28T00:00:00');
  var now = new Date();
  var diffTime = targetDate - now;
  var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  if (diffDays > 0) {
    countdownElement.innerHTML = '<span>全国大会まであと ' + diffDays + ' 日！！</span>';
  }
  else if (diffDays == 0) {
    countdownElement.innerHTML = '<span>全国大会・セットアップ日！</span>';
  }
  else if (diffDays == -1) {
    countdownElement.innerHTML = '<span>全国大会・競技1日目！</span>';
  }
  else if (diffDays == -2) {
    countdownElement.innerHTML = '<span>全国大会・競技2日目！</span>';
  }
  else {
    countdownElement.innerHTML = '<span>全国大会は終了しました</span>';
  }
});
