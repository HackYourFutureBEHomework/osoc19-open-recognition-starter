import React from "react";
import { StatementItem } from "./StatementItem";
import axios from "axios";

export class StatementList extends React.Component {
    constructor() {
        super();
        this.state = {
            statements: []
        };
    }

    render() {
        return (
            <div>
                <StatementItem />
            </div>
        );
    }
}