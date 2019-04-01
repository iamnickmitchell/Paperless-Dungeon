const fetchURL = "http://localhost:8080";

function shopDelete(id, refresh) {
 return fetch(`${fetchURL}/items/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ legal: false })
  })
  .then(()=>refresh())
}
export default shopDelete;
