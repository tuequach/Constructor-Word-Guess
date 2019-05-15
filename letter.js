function Letter (value) {
    this.letter = value; 
    this.guessed = true;
    this.toString = function (){
       if (this.letter === " ") {
           this.guessed === true; 
           return " ";
       } else {
           if (this.guessed === false){
               return "_";
           } else {
                return this.letter;
           }
       }
    };

    this.guess = function (guess) {
        if (guess === this.letter) {
        this.guessed = true;
        }
    }
}

module.exports = Letter;