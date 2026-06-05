import React from "react";

function CreateTicket() {
  return (
    <div class="container">
      <div class="row p-5">
        <div class="col-8">
          <div class="border mb-4 p-2"> 
            <span style={{border: "1px solid",backgroundColor: "skyblue"}}><i class="fa-solid fa-plus"></i></span>
            <span type="button" class="btn fs-4 fw-medium" style={{marginRight: "30rem",marginLeft: "1rem"}}>Account Opening </span>
            <span type="button" class="btn dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
            </span>
         
            {/* <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li> 
            </ul> */}
          </div>
          <div class="border mb-4 p-2">
             <span style={{border: "1px solid",backgroundColor: "skyblue"}}><i class="fa-solid fa-circle-user"></i></span>
            <span type="button" class="btn fs-4 fw-medium" style={{marginRight: "27rem", marginLeft: "1rem"}}>Your Zerodha Account</span>
            <span type="button" class="btn dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
            </span>

          </div>
          <div class="border mb-4 p-2">
            <span style={{border: "1px solid",backgroundColor: "skyblue"}}><i class="fa-solid fa-tent-arrow-turn-left"></i></span>
            <span type="button" class="btn fs-4 fw-medium" style={{marginRight: "39rem", marginLeft: "1rem"}}>Kite</span>
            <span type="button" class="btn dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
            </span>

          </div>
          <div class="border mb-4 p-2">
            <span style={{border: "1px solid",backgroundColor: "skyblue"}}><i class="fa-solid fa-indian-rupee-sign"></i></span>
            <span type="button" class="btn fs-4 fw-medium" style={{marginRight: "38rem", marginLeft: "1rem"}}>Funds</span>
            <span type="button" class="btn dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
            </span>

          </div>
          <div class="border mb-4 p-2">
            <span style={{border: "1px solid",backgroundColor: "skyblue"}}><i class="fa-solid fa-at"></i></span>
            <span type="button" class="btn fs-4 fw-medium" style={{marginRight: "36rem", marginLeft: "1rem"}}>Console</span>
            <span type="button" class="btn dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
            </span>

          </div>
          <div class="border mb-4 p-2">
            <span style={{border: "1px solid",backgroundColor: "skyblue"}}><i class="fa-solid fa-coins"></i></span>
            <span type="button" class="btn fs-4 fw-medium" style={{marginRight: "38rem", marginLeft: "1rem"}}>Coin</span>
            <span type="button" class="btn dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
            </span>

          </div>
        </div>
         
           

         

        <div class="col-4">
          <div
            style={{
              backgroundColor: "#FCF9EA",
              borderLeft: "8px solid orange",
            }}
          >
            <ul class="px-5 py-3">
              <a href="#">
                <li class="fs-5">
                  Surveillance measure on scrips-
                  <br /> October 2025
                </li>
              </a>
              <a href="#">
                <li class="fs-5">
                  Offer for sale (OFS) - October 2025
                </li>
              </a>
            </ul>
          </div>
          <div class="" style= {{border: "1px solid grey"}}> 
              <h4 class="p-3" style={{backgroundColor: "#EEEEEE"}}>Quick links</h4> 
              <p class="border-bottom py-2"> <a href="#" class="p-2 fs-5" style={{textDecoration: "none"}}> 1. Track account opening</a><br/> </p>
              <p class="border-bottom py-2"><a href="#" class="p-2 fs-5" style={{textDecoration: "none"}}>2. Track segment activation </a><br/></p>
              <p class="border-bottom py-2"><a href="#" class="p-2 fs-5" style={{textDecoration: "none"}}>3. Intraday margins </a><br/></p>
              <p class="border-bottom py-2"><a href="#" class="p-2 fs-5" style={{textDecoration: "none"}}>4. Kite user manual </a><br/></p>
              <p><a href="#" class="p-2 fs-5" style={{textDecoration: "none"}}>5. Learn how to create a ticket </a></p> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
