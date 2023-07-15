// import {
//   Card, CardImg, CardImgOverlay, CardBody, CardSubtitle, CardText,
//   CardTitle, Breadcrumb, BreadcrumbItem
// } from 'reactstrap';
import { Link } from 'react-router-dom';

// import React from 'react';
import React, { Component } from 'react';
// import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, Row, FormFeedback } from 'reactstrap';
import {
  Breadcrumb, BreadcrumbItem,
  Button, Row, Col, Label
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';



function RenderMenuItem({ item, onClick }) {
  return (

    <div class="home-item">

      <img class="home-item__img" alt={item.name} src={item.image} />
      <div style={{ padding: '0 20px' }}>
        <h4 class="home-item__name">{item.name} </h4>
        <h6 class="home-item__description">
          {item.description}
        </h6>
        <Link to={`/home/${item.id}`} >
          <a href="#" class="btn  btn-lg active buy-button bg-light btn-outline-light text-center m-2 " role="button" aria-pressed="true">
            <img class="home-item__img-button" alt="" src="/assets/images/481127.png" />
          </a>
        </Link>
      </div>




    </div>

  );
}


const Home = (props) => {

  const home = props.items.map((item) => {
    return (
      <div className="col-12 col-sm-6 col-md-3" key={item.id}>
        <RenderMenuItem item={item}
        />
      </div>
    );
  });

  return (
    <div style={{ backgroundColor: '#db545a' }}>
      <div className="container">
        <div className="row">
          <div className="col-12 ">
            <h3 className="text-center text-white p-5 p-7">Join now for just $50/month</h3>
            {/* <hr /> */}
          </div>
        </div>
        <div className="row">
          {home}
        </div>
      </div>

    </div>

  );


}

export default Home;
