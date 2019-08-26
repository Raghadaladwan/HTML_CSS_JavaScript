// ### SuperHero
function SuperHero(){
    name = 'yaser';
    age = 24;
     
    function fun(){
     
        console.log(name);

    }

}
var one = new SuperHero();
one.name = 'Raghad';
one.age = 22;

// ###End SuperHero

// ### Sing a Song 
function Song(){
   this.songName ='A day in the Life';
   this.bandName = 'The Beatles';

}


 Song.prototype.countName = function(str){
    string = str.split(" ");
    console.log(string.lenght);
}

Song.prototype.createElement = function(){
    $('body').append(`${this.songName} ` + `${this.bandName}`);

}

songInstance = new Song();
songInstance.createElement();
// ###End Sing a Song 

// ### The Cat
function cat(tiredness,hunger,lonliness,happiness)
{
    this.tiredness = tiredness;
    this.hunger = hunger;
    this.lonliness = lonliness;
    this.happiness = happiness;

    this.feed = function(hunger){
    tiredness--;
    happiness++;
    hunger--;
    }

    this.sleep=function (tiredness){
    tiredness--;
    happiness++;

    }
    this.pet=function (lonliness){
     
    happiness++;

    }

}

// ###End The Cat

// ### The Reading List

function BookList(numOfBooksRead,numOfBooksNotRead,referenceNextBook,referenceCurrentBook,referenceLastBook, arrOfBooks) {
    this.numOfBooksRead = numOfBooksRead ;
    this. numOfBooksNotRead = numOfBooksNotRead;    
    this.referenceNextBook = referenceNextBook;
    this.referenceCurrentBook = referenceCurrentBook;
    this.referenceLastBook = referenceLastBook;
    this.arrayofBooks=[];


    this.add=function(){
        arrayofBooks.push(this.title);
    }
}


function Book(title, genre, author, read, readDate) {
    this.title = title ;
    this. genre = genre;    
    this.author = author;
    this.read = read;
    this.readDate = readDate;

}

book1 = new Book();
