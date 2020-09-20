import React, { Component } from 'react'
import Proptypes from 'prop-types'

export default class CommentItem extends Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted'
        }
    }

    render() {
        console.log('poraqui', this.props.comment)
        const { id, name } = this.props.comment;
        return (
            <div style={this.getStyle()}>
                <p>{name} </p>
                <button onClick={this.props.delComment.bind(this, id)}>X</button>
            </div>
        )
    }
}

CommentItem.propTypes = {
    comment: Proptypes.object.isRequired
}