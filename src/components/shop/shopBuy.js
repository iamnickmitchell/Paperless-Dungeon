import apiManager from "../apiManager";

const fetchURL = "http://localhost:8080";

function shopBuy(id, value, location, refresh) {
  let funds = 0;
  let boughtLocation = location;
  const currentUserId = localStorage.getItem("logged-in");
  apiManager
    .shopBuyOne()
    .then(parsedFunds => {
      funds = parsedFunds.funds;
    })
    .then(() => {
      const newItem = {
        userId: localStorage.getItem("logged-in"),
        itemId: id,
        bought: boughtLocation,
        sold: null
      };
      if (Number(funds) >= Number(value)) {
        apiManager
          .user()
          .then(parsedFunds => {
            const newFunds = parsedFunds.funds - value;
            fetch(`${fetchURL}/users/${currentUserId}`, {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ funds: newFunds })
            });
          })
          .then(
            fetch(`${fetchURL}/userItems`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(newItem)
            })
          )
          .then(() =>
            refresh()
          );
      } else {
        alert("Error: Insufficient Funds");
      }
    });
}
export default shopBuy;
