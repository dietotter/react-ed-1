import React from "react"

import Article from '../components/Article'

/*
// ANOTHER WAY
export default class Featured extends React.Component {
    render() {
        return (
            <h1>Featured</h1>
        )
    }
}
*/

const Featured = () => {
    const Articles = [
        "Some Article",
        "Some Other Article",
        "Yet Another Article",
        "Still More"
    ].map((title, i) => <Article title={title} key={i} />)

    const adText = [
        "Ad spot #1",
        "Ad spot #2",
        "Ad spot #3",
        "Ad spot #4",
        "Ad spot #5",
    ]

    const randomAd = adText[Math.round(Math.random()*(adText.length-1))]

    return (
        <div className="container-fluid">
            <div className="col-xs-12 well text-center">
                {randomAd}
            </div>
            <div className="row">
                {Articles}
            </div>
        </div>
    )

}
export default Featured