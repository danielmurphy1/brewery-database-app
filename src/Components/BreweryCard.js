import React from "react";

function BreweryCard(props){

    const defaultPhone = () =>{
        return props.breweries.phone.length < 1 ?  "Not Listed" : props.breweries.phone
    }

    return(
        <div className="card" style={{width: 400}}>
            <div className="card-body">
                <div className="card-title h5">{props.breweries.name}</div>
                <p className="card-text">Located in <b>{props.breweries.city}, {props.breweries.state}</b></p>
                <p>Phone: <b>{defaultPhone()}</b> </p>
                <a href={props.breweries.website_url} target="_blank" className="btn btn-primary">Visit Site</a>
            </div>
        </div>
    )
}

export default BreweryCard;