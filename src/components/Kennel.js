import React, {Component} from 'react';
import Navbar from "./navElements/navbar";
import NavigationElements from "./navElements/navigationElements"
class Kennel extends Component {

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