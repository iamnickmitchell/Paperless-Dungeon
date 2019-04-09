import apiManager from "../apiManager";

const fetchURL = "http://localhost:8080";

function shopSell(id, value, location, refresh) {
  let soldLocation = location;
  var d = new Date(),
    currentTime =
      [d.getMonth() + 1, d.getDate(), d.getFullYear()].join("/") +
      " " +
      [d.getHours(), d.getMinutes(), d.getSeconds()].join(":");
  const currentUserId = localStorage.getItem("logged-in");
  apiManager
    .user()
    .then(parsedFunds => {
      const newFunds = parsedFunds.funds + value;
      return fetch(`${fetchURL}/users/${currentUserId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ funds: newFunds })
      });
    })
    .then(() =>
      fetch(`${fetchURL}/userItems/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sold: soldLocation })
      })
    )
    .then(() =>
      fetch(`${fetchURL}/userItems/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ soldTime: currentTime })
      })
    )
    .then(() => refresh());
}
export default shopSell;
