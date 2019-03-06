import React, {Component} from 'react';
import Navbar from "./navElements/navbar";
import NavigationElements from "./navElements/navigationElements"

class Kennel extends Component {

    state = {
        userItems: [],
        items: [],
        users:[],
        itemTypes:[],
        itemRarities:[]
    }



    render() {
        return (
            <div>
                <Navbar />
                <NavigationElements />
            </div>
        );
    }
}
export default Kennel;