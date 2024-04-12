// 1. Zrozumienie koncepcji:
// 1a. Słowo kluczowe "this" pozwala odwołać się do aktualnie analizowanego obiektu. Umożliwia uzyskanie dostępu do właściwości i metod konkretnego obiektu.

// 1b. Przykłady demonstrujące słowo kluczowe "this":
//Przykład 1 - Funkcja do wywoływania koloru umaszczenia dla kota

// Obiekt cat
const cat = {
// Właściwości obiektu cat
    catName: "Chia",
    color: "black", 
// Metoda zapisująca umaszczenie kota w konsoli
    showColor() {
// Funkcja do wyświetlania umaszczenia, obiektu cat w konsoli
        console.log(this.color);
    }
};

// Wywołanie metody showColor dla obiektu cat
cat.showColor(); // Output: black 


//Przykład 2 - Funkcja do powitania kilenta. 

// Obiekt client
const client = {
// Właściwości obiektu client
    name: "Chris",
    surname: "Pratt",
    age: "30",
// Metoda wywołująca powitanie
    greet: function() {
// Funkcja do wyświetlania imienia z danego obiektu przy powitaniu
        console.log("Hi " + this.name + "! I am your personal assistant. How can I help you?");
    }
};

// Wywołanie metody powitanie dla obiektu client
client.greet(); // Output: Hi Chris! I am your personal assistant. How can I help you?


// 2. Zastosowanie praktyczne:

// Obiekt person
const person = {
// Właściwości obiektu person
    username: "Maciej",
// Metoda zapisująca imię w konsoli
    showName() {
// Funkcja do wyświetlania imienia z obiektu person 
        console.log("My name is " + this.username + "! Nice to meet you!");
    }
};

// Wywołanie metody showName dla obiektu person
person.showName(); // Output: My name is Maciej! Nice to meet you! 


// 3. Rozszerzony przykład:

// Obiekt bookshelf
const bookshelf = {
// Właściwości obiektu bookshelf
    authors: ["Stephen King", "Rick Riordan", "J.K.Rowling"],
// Metoda zwracająca tablicę autorów dle obiektu bookshelf
    getAuthors(){
        return this.authors;
    },
// Metoda dodająca autora do tablicy autorów w obiekcie bookshelf
    addAuthor (authorName) {
        this.authors.push(authorName);
    },
}; 

// Wyświetlenie autorów znajdujących się w obiekcie bookshelf
console.log(bookshelf.getAuthors()); 

// Dodanine autorów do tablicy authors w obiekcie bookshelf
bookshelf.addAuthor("Frank Herbert");
bookshelf.addAuthor("Fiodor Dostojewski");

// Ponowne wyświetlenie tablicy z autorami znajdującej się w obiekcie bookshelf
console.log(bookshelf.getAuthors());