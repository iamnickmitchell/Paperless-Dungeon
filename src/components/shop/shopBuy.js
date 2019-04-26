import apiManager from "../apiManager";

const fetchURL = "https://dnd-web-tool.herokuapp.com";

function shopBuy(id, value, location, weight, refresh, carryRefresh) {
  let funds = 0;
  var d = new Date(),
    currentTime =
      [d.getMonth() + 1, d.getDate(), d.getFullYear()].join("/") +
      " " +
      [d.getHours(), d.getMinutes(), d.getSeconds()].join(":");

  const currentUserId = localStorage.getItem("logged-in");
  apiManager
    .shopBuyOne(currentUserId)
    .then(parsedFunds => {
      funds = parsedFunds.funds;
    })
    .then(() => {
      const newItem = {
        userId: localStorage.getItem("logged-in"),
        itemId: id,
        bought: location,
        boughtTime: currentTime,
        sold: null,
        soldTime: null
      };

      if (Number(funds) >= Number(value)) {
        apiManager
          .user(currentUserId)
          .then(parsedFunds => {
            const newFunds = parsedFunds.funds - value;
            return fetch(`${fetchURL}/users/${currentUserId}`, {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ funds: newFunds })
            });
          })
          .then(() =>
            fetch(`${fetchURL}/userItems`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(newItem)
            })
          )
          .then(() => {
            apiManager.user(currentUserId)
            .then(user => {
              const newWeight = user.currentWeight + weight;
              return fetch(`${fetchURL}/users/${currentUserId}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ currentWeight: newWeight })
              });
            });
          })
          .then(() => refresh())
          .then(() => carryRefresh())
      } else {
        alert("Error: Insufficient Funds");
      }
    });
}
export default shopBuy;