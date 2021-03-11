import React, {Component} from 'react';
import{ Row, Col, Label, Button} from 'reactstrap';
/* ----------react redux form-------- */
import { LocalForm, Control, Errors } from 'react-redux-form';



/* -------- Here we illustrate controlled forms validation ----------- */

const required = (val) => val && val.length;

const maxLength = (len) => (val) => !(val) || (val.length <= len);

const minLength = (len) => (val) => val && (val.length >= len);


class CommentFormComponent extends Component{

constructor(props){
    super(props);

}

handleSubmit(values){
    console.log(this.props.postComment(this.props.dishId, values.rating, values.author, values.comment));
}


render(){

    return(
        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
        <Row className="form-group">
            <Label md={12} htmlFor="rating">Rating</Label>
            <Col md={{ size: 12 }}>
                <Control.select
                    model=".rating"
                    name="rating"
                    id="rating"
                    className="form-control"
                    validators={{
                        required
                    }}
                >
                    <option disabled selected value="0">Please select a rating</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Control.select>
                <Errors className="text-danger"
                    model=".rating"
                    show="touched"
                    messages={{
                        required: 'Required ',
                    }}
                />
            </Col>
        </Row>
        <Row className="form-group">
            <Label md={12} htmlFor="author">Your Name</Label>
            <Col md={12}>
                <Control.text
                    model=".author"
                    id="author"
                    name="author"
                    placeholder="Your Name"
                    className="form-control"
                    validators={{
                        required,
                        minLength: minLength(3),
                        maxLength: maxLength(15)
                    }} />
                <Errors className="text-danger"
                    model=".author"
                    show="touched"
                    messages={{
                        required: 'Required ',
                        minLength: 'Must be greater than 2 character',
                        maxLength: 'Must be 15 character or less'
                    }}
                />
            </Col>
        </Row>

        <Row className="form-group">
            <Label md={12} htmlFor="name">Comment</Label>

            <Col md={12}>
                <Control.textarea
                    model=".comment"
                    className="form-control"
                    id="comment"
                    rows="12"
                    name="comment" />
            </Col>
        </Row>
        <Button type="submit" value="submit" className="bg-primary">Submit</Button>
    </LocalForm>

    );
}
}
export default CommentFormComponent;