import React from 'react';
import { Media } from 'reactstrap';
import Dishdetail from './DishdetailComponent';
import { Loading } from './LoadingComponent';

import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb , BreadcrumbItem  } from 'reactstrap';
import { CardHeader} from 'reactstrap';
import { Link } from 'react-router-dom';

    function RenderMenuItem({ dish}){

        return(
            <Card > 
                <Link to = {`/menu/${dish.id}`}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Link>
                </Card>
        );
    }

const Menu = (props) =>{

    const menu = props.dishes.dishes.map((dish) => { // props coming in as parameter
        return (
          <div  key={dish.id} className="col-12 col-md-5 m-1">
              <RenderMenuItem dish = {dish} onClick = {props.onClick} />
          </div>
        );
    });
    if (props.dishes.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.dishes.errMess) {
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-12">
                        <h4>{props.dishes.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'></Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
            <div className="row">
            </div>
        </div>
    );

    }




export default Menu;