//using this function by clicking buy-tickets button we can scroll through the buying ticket section
function Scroll() {
  document.getElementById("target-section").scrollIntoView({
    behavior: "smooth",
    //we use this property to make the scroll smooth
  });
}

//it is the function of handlingSeat

//Here we are doing code clicking on the seat to select it

const allSeat = document.getElementsByClassName("select-option");
let count = 0;
for (const seat of allSeat) {
  seat.addEventListener("click", function (event) {
    const seatName = event.target.innerText;
    changeColorofSeat(seatName);
  });
}
