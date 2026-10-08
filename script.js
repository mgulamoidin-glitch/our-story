const startButton = document.getElementById("startButton");
const storySection = document.getElementById("story");
const yesButton = document.getElementById("yesButton");

startButton.addEventListener("click", function() {
    storySection.scrollIntoView({ behavior: "smooth" });
});

yesButton.addEventListener("click", function() {

    document.body.innerHTML = `
        <div id="celebration">
            <div id="heartExplosion"></div>

            <div class="celebration-content">
                <p>It's official.</p>
                <h1>❤️</h1>
                <span>I'm really happy it's you.</span>
            </div>
        </div>
    `;
const explosion = document.getElementById("heartExplosion");

    for (let i = 0; i < 50; i++) {

        const heart = document.createElement("span");

        heart.innerHTML = "♥";

        heart.style.setProperty("--x", `${Math.random() * 100 - 50}vw`);
        heart.style.setProperty("--y", `${Math.random() * 100 - 50}vh`);

        explosion.appendChild(heart);
    }

});    

