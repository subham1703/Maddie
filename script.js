// --- STEP 1: Customize Your Surprises Here! ---
const surprises = [
    { text: "Remember that time when i invited u in my world but didnt take u to defeat childe instead the diluc main came n destroyed him in seconds ? You were so salty XDDD Good times.", image: "images/venti.jpg" },
    { text: "My favorite thing about you is that you're the only person who gets my most ridiculous inside jokes. HBD!", image: "" }, // No image, keep it punchy
    { text: "You were so nervous when u had to start school in covid HUHU.", image: "images/maddie 2.jpg" },
    { text: "This photo perfectly represents that no matter how good you are you'll never accept that you are good looking.", image: "images/maddie 6.jpg" },
    { text: "You're the person who always answers my calls, no matter what shit I'm calling about( atleast before hahahaha). Thank you for being my support.", image: "images/maddie 3.jpg" }
    // Add more memories, jokes, or compliments that only she would understand!
];

// Final message after all surprises are shown
const finalMessage = {
    title: "The Final Celebration: To My Best Friend!",
    text: "Happy Birthday! You're the sister I chose, the best adventure buddy, and my favorite human. Here's to another year of legendary friendship!",
    image: "images/maddie 5.jpg" // A final, epic friendship image
};

// --- STEP 2: Core Logic (remains the same) ---
// ... (The rest of the script.js logic is identical to the previous version)
// ... (It handles the button clicks and displaying the content)
// ...

let currentStep = -1; // Start before the first index
const totalSteps = surprises.length;

const titleEl = document.getElementById('main-title');
const textEl = document.getElementById('message-text');
const imageEl = document.getElementById('message-image');
const buttonEl = document.getElementById('next-button');
const counterEl = document.getElementById('click-counter');

buttonEl.addEventListener('click', showNextSurprise);

function showNextSurprise() {
    currentStep++;

    if (currentStep < totalSteps) {
        const surprise = surprises[currentStep];

        titleEl.textContent = `Memory ${currentStep + 1} of ${totalSteps}!`;
        textEl.textContent = surprise.text;
        counterEl.textContent = `(Almost at the big birthday wish! You got this!)`;

        if (surprise.image) {
            imageEl.src = surprise.image;
            imageEl.style.display = 'block';
        } else {
            imageEl.src = '';
            imageEl.style.display = 'none';
        }

    } else if (currentStep === totalSteps) {
        titleEl.textContent = finalMessage.title;
        textEl.textContent = finalMessage.text;
        buttonEl.textContent = "Time to Celebrate!";
        buttonEl.disabled = true;
        counterEl.textContent = "";

        if (finalMessage.image) {
            imageEl.src = finalMessage.image;
            imageEl.style.display = 'block';
        }

    } else {
        buttonEl.disabled = true;
    }
}