import NavigationElements from "../navElements/navigationElements"
const fetchURL = "http://localhost:8080";

function shopBuy(id, value) {
  let funds = 0;
  const currentUserId = localStorage.getItem("logged-in");
  fetch(`${fetchURL}/users/${currentUserId}`)
    .then(user => user.json())
    .then(parsedFunds => {
      funds = parsedFunds.funds;
    })
    .then(() => {
      const newItem = {
        userId: localStorage.getItem("logged-in"),
        itemId: id
      };
      if (Number(funds) >= Number(value)) {
        fetch(`${fetchURL}/userItems`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newItem)
        }).then(
            fetch(`${fetchURL}/users/${currentUserId}`)
    .then(user => user.json())
    .then(parsedFunds => {
      parsedFunds.funds = parsedFunds.funds - value
            fetch(`${fetchURL}/users/${currentUserId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(parsedFunds)
          })})
        )
    .then(NavigationElements.refresh())
      } else {
        alert("Error: Insufficient Funds");
      }
    });
}
export default shopBuy;
