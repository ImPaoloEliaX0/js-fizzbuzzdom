

let containerElement = document.getElementById('container');

let fizChoice ="" ;

for(let i=2; i<=1000;i++) {

    if(i%3 == 0 && i%5==0){  /*multiplo di 3 e 5 insieme */

        fizChoice = "fizzbuz";

        containerElement.innerHTML += "<div class='box red'>" + fizChoice +" </div>";

    }else if(i%5 == 0 && i%3 != 0) { /*multiplo di 5 */

        fizChoice = "buzz";

        containerElement.innerHTML += "<div class='box yellow'>" + fizChoice +" </div>";

    }else if (i%3 == 0 && i%5 !=0) {   /*multiplo di 3 */

        fizChoice = "fizz";

    containerElement.innerHTML += "<div class='box green'>" + fizChoice +" </div>";

    }else {   /*numeri normali */

        containerElement.innerHTML += "<div class='box '>" + i +" </div>";
    }
}
