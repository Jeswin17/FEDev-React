import React from 'react';
import { Media } from 'reactstrap';
import Dishdetail from './DishdetailComponent';

import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

    function RenderMenuItem({ dish}){

        return(
            <Card > 
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
        );
    }

const Menu = (props) =>{

    const menu = props.dishes.map((dish) => { // props coming in as parameter
        return (
          <div  key={dish.id} className="col-12 col-md-5 m-1">
              <RenderMenuItem dish = {dish} onClick = {props.onClick} />
          </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
            <div className="row">
            </div>
        </div>
    );

    }




export default Menu;