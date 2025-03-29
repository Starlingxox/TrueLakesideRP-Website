// Tab System for Rules
function openRuleTab(tabName) {
    const tabs = document.getElementsByClassName("rule-tab");
    for (let tab of tabs) {
        tab.style.display = "none";
    }
    
    const buttons = document.getElementsByClassName("tab-button");
    for (let button of buttons) {
        button.classList.remove("active");
    }
    
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}

// Copy CAD Code Function
function copyCadCode() {
    const code = document.getElementById("cad-code").innerText;
    navigator.clipboard.writeText(code).then(() => {
        alert("CAD code copied to clipboard!");
    });
}

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
