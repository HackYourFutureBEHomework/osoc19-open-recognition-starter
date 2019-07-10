import React from "react";
import { StatementItem } from "./StatementItem";
//import axios from "axios";

export class StatementList extends React.Component {
    constructor() {
        super();
        this.state = {
            statements: []
        };
    }

    componentDidMount = async () => {
        const data = await fetch("/api/statements/");
        const jsonData = await data.json();
        this.setState({
            statements: jsonData
        });
    };

    render() {
        return (
            <div>
                <ul>
                    {this.state.statements.map((value, index) => {
                        return (
                            <StatementItem
                                text={value.text}
                                key={index}
                            />
                        );
                    })}
                </ul>
            </div>
        );
    }
}