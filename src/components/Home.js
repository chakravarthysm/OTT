import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import Dashboard from './dashboard'
import Navigation from './navigation'

class Home extends Component {
    render() {
        return (
            <div>
                <Header>
                    <Navigation />
                </Header>
                <Dashboard />
            </div>
        )
    }
}

export default Home