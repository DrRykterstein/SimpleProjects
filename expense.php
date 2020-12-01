<link rel="stylesheet" href="./css/expense.css">
<script src="./js/expense.js" defer></script>

<body>
    <main class="wrapper">
        <div class="section title-container">
            <h1 class="title">Expense Tracker</h1>
            <h2 class="sub-title">Add New Item:</h2>
        </div>
        <!-- input section -->
        <div class="input-container">
            <div class="input-list input-list-name">
                <h3 class="input-title">Name:</h3>
                <input type="text" class="input-item" id="input-name" placeholder="Where was the expense made?">
            </div>
            <div class="input-list">
                <h3 class="input-title">Date:</h3>
                <input type="date" class="input-item" id="input-date" placeholder="dd/mm/yy">
            </div>
            <div class="input-list">
                <h3 class="input-title">Amount:</h3>
                <input type="number" class="input-item" id="input-amount">
            </div>
        </div>   
        <!-- btn and total section -->
        <div class="btn-total-container">
            <div class="total">
                <h3 class="total-title">Total:</h3>
                <p class="total-number">£0.00</p>
            </div>
            <div class="submit-container">
                <input type="submit" id="submit" value="Add Expense">
            </div>
        </div>
        <!-- separator -->
        <div class="separator"></div>
        <!-- table section -->
        <table class="table">
            <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Remove</th>
            </tr>
            <tr class="temp-row">
                <td class="temp-data table-name" style="padding: 1rem">No expenses have been added.</td>
                <td class="temp-data table-date" style="padding: 1rem"></td>
                <td class="temp-data table-amount" style="padding: 1rem"></td>
                <td class="temp-data table-amount" style="padding: 1rem; background-color: white; cursor: default;"></td>
            </tr>
        </table>
    </main>
    <?php include('./partials/navigation.php'); ?>
</body>