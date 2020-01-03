import React, { Component } from 'react'
import CountButton from './CountButton'
import CountBoard from './CountBoard'

class CountComponent extends Component {

    constructor() {
        super()
        this.state = { count: 1 }
    }

    changeCount = (amount) => {
        this.setState({count: this.state.count + amount})
    }

    render() {
        return (
            <>
                <CountBoard num={this.state.count}></CountBoard>
                <CountButton label="+" wrapper={this.changeCount} amount={1}></CountButton>
                <CountButton label="-" wrapper={this.changeCount} amount={-1}></CountButton>
            </>
            )
        }
    }
    
export default CountComponent