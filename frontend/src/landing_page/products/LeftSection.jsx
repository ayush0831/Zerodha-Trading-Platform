import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div class="container">
      <div class="row p-5 mt-5">
        <div class="col-7 p-5">
          <img src={imageUrl} />
        </div>
        <div
          class="col-5 p-5 mt-5"
          style={{ lineHeight: "1.8", fontSize: "1.2em" }}
        >
          <h3>{productName}</h3>
          <p>{productDescription}</p>
          <div class="mb-4">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try demo <i class="fa-solid fa-arrow-right fs-6"></i>
            </a>
            <a
              href={learnMore}
              style={{ textDecoration: "none", marginLeft: "5rem" }}
            >
              Learn more <i class="fa-solid fa-arrow-right fs-6"></i>
            </a>
          </div>
          <div>
            <a href={googlePlay}>
              <img src="media\Images\googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img src="media\Images\appstoreBadge.svg" class="mx-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
