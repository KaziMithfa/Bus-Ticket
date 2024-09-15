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
const containId = [];
for (const seat of allSeat) {
  seat.addEventListener("click", function (event) {
    const seatName = event.target.innerText;
    if (!containId.includes(seatName)) {
      containId.push(seatName);

      count++;

      if (count == 4) {
        var applyBtn = document.getElementById("apply-coupon");
        applyBtn.disabled = false;
      }

      reduceTotalSeat("total-seat");

      changeColorofSeat(seatName);

      const selectContainer = document.getElementById("selectedseat-container");
      const li = document.createElement("li");

      const p1 = document.createElement("p");
      p1.innerText = seatName;
      const p2 = document.createElement("p");
      p2.innerText = "Economy";
      const p3 = document.createElement("p");
      p3.innerText = 550;

      li.appendChild(p1);
      li.appendChild(p2);
      li.appendChild(p3);

      selectContainer.appendChild(li);

      setTotalPrice("tk");
    }
  });
}
