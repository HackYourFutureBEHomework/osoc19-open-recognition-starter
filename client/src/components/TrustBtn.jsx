import React from "react";

export class TrustBtn extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         title: ""
    //     };
    // }

    render() {
        return (
            <div className="TrustButtonArea">
                <div className="TrustButton">
                    <button className="TrstBtn">I trust this person</button>
                </div>
                <div className="CounterOfContact">
                    <h3>13</h3>
                </div>
            </div>
        );
    }
}
