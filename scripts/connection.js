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
const phoneNumberInput = document.getElementById("phoneNumber");
const nextBtn = document.getElementById("nextBtn");

let count = 0;
const containId = [];

for (const seat of allSeat) {
  seat.addEventListener("click", function (event) {
    const seatName = event.target.innerText;
    if (!containId.includes(seatName)) {
      count++;
      if (count > 4) {
        alert("You can not buy more than 4 tickests");
      } else {
        containId.push(seatName);

        reduceTotalSeat("total-seat");

        changeColorofSeat(seatName);
        increaseSeatNumber("selected-seat");

        const selectContainer = document.getElementById(
          "selectedseat-container"
        );
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

        //here I am working on coupon and grand total
        if (count == 4) {
          setTotalPrice("grand-total");
          var applyBtn = document.getElementById("apply-coupon");
          applyBtn.disabled = false;
        } else {
          setTotalPrice("grand-total");
        }
      }
    }
  });
}

//this is for handling the bonus
const applyBtn = document.getElementById("apply-coupon");
applyBtn.addEventListener("click", function () {
  const coupon = document.getElementById("coupon-text");
  const couponTxt = coupon.value;
  const bonusp = document.getElementById("discountP");
  const bonus = document.getElementById("discount");

  //15 % discount
  if (couponTxt === "NEW15") {
    const grandtotalTxt = document.getElementById("grand-total");
    const totalPriceTxt = document.getElementById("tk").innerText;
    const totalPrice = parseInt(totalPriceTxt);
    const grandtotalInt = parseInt(grandtotalTxt.innerText);
    const grandTotal = totalPrice - (totalPrice * 15) / 100;
    grandtotalTxt.innerText = grandTotal;
    applyBtn.classList.add("hidden");
    coupon.classList.add("hidden");

    bonusp.classList.remove("hidden");
    bonus.innerText = (totalPrice * 15) / 100;
  }

  //20 % discount
  else if (couponTxt === "Couple 20") {
    const grandtotalTxt = document.getElementById("grand-total");
    const totalPriceTxt = document.getElementById("tk").innerText;
    const totalPrice = parseInt(totalPriceTxt);
    const grandtotalInt = parseInt(grandtotalTxt.innerText);
    const grandTotal = totalPrice - (totalPrice * 20) / 100;
    grandtotalTxt.innerText = grandTotal;

    applyBtn.classList.add("hidden");
    coupon.classList.add("hidden");

    bonusp.classList.remove("hidden");
    bonus.innerText = (totalPrice * 15) / 100;
  } else {
    alert("Please insert a valid Coupon");
    return;
  }
});

//here the work of final Next button is starting

function checkConditions() {
  const phoneNumbertxt = phoneNumberInput.value.trim();
  if (containId.length > 0 && phoneNumbertxt !== "") {
    nextBtn.disabled = false;
    console.log("everything is okay");
  } else {
    nextBtn.disabled = true;

    console.log("not okay");
  }
}

//function to showModal

function showModal() {
  const modal = document.getElementById("successModal");
  modal.classList.remove("hidden");
}

// function to hideModal

function closeModal() {
  const modal = document.getElementById("successModal");
  modal.classList.add("hidden");
}

//
nextBtn.addEventListener("click", function () {
  checkConditions();
  showModal();
});
