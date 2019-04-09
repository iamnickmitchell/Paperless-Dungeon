function changeLocation(locationCode, locationRefresh) {
  const fetchURL = "http://localhost:8080";
  const currentUserId = localStorage.getItem("logged-in");

  fetch(`${fetchURL}/locations`)
    .then(location => location.json())
    .then(location => {
      for (let i = 0; i < location.length; i++) {
        if (String(locationCode) === String(location[i].locationCode)) {
          return fetch(`${fetchURL}/playerLocations/${currentUserId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ locationId: location[i].id })
          });
        } else {}
      }
    })
    .then(() => locationRefresh());
}

export default changeLocation;