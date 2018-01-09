import React from 'react'

/*
// ANOTHER WAY
export default class extends React.Component{
    render(){
        const {title} = this.props

        return (
            <div className="col-xs-12 col-sm-6 col-md-4">
                <h4 style={{textAlign:"center"}}>{title}</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.</p>
                <a className="btn btn-default">More info</a>
            </div>
        )
    }
}
*/

const Article = ({title}) => (
    <div className="col-xs-12 col-sm-6 col-md-4">
        <h4 style={{textAlign:"center"}}>{title}</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.</p>
        <a className="btn btn-default">More info</a>
    </div>
)

export default Article