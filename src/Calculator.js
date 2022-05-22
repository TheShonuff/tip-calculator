import React, { Component } from "react";
import "./Calculator.css";
import DollarSign from "./assests/images/icon-dollar.svg";
import IconPeron from "./assests/images/icon-person.svg";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      numPeople: "",
      tipPercent: 0,
      customTipAmount: "",
      customTip: false,
      buttonDisable: true,
    };
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handlePeopleChange = this.handlePeopleChange.bind(this);
    this.handleTipPercent = this.handleTipPercent.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleCustomTip = this.handleCustomTip.bind(this);
  }
  handleReset(event) {
    this.setState({
      amount: "",
      tipPercent: 0,
      numPeople: "",
      buttonDisable: true,
    });
  }

  handleAmountChange(event) {
    this.setState({ amount: event.target.value, buttonDisable: false });
  }

  handleCustomTip(event) {
    this.setState({ customTipAmount: event.target.value, customTip: true });
  }
  handlePeopleChange(event) {
    this.setState({ numPeople: event.target.value });
  }
  handleTipPercent(event) {
    this.setState({ tipPercent: event.target.value, customTip: false });
  }
  calculateTipAmount() {
    let result = 0;
    if (this.state.customTip === false) {
      result =
        (this.state.amount * this.state.tipPercent) / this.state.numPeople;
    } else {
      result =
        (this.state.amount * (this.state.customTipAmount / 100)) /
        this.state.numPeople;
    }
    return result.toFixed(2);
  }
  calculateTotalAmount() {
    const tipAmount = this.calculateTipAmount();
    const subtotal = this.state.amount / this.state.numPeople;
    const total = parseFloat(tipAmount, 10) + parseFloat(subtotal, 10);
    return total.toFixed(2);
  }
  render() {
    return (
      <div className="Calculator">
        <div className="Controller-Container">
          <div className="Inputs">
            <h4>Bill</h4>
            <div className="BillInput">
              <img src={DollarSign} alt="DollarSign"></img>
              <input
                type="text"
                id="bill"
                name="bill"
                placeholder="0"
                value={this.state.amount}
                onChange={this.handleAmountChange}
              ></input>
            </div>
            <h5>Select Tip %</h5>
            <div className="Tip-Selector">
              <button
                className={
                  this.state.tipPercent === "0.05" &&
                  this.state.customTip === false
                    ? "Active"
                    : ""
                }
                onClick={(event) => this.handleTipPercent(event, "value")}
                value="0.05"
              >
                5%
              </button>
              <button
                className={
                  this.state.tipPercent === "0.10" &&
                  this.state.customTip === false
                    ? "Active"
                    : ""
                }
                onClick={(event) => this.handleTipPercent(event, "value")}
                value="0.10"
              >
                10%
              </button>
              <button
                className={
                  this.state.tipPercent === "0.15" &&
                  this.state.customTip === false
                    ? "Active"
                    : ""
                }
                onClick={(event) => this.handleTipPercent(event, "value")}
                value="0.15"
              >
                15%
              </button>
              <button
                className={
                  this.state.tipPercent === "0.25" &&
                  this.state.customTip === false
                    ? "Active"
                    : ""
                }
                onClick={(event) => this.handleTipPercent(event, "value")}
                value="0.25"
              >
                25%
              </button>
              <button
                className={
                  this.state.tipPercent === "0.50" &&
                  this.state.customTip === false
                    ? "Active"
                    : ""
                }
                onClick={(event) => this.handleTipPercent(event, "value")}
                value="0.50"
              >
                50%
              </button>
              <input
                type="text"
                id="CustomTip"
                name="CustomTip"
                placeholder="Custom"
                value={
                  this.state.customTip === true
                    ? this.state.customTipAmount
                    : ""
                }
                onChange={this.handleCustomTip}
              ></input>
            </div>

            <div className="NumberOfPeopleInput">
              <h5>Number of People</h5>
              <img src={IconPeron} alt="Person icon"></img>
              <input
                type="text"
                // id="NumPeople"
                className="NumPeople"
                name="numPeople"
                placeholder="0"
                value={this.state.numPeople}
                onChange={this.handlePeopleChange}
              ></input>
            </div>
          </div>
          <div className="result">
            <div className="TipAmount">
              <p>
                Tip Amount
                <br />
                <span className="person">/ person</span>
              </p>
              <h3>
                $
                {this.state.amount !== "" && this.state.numPeople !== ""
                  ? this.calculateTipAmount()
                  : "0.00"}
              </h3>
            </div>
            <div className="PersonAmount">
              <p>
                Total
                <br />
                <span className="person">/ person</span>
              </p>
              <h3>
                $
                {this.state.amount !== "" && this.state.numPeople !== ""
                  ? this.calculateTotalAmount()
                  : "0.00"}
              </h3>
            </div>
            <button
              className={this.state.buttonDisable ? "Disabled Reset" : "Reset"}
              onClick={this.handleReset}
              disabled={this.state.buttonDisable}
            >
              RESET
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
