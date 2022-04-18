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

class ShopSection extends React.Component {

    render() {
        const cardImageSyle = {
            color: "red",

        }


        return (
            <div className="container">

                <div className="row g-3">
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

                                        <div class="card-body">
                                            <h5 class="card-title">{product.name}</h5>

                                            <p style={{ fontWeight: "bold", }}>Rp {product.harga}</p>

                                        </div>
                                    </div>
                                </div>

                            );
                        })
                    }

                </div>
            </div >

        );









    }
}

export default ShopSection;
