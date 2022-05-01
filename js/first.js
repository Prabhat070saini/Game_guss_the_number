const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('button');
let play = false;
let randomnumber;
// btn.addEventListener("click", function(){ alert("Hello World!"); },false);
btn.addEventListener('click', function () {
    if (!play) {
        play = true;
        guess.classList.toggle("hidden");
        btn.innerHTML = "Guess";
        randomnumber = Math.floor(Math.random() * 100);
        msg.innerHTML = "Guess number between 1 to 100";



    }
    else {
        let tamp = guess.value;
        if (tamp == randomnumber) {
            play = false;
            console.log("corret");
            msg.innerHTML = `YOU WIN`
            btn.innerHTML = "Start Again";
            guess.classList.toggle("hidden");
            guess.value = "";


        }
        else if (tamp > randomnumber) {
            msg.innerHTML = `Please Enter less then ${tamp}`;
        }
        else {
            msg.innerHTML = `Please Enter Greather then ${tamp}`;
        }


    }

})