Project Un: Preview App:
Displays a simple modal when the 'Preview' button is clicked. Modal is removed upon clicking delete button. Modal can also be opened upon pressing the 's' key and closed upon pressing the 'esc' key.

Project Deux: TODO App:
Contains a single input whose value is outputted in the form of an unordered list item upon clicking the 'Add item' button. Upon clicking the delete button, the current list item is removed.

Project Trois: Expense Tracker:
Contains 3 inputs: name, date and amount. Upon filling out every input and clicking the 'Add Expense' button; all 3 input values are outputted in the form of a table row, which contains the corresponding number of table cells including an additional cell for the delete button. Furthermore, a 'Total' is also displayed which will increment by the specified input amount upon adding a new table row. Upon clicking the delete button, that row is removed and the total amount is decremented.

Project Quatre: Note Taker:
Contains 2 inputs: note title and note body. If the user fails to fill both inputs then an alert message is displayed upon clicking 'Add Note.' Else, a new note section is displayed below, represented by the note title, an edit button, a view button, a delete button and the note body field. Upon clicking the edit button, both the note title and body become editable and the edit button transforms into a save button. Upon clicking 'save' both note fields exit their editable state with any changes now finalised. Upon clicking the view button, the text within both note fields is displayed in the form of a 'modal' and and a darkened overlay is also displayed covering the rest of the page. The note modal also contains a delete icon which will remove the current modal and overlay. Finally, upon clicking the delete button, the current note section will no longer be visible.

Project Cinq: WLV Counter:
Program that counts the number of words, letters and vowels in the provided textarea input upon clicking the 'calculate' button.
Includes keypress functionality where 'alt' + 'w' only calculates the number of words; 'alt' + 'l' outputs the number of letters and 'alt' + 'v' outputs the number of vowels. Furthermore, when calculating the number of vowels, a new textarea is displayed containing a space separated array every vowel in the provided text.

Project Six: Memory Game:
Program first displays a main menu screen. Upon clicking the 'start' button, a grid is displayed showing 15 pairs of cards. These cards are shuffled in random order upon game initialisation. Each card contains an even listener which is triggered upon a click and the current cards icon is displayed and the background colour is changed. After 2 cards are clicked, a move counter is incremented by 1 and the program checks for a match. In the event of match meaning that both cards icons are equivalent, a new background colour is set and the cards are disabled for the remaining duration of the game. If there is no match then both cards are returned to their default state. Once all cards have been matched and disabled, the program redirects back to the main menu screen following a short interval, except the main menu will now display the number of moves achieved for the user to reflect on.

Project Sept: Form Validation:
Program that takes in 2 user inputs: a username and password. Upon clicking the 'Sign In' button, the validity of both the username and password are checked and the user is alerted in the event that a check fails. Username checks include: bounds/constraints between 3 and 20 characters with every character being either a letter, number or underscore. Password checks include: bounds/constraints between 6 and 30 characters, no spaces and at least one capital letter, lower case letter, number and special character.

Project Huit: Countdown Timer:
Program that takes in both a date and time input. Upon clicking the 'countdown' button, a countdown is initialised and will begin counting down to the users input date in an 'hours : minutes : seconds' format. The user is alerted if one or both inputs are left empty upon clicking 'countdown.' Once the countdown is complete, the program is exited and all counting subsides.
