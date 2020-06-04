import React, { Component } from 'react'
import NanoRepeatFullWhite from './svg/NanoRepeatFullWhite'
import WindowClose from './elements/WindowClose'
import ChangeForwardingAddressForm from './forms/ChangeForwardingAddressForm'

export default class ChangeForwardingAddress extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            token: ''
        }
    }

    componentDidMount() {
        document.body.classList.remove('stripe-from-left')
        const { match: { params } } = this.props;
        this.setState({token: params.token})
    }

    render() {
        return (
            <div className="flex flex-row flex-grow min-h-full text-center">
                <div className=" flex-2 bg-purple-700 hidden max-w-3/7 w-full lg:inline-block">
                    <div className="m-auto py-20 max-w-4/7 w-full">
                        <NanoRepeatFullWhite />
                    </div>
                    <p className="text-white ml-auto mr-auto pb-10">Subscriptions made simple</p>
                </div>
                <div className="flex-4 min-h-full inline-block">
                    <WindowClose color="text-green-500" />
                    <h1 className="text-2xl pt-20 pb-10">Change Forwarding Address</h1>
                    <ChangeForwardingAddressForm token={this.state.token}/>
                </div>
                
            </div>
        )
    }
}
