let data = null; // storing json object
let current = 0;

async function getData(){ //function for fetching data
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        data = await response.json(); //gives data to data variable
}

function drawCard(text, title){ //function for adding everything to the card and into class/id
    const card = document.createElement("div");
    card.classList.add('card');

    const header = document.createElement("h3");
    header.textContent = title;
    card.appendChild(header);

    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    card.appendChild(paragraph);

    document.getElementById("container").appendChild(card);
    current++;
}

const bottomIsVisible = () => // for recognizing scrolling down
    document.documentElement.clientHeight + window.scrollY >=
    document.documentElement.scrollHeight - 400;

async function main() {
    await getData();
    for (let i = 0; i < 9; i++) { //first 9 cards
        drawCard(data[current].body, data[current].title);
    }
    addEventListener("scroll", () => {
        if (bottomIsVisible()) {
            for (let i = 0; i < 3; i++) { //+ 3 cards
                if (current < data.length) {
                    drawCard(data[current].body, data[current].title);
                }
            }
        }
    });
}
main();