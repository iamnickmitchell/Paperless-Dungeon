let currentUserId = localStorage.getItem("logged-in");
if (currentUserId === null) {
  currentUserId = 1;
}

const fetchURL = "http://localhost:8080"

const apiManager = {
  user: () =>
    fetch(`${fetchURL}/users/${currentUserId}`).then(user =>
      user.json()
    ),
  userItems: () =>
    fetch(
      `${fetchURL}/userItems?userId=${currentUserId}&_expand=item`
    ).then(userItems => userItems.json()),
  items: () => fetch(`${fetchURL}/items`).then(item => item.json()),
  location: () =>
    fetch(`${fetchURL}/locations`).then(location => location.json()),
  playerLocations: () =>
    fetch(`${fetchURL}/playerLocations/${currentUserId}?_expand=location`).then(user =>
      user.json()
    ),
  login: () => fetch(`${fetchURL}/users`).then(login => login.json()),
  register: createUser => {
    fetch(`${fetchURL}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(createUser)
    });
  },
  itemCreate: createItem => {
    return fetch(`${fetchURL}/items`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(createItem)
    });
  },
  shopBuyOne: () => fetch(`${fetchURL}/users/${currentUserId}`)
    .then(user => user.json())
};
export default apiManager;
