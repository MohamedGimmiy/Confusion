import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Breadcrumb, Modal, ModalBody, ModalHeader, BreadcrumbItem, Button,
    Card, CardBody, CardImg, CardText, CardTitle,
} from 'reactstrap';
import CommentFormComponent from './CommentFormComponent';
import {Loading} from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';

import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const RenderDish = ({ dish }) => {
    return (
        <FadeTransform in transformProps={{exitTransform: 'scale(0.5) translateY(-50%)'}}>

        <Card>
            <CardImg top src={baseUrl + dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle tag="h4">{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
        </FadeTransform>
    );


}

function RenderComments({ comments }) {
    return (

            <Stagger in>
                {comments.map((comment) => {
                return (
                <Fade in>
                <div className="row content" key={comment.id}>
                    <div className="mb-3 col-12">{comment.comment}</div>
                    <div className="mb-3  col-12"> -- {comment.author}, { }
                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' })
                            .format(new Date(Date.parse(comment.date)))}
                    </div>
                </div>
                </Fade>
);
            })}
            </Stagger>
    );
}

class DishDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.toggleModel = this.toggleModel.bind(this);
    }


    toggleModel() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    render() {
        if(this.props.isLoading){
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        } else if(this.props.errMess){
            return (
                <div className="container">
                    <div className="row">
                        <h4>{this.props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (this.props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to='/menu'>Menu</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>
                                {this.props.dish.name}
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{this.props.dish.name}</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5 ml-1">
                            <RenderDish dish={this.props.dish} />
                        </div>
                        <div className="col-md-5">
                            <h3>Comments</h3>
                            <RenderComments 
                            comments={this.props.comments}
                             />
                            <Button outline onClick={this.toggleModel}>   <i className="fa fa-edit"></i> Submit comment</Button>
                        </div>
                    </div>
                    <Modal isOpen={this.state.isOpen} toggle={this.toggleModel}>
                        <ModalHeader toggle={this.toggleModel}>
                            Submit comment
                    </ModalHeader>
                        <ModalBody>
                            {/* ---------------TODO convert it to redux local form ----------------- */}
                            <CommentFormComponent 
                            postComment={this.props.postComment}
                            dishId = {this.props.dish.id} />
                        </ModalBody>
                    </Modal>

                </div>);
        } else {
            return (
                <div>
                </div>
            );
        }
    }
}

export default DishDetails;

