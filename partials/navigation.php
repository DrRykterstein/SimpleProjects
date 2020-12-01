<?php 
  define('CSS_PATH', '/css/');
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Main Navigation Menu</title>
  <link rel="stylesheet" href="<?php echo CSS_PATH . "variables.css"; ?>">
  <script src="https://kit.fontawesome.com/6a6391d299.js" crossorigin="anonymous"></script>
</head>
<body>
  <nav class="main-nav">
    <ul class="nav-list">
    <li class="nav-list-item">
        <a href="/front-page.php">
          <span class="nav-list-home"><i class="fa fa-home"></i>Home</span>
        </a>
      </li>
      <li class="nav-list-item">
        <a href="/preview.php">Preview App</a>
      </li>
      <li class="nav-list-item">
        <a href="/todo.php">TODO List</a>
      </li>
      <li class="nav-list-item">
        <a href="/expense.php">Expense Tracker</a>
      </li>
      <li class="nav-list-item">
        <a href="/note.php">Note Taker</a>
      </li>
      <li class="nav-list-item">
        <a href="/wlv.php">WLV Counter</a>
      </li>
      <li class="nav-list-item">
        <a href="/memory.php">Memory Game</a>
      </li>
      <li class="nav-list-item">
        <a href="/triple.php">Triple Memory Game</a>
      </li>
      <li class="nav-list-item">
        <a href="/form.php">Form Validation</a>
      </li>
      <li class="nav-list-item">
        <a href="/countdown.php">Countdown Timer</a>
      </li>
    </ul>
  </nav>
</body>
</hmtl>