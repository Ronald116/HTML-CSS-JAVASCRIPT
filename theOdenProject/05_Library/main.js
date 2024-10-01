const myLibrary = []

 function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`);
    }
}

function addBookToLibrary() {
    
};

addBookToLibrary();

/*const thePowerOfHabit = new Book("The Power of Habit", "Charles Duhigg", 350, "not yet");
const atomicHabit = new Book("Atomic Habit", "James Clear", 200, "not yet");
const fortyEightlawsOfPower = new Book("The 48 Laws of Power", "Robert Greene", 620, "completed");
const theAlchemist = new Book("The Alchemist", "Paulo Coelho", 150, "completed");
const thinkAndGrowRich = new Book("Think and Grow Rich", "Napoleon Hill", 401, "completed");

myLibrary.push(thePowerOfHabit, atomicHabit, fortyEightlawsOfPower, theAlchemist, thinkAndGrowRich);*/

function displayBooks() {
    for (let book in myLibrary) {
        console.log();
    }
};

displayBooks();