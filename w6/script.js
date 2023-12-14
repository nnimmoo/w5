var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalButton");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
};

span.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

document.getElementById("changeColorButton").addEventListener("click", function() {
    var color = document.getElementById("colorInput").value.toLowerCase();
    if (['red', 'blue', 'green', 'black', 'white'].includes(color)) {
        document.body.style.backgroundColor = color;
    } else {
        alert("Invalid color. Please enter red, blue, green, black, or white.");
    }
});

document.getElementById("calculateAverageButton").addEventListener("click", function() {
    var numbers = document.getElementById("numberInput").value.split(":").map(Number);
    var sum = numbers.reduce(function(a, b) { return a + b; }, 0);
    var average = sum / numbers.length;
    document.getElementById("averageResult").textContent = "Average: " + average;
});