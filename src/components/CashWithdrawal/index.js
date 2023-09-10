// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {cash: 2000}

  decrementValue = id => {
    const {denominationsList} = this.props
    denominationsList.forEach(eachDenomination => {
      if (eachDenomination.id === id) {
        this.setState(prev => ({cash: prev.cash - eachDenomination.value}))
      }
    })
  }

  render() {
    const {cash} = this.state
    const {denominationsList} = this.props

    return (
      <div className="cashwithdrawl-bg">
        <div className="cash-withdrawl-container">
          <div className="profile-section">
            <div className="logo-style">
              <h1>S</h1>
            </div>
            <h1 className="person-title">Sarah Williams</h1>
          </div>

          <div className="balance-box">
            <p className="balance-title"> Your Balance </p>
            <p className="balance-amount"> {cash} </p>
          </div>
          <div className="in-ruppes-box">
            <p className="balance-in-rupees"> In Rupees</p>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose-amount">CHOOSE SUM (IN RUPEES) </p>
          <ul className="button-list">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                value={eachDenomination.value}
                key={eachDenomination.id}
                id={eachDenomination.id}
                decrementValue={this.decrementValue}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
