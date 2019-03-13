const currentUserId = 1;

const apiManager = {
  user: fetch(`http://localhost:8080/users/${currentUserId}`).then(user =>
    user.json()
  ),
  userItems: fetch(
    `http://localhost:8080/userItems?userId=${currentUserId}&&_expand=item`
  ).then(userItems => userItems.json()),
  location: fetch("http://localhost:8080/locations").then(location =>
    location.json()
  ),
  login: fetch("http://localhost:8080/users").then(login => login.json())
  // putToGroupFunds:
  //   fetch(`http://localhost:8080/group/${1}`, {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify("groupFunds[0]")
  //   }),
  // putToDays:
  //   fetch(`http://localhost:8080/days/${1}`, {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify("dayCount[0]")
  //   }),
};

export default apiManager;
