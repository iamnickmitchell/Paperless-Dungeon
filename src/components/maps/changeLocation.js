function changeLocation(locationCode, locationRefresh) {
  const fetchURL = "https://dnd-web-tool.herokuapp.com";
  const currentUserId = localStorage.getItem("logged-in");
  var d = new Date(),
    currentTime =
      [d.getMonth() + 1, d.getDate(), d.getFullYear()].join("/") +
      " " +
      [d.getHours(), d.getMinutes(), d.getSeconds()].join(":");

  fetch(`${fetchURL}/locations`)
    .then(location => location.json())
    .then(location => {
      for (let i = 0; i < location.length; i++) {
        if (String(locationCode) === String(location[i].locationCode)) {
          return fetch(`${fetchURL}/playerLocations/${currentUserId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ locationId: location[i].id })
          }).then(() =>
            fetch(`${fetchURL}/playerLocations/${currentUserId}`, {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ arrivalTime: currentTime })
            })
          );
        } else {
        }
      }
    })
    .then(() => locationRefresh());
}

export default changeLocation;
