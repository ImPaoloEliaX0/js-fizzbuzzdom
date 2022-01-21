let containerElement = document.getElementById('container');

for(let i=0; i<=1000;i++) {

    if(i%3 == 0 && i%5==0){  /*multiplo di 3 e 5 */

        containerElement.innerHTML += "<div class='boxblue'>" + i +" </div>";

    }else if(i%5 == 0 && i%3 != 0) {

        containerElement.innerHTML += "<div class='boxyellow'>" + i +" </div>";

    }else if (i%3 == 0 && i%5 !=0)
    containerElement.innerHTML += "<div class='boxred'>" + i +" </div>";
}