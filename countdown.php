<link rel="stylesheet" href="./css/countdown.css">
<script src="./js/countdown.js" defer></script>

<body>
  <div class="main">
    <h1 class="clock-excerpt">Pick a date and let the countdown commence</h1>
    <div class="clock-container">
      <span class="clock-item" id="hours">00</span>
      <span class="clock-item">:</span>
      <span class="clock-item" id="minutes">00</span>
      <span class="clock-item">:</span>
      <span class="clock-item" id="seconds">00</span>
    </div>
    <div class="input-container">
      <input type="date" class="clock-input" id="date" placeholder="dd/mm/yy">
      <input type="time" class="clock-input" id="time" step="1">
    </div>
    <input type="submit" class="clock-submit" id="submit" value="Countdown">
  </div>
  <?php include('./partials/navigation.php'); ?>
</body>