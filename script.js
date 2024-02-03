function showMessage(response) {
    if (response === "No") {
        const noButton = document.getElementById("no-button");
        const maxWidth = window.innerWidth - noButton.offsetWidth;
        const maxHeight = window.innerHeight - noButton.offsetHeight;

        // Set button position to absolute
        noButton.style.position = "absolute";

        // Change image source to "gun.gif"
        //document.getElementsByClassName("image")[0].src = "images/gun.gif";

        // Generate random coordinates within the visible container
        let randomX = 0;
        let randomY = 0;
        const generateRandomCoordinates = () => {
            randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
            randomY = Math.max(0, Math.floor(Math.random() * maxHeight));
            noButton.style.left = randomX + "px";
            noButton.style.top = randomY + "px";
        }

        // Apply new coordinates to the button
        generateRandomCoordinates();

        // Update text content and hide name message
        // document.getElementById("question").textContent =
        //     "Nice try, but you can't escape that easily!";
        // document.getElementById("name").style.display = "none";
        // document.getElementById("no-message").style.display;
    }

    if (response === "Yes") {
        // Remove name message and no button
        document.getElementById("name").remove();
        document.getElementById("no-button").remove();

        // Update text content, show message, and change image source to "dance.gif"
        const yesMessage = document.getElementById("question");
        yesMessage.textContent = "LESGOOO see you on the 14th babygirl😘😘";
        yesMessage.style.display = "block";
        yesMessage.style.fontStyle = "normal";
        document.getElementsByClassName("image")[0].src = "images/dance.gif";

        // Remove yes button
        document.getElementById("yesButton").remove();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var noButton = document.getElementById("no-button");

    if ('ontouchstart' in window || navigator.msMaxTouchPoints) {
        // Dispozitiv mobil, folosim ontouchstart
        noButton.addEventListener("touchstart", function (event) {
            event.preventDefault(); // Previne comportamentul implicit de click
            showMessage('No');
        });
    } else {
        // Nu este un dispozitiv mobil, folosim onmouseover
        noButton.addEventListener("mouseover", function () {
            showMessage('No');
        });
    }
});

