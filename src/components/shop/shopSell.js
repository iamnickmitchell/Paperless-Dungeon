import apiManager from "../apiManager";

const fetchURL = "http://localhost:8080";


function shopSell(id, value, location, refresh) {
  let soldLocation = location
  const currentUserId = localStorage.getItem("logged-in");
  apiManager.user()
    .then(parsedFunds => {
      parsedFunds.funds += value;
      fetch(`${fetchURL}/users/${currentUserId}`, {
        method: "Patch",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({"funds": parsedFunds})
      })
    })
    .then(fetch(`${fetchURL}/userItems/${id}`)
    .then(items => items.json())
    .then(parsedItem => {
        parsedItem.sold = soldLocation
        fetch(`${fetchURL}/userItems/${id}`, {
            method: "Patch",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({"sold": soldLocation})
          })
    })).then(()=>refresh())
}
export default shopSell;
