function runBot() {
    let output = document.getElementById('output');
    output.innerHTML = ""; // clear previous messages

    // Helper to add text to output box
    function log(message) {
        output.innerHTML += message + "<br><br>";
    }

    log("Hello! I'm your coding fun fact guide!");

    let botName = "Trival";
    let botLocation = "CodeBase";
    let favoriteLanguage = "JavaScript";

    log("My name is " + botName + " and I live on " + botLocation + ".");
    log("My favorite programming language is " + favoriteLanguage + ".");

    let codingFact = "Did you know that " + favoriteLanguage + " was created in 10 days?";
    log(codingFact);

    codingFact = "Also when " + favoriteLanguage + " was created I loved it.";
    log(codingFact);

    codingFact = "Everyone in my family also loved " + favoriteLanguage + ".";
    log(codingFact);

    log("It was fun sharing these facts with you. Goodbye! - " + botName + " from " + botLocation + ".");
}

(function () {
    // Use existing variables if they exist (no redeclare)
    const botNameVal = (typeof botName !== 'undefined') ? botName : "Trival";
    const botLocationVal = (typeof botLocation !== 'undefined') ? botLocation : "CodeBase";
    const favoriteLanguageVal = (typeof favoriteLanguage !== 'undefined') ? favoriteLanguage : "JavaScript";

    // Expose runBot globally so your button onclick="runBot()" works
    window.runBot = function runBot() {
        const output = document.getElementById('output');
        const startBtn = document.querySelector('button[onclick="runBot()"]') || document.getElementById('start-btn') || document.querySelector('button');

        if (startBtn) startBtn.disabled = true; // prevent double-clicking
        if (output) output.innerHTML = "";       // clear previous run

        const messages = [
            "Hello! I'm your coding fun fact guide!",
            "My name is " + botNameVal + " and I live on " + botLocationVal + ".",
            "My favorite programming language is " + favoriteLanguageVal + ".",
            "Did you know that " + favoriteLanguageVal + " was created in 10 days?",
            "Also when " + favoriteLanguageVal + " was created I loved it.",
            "Everyone in my family also loved " + favoriteLanguageVal + ".",
            "It was fun sharing these facts with you. Goodbye! - " + botNameVal + " from " + botLocationVal + "."
        ];

        const lineDelay = 1400; // ms between whole lines (change to speed up/slow down)

        let index = 0;

        function appendLine(text) {
            if (output) {
                const p = document.createElement('p');
                p.className = 'bot-line';
                p.textContent = text;
                p.style.margin = '0 0 12px 0';
                p.style.opacity = '0';
                output.appendChild(p);
                output.scrollTop = output.scrollHeight;
                // simple fade-in
                setTimeout(() => p.style.transition = 'opacity 220ms', 20);
                setTimeout(() => p.style.opacity = '1', 30);
            } else {
                // fallback to console if there's no output div
                console.log(text);
            }
        }

        function showNext() {
            if (index >= messages.length) {
                if (startBtn) startBtn.disabled = false;
                return;
            }
            appendLine(messages[index]);
            index++;
            setTimeout(showNext, lineDelay);
        }

        showNext();
    };
})();
