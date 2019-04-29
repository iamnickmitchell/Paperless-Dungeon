const fetchURL = "https://dnd-web-tool.herokuapp.com";

const apiManager = {
  user: currentUserId =>
    fetch(`${fetchURL}/users/${currentUserId}`).then(user => user.json()),
  groups: () => fetch(`${fetchURL}/groups`).then(groups => groups.json()),
  userItems: currentUserId =>
    fetch(`${fetchURL}/userItems?userId=${currentUserId}&_expand=item`).then(
      userItems => userItems.json()
    ),
  items: () => fetch(`${fetchURL}/items`).then(item => item.json()),
  location: () =>
    fetch(`${fetchURL}/locations`).then(location => location.json()),
  playerLocations: currentUserId =>
    fetch(`${fetchURL}/playerLocations/${currentUserId}?_expand=location`).then(
      user => user.json()
    ),
  login: () => fetch(`${fetchURL}/users`).then(login => login.json()),
  register: createUser => {
    fetch(`${fetchURL}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(createUser)
    });
  },
  rewardItemCreate: giveItem =>
    fetch(`${fetchURL}/userItems`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(giveItem)
    }),
  itemCreate: createItem => {
    return fetch(`${fetchURL}/items`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(createItem)
    });
  },
  itemEdit: (editItem, id) => {
    return fetch(`${fetchURL}/items/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editItem)
    });
  },
  shopBuyOne: currentUserId =>
    fetch(`${fetchURL}/users/${currentUserId}`).then(user => user.json())
};
export default apiManager;
