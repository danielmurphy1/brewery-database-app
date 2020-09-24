import React from "react";

function BreweryCard(props){

    return(
        
            
                <div className="card" style={{minWidth: 400, maxWidth: 400}}>
                    <div className="card-body">
                        <div className="card-title h5">{props.breweries.name}</div>
                        <p className="card-text">Located in <b>{props.breweries.city}, {props.breweries.state}</b></p>
                        <p>Phone: <b>{props.breweries.phone}</b> </p>
                        <a href={props.breweries.website_url} className="btn btn-primary">Visit Site</a>
                    </div>
                </div>
            
        
    )
}



export default BreweryCard;