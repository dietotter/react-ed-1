import React from "react"

export default class Archives extends React.Component {
    render() {
        // console.log(this.props)
        const { match, location } = this.props
        const { article } = match.params
        const { search } = location

        let resArray = []
        let queryArray = search.split('&')
        queryArray.forEach(param => {
            let indexOfEqual = param.indexOf('=')
            resArray.push(param.slice(indexOfEqual+1))
        })

        return (
            <div>
                <h1>Archives ({article})</h1>
                date: {resArray[0]}, filter: {resArray[1]}
            </div>
        )
    }
}