import React from "react";
import { Link } from "react-router-dom";
//missing ratings
//missing pagination

//import data
import products from "../../data/products";
//import image
import shirt1 from '../../../public/images/shirt1.jpg';
//import component
import Button from '../Button';
import Rating from './Rating';
import Pagination from './Pagination';


class ShopSection extends React.Component {

    render() {
        const cardImageSyle = {
            color: "red",

        }


        return (
            <div className="container container-md-5 mx-auto my-5">

                <div className="row g-3 my-5">
                    {/* <div className="col-6">
                        <div className="border bg-light">hello</div>                   
                    </div> */}
                    {
                        products.map((product) => {
                            return (
                                <div className="col-3">
                                    <div class="card">
                                        <div className="container">
                                            <img src={shirt1} className="card-img-top card-image" alt="..." style={{
                                                width: "50%",

                                            }} />
                                        </div>

                                        <div class="card-body py-0">
                                            <h5 class="card-title">{product.name}</h5>
                                            <Rating />
                                            <p style={{ fontWeight: "bold", }}>Rp {product.harga}</p>

                                        </div>
                                    </div>
                                </div>

                            );
                        })
                    }

                </div>
                <Pagination />
            </div >

        );









    }
}

export default ShopSection;
