import React, { Component } from "react";

class Main extends Component {
    render() {
        return (
                <div>
                    <h1>Budget Tracker</h1>
                    <div className="content">
                    </div>
                    <div className="wrapper">
                        <div className="total">
                            <h2>Total Amount Available: $<span id="total">0</span></h2>
                        </div>
                    </div>

                    <form>
                        <h3><label htmlFor="t-name">Transaction Name:</label>
                            <input type="text" id="t-name" placeholder="Name" margin="normal" /></h3>

                        <h3><label htmlFor="t-amount">Transaction Amount:</label>
                            <input type="number" min="0" id="t-amount" placeholder="Amount" margin="normal" /></h3>

                        <div className="transaction-buttons">
                            <h3>Are you making a deposit or deduction from your account?</h3>
                            <button id="add-btn"><i className="fa fa-plus"></i> Deposit $</button>
                            <button id="sub-btn"><i className="fa fa-minus"></i> Deduct $</button>
                        </div>
                        <p role="alert" className="error"></p>
                    </form>

                    <div className="transactions">
                        <table>
                            <thead>
                                <tr>
                                    <th>Transaction:</th>
                                    <th>Amount:</th>
                                </tr>
                            </thead>
                        <tbody id="tbody"></tbody>
                        </table>
                </div>
                </div>

        );
    }
}

export default Main;