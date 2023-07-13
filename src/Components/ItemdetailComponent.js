import React, { Component } from "react";
import { Card, CardTitle, CardImg, CardImgOverlay, CardBody, Breadcrumb, BreadcrumbItem, Row, Col } from "reactstrap";
import {
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label
} from 'reactstrap';
import { HashRouter, Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

export class CommentForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.addComment(this.props.itemid, values.rating, values.author, values.comment);
        // console.log(this.props)
    }

    render() {
        return (
            <div>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"> Submit comment</span>
                </Button>

                <div className="row row-content">
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}> Submit comment</ModalHeader>
                        <ModalBody>
                            <div className="col-12 col-md-12">
                                <LocalForm onSubmit={(values) => this.handleSubmit(values)} >
                                    <Row className="form-group">
                                        <Label md={12} htmlFor="rating">Rating</Label>
                                        <Col md={12}>
                                            <Control.select model=".rating" name="rating" className="form-control h-100"  >
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Control.select>
                                        </Col>
                                    </Row>

                                    <Row className="form-group">
                                        <Label htmlFor="author" md={12}>Your name</Label>
                                        <Col md={12}>
                                            <Control.text model=".author" id="author" name="author" placeholder="Author" className="form-control" validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }} />
                                            <Errors className="text-danger" model=".author" show="touched" messages={{ required: 'Required', minLength: 'Must be greater than 3 characters', maxLength: 'Must be 15 charaters or less' }} />
                                        </Col>
                                    </Row>

                                    <Row className="form-group">
                                        <Label htmlFor="feedback" md={12}>Your feedback</Label>
                                        <Col md={12}>
                                            <Control.textarea model=".comment" id="comment" name="comment" rows="6" className="form-control" validators={{ required }} />
                                            <Errors className="text-danger" model=".comment" show="touched" messages={{ required: 'Required' }} />
                                        </Col>
                                    </Row>

                                    <Button type="submit" value="submit" color="primary">Submit</Button>
                                </LocalForm>
                            </div>
                        </ModalBody>
                    </Modal>
                </div>
            </div>
        );
    }
}

function RenderDish({ item }) {
    if (item != null)
        return (
            <Card>
                <CardImg width="100%" src={item.image} alt={item.name} />
                <CardImgOverlay >
                    <CardTitle>{item.name}</CardTitle>
                    <CardBody>{item.description}</CardBody>
                </CardImgOverlay>
            </Card>
        )
    else {
        return (
            <div></div>
        )
    }
}

function RenderComments({ comments, addComment, itemid }) {
    if (comments != null) {
        const comment = comments.map((comment) => {
            return (
                <div className="container">
                    <div key={comment.id}>
                        <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>-- {comment.author},
                                &nbsp;
                                {new Intl.DateTimeFormat('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: '2-digit'
                                }).format(new Date(comment.date))}
                            </p>
                        </li>
                    </div>

                </div>
            );
        });
        return (

            <div>
                <h4> Comments </h4>
                <ul>
                    {comment}
                    <CommentForm itemid={itemid} addComment={addComment} />
                </ul>

            </div>

        )
    }

    else {
        return (
            <div></div>
        )
    }
}

const DishDetail = (props) => {
    const item = props.item;
    // console.log(item);
    if (item == null) {
        return (<div></div>);
    }

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/home'>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active> {props.item.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.item.name}</h3>
                    <hr />
                </div>
            </div>
            <div className='row'>
                <div className="col-12 col-md-5 m-1">
                    <RenderDish item={props.item} />
                </div>
                <RenderComments comments={props.comments} itemid={props.item.id} addComment={props.addComment} />
            </div>
        </div>
    )
}



export default DishDetail


