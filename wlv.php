<link rel="stylesheet" href="./css/wlv.css">
<script src="./js/wlv.js" defer></script>

<body>
  <main class="monolith">
    <h1 class="main-title">WLV Counter</h1>
    <div class="main-body">
      <p class="preface">A program that outputs the number of words, letters and vowels within the provided text.</p>
      <div class="separator"></div>
      <div class="total-container">
        <span class="total-item">
          <h2 class="total-title words-title">Words:</h2>
          <p class="total-num words-num">0</p>
        </span>
        <span class="total-item">
          <h2 class="total-title letters-title">Letters:</h2>
          <p class="total-num letters-num">0</p>
        </span>
        <span class="total-item">
          <h2 class="total-title vowels-title">Vowels: </h2>
          <p class="total-num vowels-num">0</p>
        </span>
      </div>
      <textarea class="text-body" placeholder="Add some text here..."></textarea>
      <button class="btn">Calculate</button>
      <div class="vowel-array-container">
        <div class="separator"></div>
        <p class="preface">Space separated list of vowels from provided text.</p>
        <textarea readonly class="vowel-text-body" value="hi"></textarea>
      </div>
    </div>
  </main>
  <?php include('./partials/navigation.php'); ?>
</body>