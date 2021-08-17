function checkPassword() {
    let password = document.getElementById("passwd").value;

    if(password === "TrustNo1") {
        enableInputs();
    }
}

function enableInputs() {
    const checkButtons = document.querySelectorAll('input[type="checkbox"]');
    checkButtons.forEach(enableElement);

    const levers = document.querySelectorAll('input[type="range"]');
    levers.forEach(enableElement);

    const launchBtn = document.getElementById('launch-btn');
    enableElement(launchBtn);
}

function enableElement(element) {
    element.disabled = false;
}