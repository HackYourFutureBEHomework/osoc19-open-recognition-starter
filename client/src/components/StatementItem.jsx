import React from "react";

export class StatementItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text
        };
    }
    renderItem(statement) {
        return (
            <li>
                <div>{statement}</div>
            </li>
        );
    }
    render() {
        const {
            text
        } = this.props;
  
        return this.renderItem(
                text
              );
 
    }
}
