<link rel="stylesheet" href="./css/note.css">
<script src="./js/note.js" defer></script>

<body>
    <main class="wrapper">
        <h1 class="main-title">Note Taker</h1>
        <h2 class="main-sub-title">Add A New Note:</h2>
        <div class="note-container">
            <h3 class="note-title">Title:</h3>
            <input class="note-field" id="note-heading" type="text">
        </div>
        <div class="note-container">
            <h3 class="note-title">Note:</h3>
            <textarea class="note-field" id="note-body" placeholder="Write your note here..."></textarea>
        </div>
        <div class="btn-container">
            <input type="submit" id="note-btn" value="Add Note">
        </div>
        <div id="overlay"></div>
    </main>
    <?php include('./partials/navigation.php'); ?>
</body>