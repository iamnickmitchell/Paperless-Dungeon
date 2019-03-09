const currentUserId = 1;
const groupId = 1;
const groupFunds = 50000;
const dayCount = 1;

const apiManager = {
  username:()=>{
    fetch(`http://localhost:8080/users/${currentUserId}`)
    .then(user => user.json())
    .then(parsedUser => {const username = parsedUser.name
    return username})
  },
  userFunds:()=>{
    fetch(`http://localhost:8080/playerFunds/${currentUserId}`)
    .then(userFunds => userFunds.json());
  },
  userItems: function userItems() {
    fetch(
      `http://localhost:8080/userItems?userId=${currentUserId}&&_expand=item`
    ).then(userItems => userItems.json());
  },
  days: function days() {
    fetch("http://localhost:8080/days").then(clicks => clicks.json());
  },
  groupFunds: function groupFunds() {
    fetch("http://localhost:8080/group").then(group => group.json());
  },
  groupFundsTable: function groupFundsTable() {
    fetch("http://localhost:8080/group").then(group => group.json());
  },
  putToGroupFunds: function putToGroupFunds() {
    fetch(`http://localhost:8080/group/${groupId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(groupFunds[0])
    });
  },
  putToDays: function putToDays() {
    fetch(`http://localhost:8080/clicks/${groupId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dayCount[0])
    });
  }
};

export default apiManager;