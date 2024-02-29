function calculateCurryItems() {
    var peopleCount = document.getElementById("peopleCount").value;
    var resultsContainer = document.getElementById("results-container");

    // Validate input
    if (peopleCount === "" || isNaN(peopleCount) || peopleCount < 0) {
        resultsContainer.innerHTML = "<p>Please enter a valid number of people.</p>";
        return;
    }

    // Calculate quantities
    var poppadomsCount = Math.ceil(peopleCount * 2 + 1);
    var naanBreadCount = Math.ceil(peopleCount / 2 );
    var relishTrayCount = Math.ceil(peopleCount / 5);  //add rounding function later
    var riceBowlCount = Math.ceil(peopleCount);
    var starterCount = Math.ceil(peopleCount / 2);
    var curryCount = Math.ceil(peopleCount);

    // Display results
    resultsContainer.innerHTML = `
        <div class="result-box">
            <img src="poppadom.svg" alt="Poppadoms">
            <p>You should order ${poppadomsCount} poppadoms.</p>
        </div>
        <div class="result-box">
            <img src="naan.png" alt="Naan Bread">
            <p>You should order ${naanBreadCount} naan breads.</p>
        </div>
        <div class="result-box">
            <img src="relish.svg" alt="Relish Trays">
            <p>You should order ${relishTrayCount} relish trays.</p>
        </div>
        <div class="result-box">
            <img src="rice.svg" alt="Rice">
            <p>You should order ${riceBowlCount} rice bowls.</p>
        </div>
        <div class="result-box">
            <img src="starter.svg" alt="Starter">
            <p>You should order ${starterCount} starters.</p>
        </div>
        <div class="result-box">
            <img src="curry.svg" alt="Curry">
            <p>You should order ${curryCount} curries.</p>
        </div>         
    `;
}
