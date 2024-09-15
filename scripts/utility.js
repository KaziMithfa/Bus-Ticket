//function for changing the color of the seat
function changeColorofSeat(id) {
  const seatNumber = document.getElementById(id);
  seatNumber.classList.remove("bg-[#F7F8F8]");
  seatNumber.classList.add("bg-[#1DD100]");
}

// function for reducing the number of total seats
function reduceTotalSeat(id) {
  const totalSeat = document.getElementById(id);
  const numberofTotalSeat = totalSeat.innerText;
  const intTotalSeat = parseInt(numberofTotalSeat) - 1;
  totalSeat.innerText = intTotalSeat;
}

// function for set the total price after selecting every seat
function setTotalPrice(id) {
  const totalPrice = document.getElementById(id);
  const totalPriceTxt = totalPrice.innerText;
  const intTotalPrice = parseInt(totalPriceTxt) + 550;
  totalPrice.innerText = intTotalPrice;
}
