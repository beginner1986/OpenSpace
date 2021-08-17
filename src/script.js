function checkPassword() {
    let password = document.getElementById("passwd").value;

    if(password === "TrustNo1") {
        enableInputs();
    }
}

function enableInputs() {
    const checkButtons = document.querySelectorAll('input[type="checkbox"]');
    checkButtons.forEach(enableElement);
    checkButtons.forEach(cb => cb.onchange = function() { checkLaunchConditions() });

    const levers = document.querySelectorAll('input[type="range"]');
    levers.forEach(enableElement);
    levers.forEach(l => l.onchange = function() { checkLaunchConditions() });
}

function enableElement(element) {
    element.disabled = false;
}

function checkLaunchConditions() {
    let count = 0;

    const checkButtons = document.querySelectorAll('input[type="checkbox"]');
    checkButtons.forEach(cb => { if(cb.checked) count++});

    const levers = document.querySelectorAll('input[type="range"]');
    levers.forEach(cb => { if(cb.value >= 99) count++ });

    const launchBtn = document.getElementById("launch-btn");
    if(count === 11) {
        launchBtn.disabled = false;
        launchBtn.addEventListener("click", function () {
            document.querySelector(".rocket").classList.add("rocket-anim");
        });
    } else {
        launchBtn.disabled = true;
    }
}
