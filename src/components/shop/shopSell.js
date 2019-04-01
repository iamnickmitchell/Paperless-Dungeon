import apiManager from "../apiManager";

const fetchURL = "http://localhost:8080";

function shopSell(id, value, location, refresh) {
  let soldLocation = location;
  const currentUserId = localStorage.getItem("logged-in");
  apiManager
    .user()
    .then(parsedFunds => {
      const newFunds = parsedFunds.funds + value;
      console.log(newFunds);
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
        body: JSON.stringify({ soldTime: Date.now() })
      })
    )
    .then(() => refresh());
}
export default shopSell;
