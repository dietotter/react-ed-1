import React from "react"
import { Route, NavLink, Switch } from "react-router-dom";

import Featured from "./Featured"
import Settings from "./Settings"
import Archives from "./Archives"

import Footer from '../components/layout/Footer'
import Nav from '../components/layout/Nav'

export default class Layout extends React.Component {
    render() {
        console.log(this.props)
        const {location} = this.props
        const containerStyle = {
            marginTop: '60px' // or 'margin-top'
        }

        return (
            <div>
                <Nav location={location} />

                <div class="container" style={containerStyle}>
                    <h1>Barabaka.com</h1>
                    <div>
                        <Route exact path="/" component={Featured} />
                        <Route path="/settings" component={Settings} />
                        <Switch>
                            <Route path="/archives/:article" component={Archives} />
                            <Route path='/archives' component={Archives} />
                        </Switch>
                    </div>
                    <div>
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}