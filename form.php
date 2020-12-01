<link rel="stylesheet" href="./css/form.css">
<script src="./js/form.js" defer></script>

<body>
  <main class="wrapper">
    <div class="main-title-container"><h1 class="main-title">Login Form</h1></div>
    <section class="form-container">
      <form id="form">
        <div class="username-container">
          <h2 class="username-title">Username:</h2>
          <input type="text" id="username-input">
        </div>
        <div class="password-container">
          <h2 class="password-title">Password:</h2>
          <input type="password" id="password-input">
        </div>
        <div class="submit-container">
          <input type="submit" id="submit" value="Sign In">
        </div>
      </form>
    </section>
  </main>
  <?php include('./partials/navigation.php'); ?>
</body>