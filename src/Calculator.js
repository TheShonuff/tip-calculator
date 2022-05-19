import React, { Component } from "react";
import "./Calculator.css";
import DollarSign from "./assests/images/icon-dollar.svg";
import IconPeron from "./assests/images/icon-person.svg";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { amount: "", numPeople: 0, tipPercent: 0 };
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handlePeopleChange = this.handlePeopleChange.bind(this);
    this.handleTipPercent = this.handleTipPercent.bind(this);
  }

  handleAmountChange(event) {
    this.setState({ amount: event.target.value });
  }
  handlePeopleChange(event) {
    this.setState({ numPeople: event.target.value });
  }
  handleTipPercent(event) {
    this.setState({ tipPercent: event.target.value });
    console.log(`The current tip percent is set to ${this.state.tipPercent}`);
    console.log(event.target.value);
  }
  render() {
    console.log(this.state.amount);

    return (
      <div className="Calculator">
        <div className="Controller-Container">
          <div className="Inputs">
            <h4>Bill</h4>
            <img src={DollarSign} alt="DollarSign"></img>
            <input
              type="text"
              id="bill"
              name="bill"
              value={this.state.amount}
              onChange={this.handleAmountChange}
            ></input>
            <h5>Select Tip %</h5>
            <div className="Tip-Selector">
              <button
                onClick={(event) => this.handleTipPercent(event, "value")}
                value=".05"
              >
                5%
              </button>
              <button
                onClick={(event) => this.handleTipPercent(event, "value")}
                value=".10"
              >
                10%
              </button>
              <button
                onClick={(event) => this.handleTipPercent(event, "value")}
                value=".15"
              >
                15%
              </button>
              <button
                onClick={(event) => this.handleTipPercent(event, "value")}
                value=".25"
              >
                25%
              </button>
              <button
                onClick={(event) => this.handleTipPercent(event, "value")}
                value=".50"
              >
                50%
              </button>
              <button>Custom</button>
            </div>
            <h5>Number of People</h5>
            <img src={IconPeron} alt="Person icon"></img>
            <input
              type="text"
              id="NumPeople"
              name="numPeople"
              value={this.state.numPeople}
              onChange={this.handlePeopleChange}
            ></input>
          </div>
          <div className="Results">
            <div className="result">
              <div className="TipAmount">
                <p>
                  Tip Amount
                  <br />
                  <span className="person">/ person</span>
                </p>
                <h3>
                  {(this.state.amount * this.state.tipPercent) /
                    this.state.numPeople}
                </h3>
              </div>
              <div className="PersonAmount">
                <p>
                  Tip Amount
                  <br />
                  <span className="person">/ person</span>
                </p>
                <h3>$32.79</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
