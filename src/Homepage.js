import axios from "axios";
import { useEffect, useState } from "react";

export default function Homepage({currentElement}) {
    
    return (
        <div style={{gap:"10px"}} className="d-flex flex-wrap">
            {currentElement && currentElement.map((item, index) => {
                return (<div style={{maxWidth:"250px", gap:"2px"}} className="d-flex flex-column" key={index}>
                    <div className="poster-image">
                        <img src={item.creatorPhoto}></img>
                    </div>
                    <span className="fw-bold text-muted ">{item.title.slice(0,20)}</span>
                    <div style={{gap:"5px"}} className="d-flex justify-content-start align-items-start">
                       <img className="profile-image rounded-circle mt-1" src={item.creatorPhoto}></img>
                       <span style={{fontSize:'14px'}} className="fw-lighter">{item.creatorName.slice(0,7)}</span>
                       <hr className="vr mt-1"></hr>
                       <span style={{fontSize:'14px'}} className="fw-lighter">{item.views} viewes</span>
                    </div>
                </div>)
            })}
        </div>
    )
}
