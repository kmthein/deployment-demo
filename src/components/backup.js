import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText} from 'reactstrap';

class DishDetail extends Component {

    renderDish(dish) {
        if (dish != null) {
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )}
        else 
        return (
            <div></div>
        )
    }

    renderComments(comments) {
        if (comments != null) {
            const commentView = comments.map((comment) => <li key={comment.id}>{comment.comment}<br/>{'--'+ comment.author} {comment.date}</li>)
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className='list-unstyled'>{commentView}</ul>
                </div>
            )
        }
    }
    render() { 
        return (
            <div>
                <div className='row'>
                    <div className='col-12 col-md-5 m-4'>{this.renderDish(this.props.selectedDish)}</div>
                    <div className='col-12 col-md-5 m-4'>{this.renderComments(this.props.selectedDish? this.props.selectedDish.comments : null)}</div>
                </div>
            </div>
        );
    }
}
 
export default DishDetail;