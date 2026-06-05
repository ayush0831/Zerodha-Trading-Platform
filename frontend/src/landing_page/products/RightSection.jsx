import React from "react";

function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div class="container">
      <div class="row ">
        <div
          class="col-5 p-5"
          style={{ lineHeight: "1.8", fontSize: "1.2em", marginTop: "5rem"}}
        >
          <h3>{productName}</h3>
          <p>{productDescription}</p>
          <div >
            <a
              href={learnMore}
              style={{ textDecoration: "none"}}
            >
              Learn more <i class="fa-solid fa-arrow-right fs-6"></i>
            </a>
          </div>
        </div>
        <div class="col-7 p-3">
          <img src={imageUrl} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
