// function userItems(currentUserId) {
//     let itemList = "";
//     fetch(
//       `https://dnd-web-tool.herokuapp.com/userItems?userId=${currentUserId}&&_expand=item`
//     )
//       .then(userItems => userItems.json())
//       .then(userItems => {
//         for (let i = 0; i < userItems.length; i++) {
//           itemList += `<div class="itemDOMComponent"><p>${userItems[i].item.name} (<a href=${userItems[i].item.url} target="_blank">info</a>)</p><p>${userItems[i].item.value}</p></div><p class="line"></p>`
//           document.getElementById("items").innerHTML = `${itemList}`
//         }
//       });
//   }

//   export default userItems;

import React, { Component } from "react";

class CharacterItems extends Component {
  state = {
    items: this.props.items
  };

  componentDidMount() {}
  render() {
    return (
        <div className="items">
        <p>{this.props.item.item.name}</p>
        <p>  </p>
        <p>{this.props.item.item.damage}</p>
        <p>  </p>
        <p>{this.props.item.item.accuracy}</p>
        <p></p>
        </div>
    );
  }
}

export default CharacterItems;
