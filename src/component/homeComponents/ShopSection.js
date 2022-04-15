import React from "react";
import { Link } from "react-router-dom";
//missing ratings
//missing pagination

import products from "../../data/products";



const backgroundImage={

}

class ShopSection extends React.Component {

    render() {
        const array = [{id:1, name: "kaos bali" }, {id:2, name: "kaos jogja" }, {id:3, name: "kaos wonogiri" }, {id:4, name: "kaos bandung" },{id:5, name: "kaos bandung" },{id:6, name: "kaos bandung" }];
        return (
            <div className="row m-4 justify-content-center">
                {
                    array.map((value)=>{
                        return (
                            <div className="col-lg-3 g-4 mx-2 align-self-center"  key={value.id}>
                                <div className="card shopcontainer ">
                                   
                                    <div className="card-body">
                                        <h5 className="card-title">{value.name}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Lihat Product</a>
                                    </div>
                                </div>
                            </div>
                        );

                    })
                }
            </div>
        );









    }
}

export default ShopSection;
