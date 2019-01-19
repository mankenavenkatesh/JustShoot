import React from "react";
class ShootingLocationimageslider extends React.Component {
  render() {
    return (
      // <div class="listing-slider mfp-gallery-container margin-bottom-0">
      //   <a href="././images/single-listing-01.jpg" data-background-image="././images/single-listing-01.jpg" class="item mfp-gallery" title="Title 1">image 1</a>
      //   <a href="././images/single-listing-02.jpg" data-background-image="././images/single-listing-02.jpg" class="item mfp-gallery" title="Title 3">image 2</a>
      //   <a href="././images/single-listing-03.jpg" data-background-image="././images/single-listing-03.jpg" class="item mfp-gallery" title="Title 2">image 3</a>
      //   <a href="././images/single-listing-04.jpg" data-background-image="././images/single-listing-04.jpg" class="item mfp-gallery" title="Title 4">image 4</a>
      // </div>

      <div class="listing-slider mfp-gallery-container margin-bottom-0 slick-initialized slick-slider">
        <button
          type="button"
          data-role="none"
          class="slick-prev slick-arrow"
          aria-label="Previous"
          role="button"
          styles="display: block;"
        >
          Previous
        </button>
        <div
          aria-live="polite"
          class="slick-list draggable"
          styles="padding: 0px 20%;"
        >
          <div
            class="slick-track"
            role="listbox"
            styles="opacity: 1; width: 4320px; transform: translate3d(-864px, 0px, 0px);"
          >
            <a
              href="./images/single-listing-02.jpg"
              data-background-image="./images/single-listing-02.jpg"
              class="item mfp-gallery slick-slide slick-cloned"
              title="Title 3"
              data-slick-index="-3"
              styles='background-image: url("./images/single-listing-02.jpg"); width: 432px;'
              aria-hidden="true"
              tabindex="-1"
            />
            <a
              href="./images/single-listing-03.jpg"
              data-background-image="./images/single-listing-03.jpg"
              class="item mfp-gallery slick-slide slick-cloned"
              title="Title 2"
              data-slick-index="-2"
              styles='background-image: url("./images/single-listing-03.jpg"); width: 432px;'
              aria-hidden="true"
              tabindex="-1"
            />
            <a
              href="./images/single-listing-04.jpg"
              data-background-image="./images/single-listing-04.jpg"
              class="item mfp-gallery slick-slide slick-cloned slick-active"
              title="Title 4"
              data-slick-index="-1"
              styles='background-image: url("./images/single-listing-04.jpg"); width: 432px;'
              aria-hidden="false"
              tabindex="-1"
            />
            <a
              href="./images/single-listing-01.jpg"
              data-background-image="./images/single-listing-01.jpg"
              class="item mfp-gallery slick-slide slick-current slick-active slick-center"
              title="Title 1"
              data-slick-index="0"
              styles='background-image: url("./images/single-listing-01.jpg"); width: 432px;'
              aria-hidden="false"
              tabindex="-1"
              role="option"
              aria-describedby="slick-slide00"
            />
            <a
              href="./images/single-listing-02.jpg"
              data-background-image="./images/single-listing-02.jpg"
              class="item mfp-gallery slick-slide slick-active"
              title="Title 3"
              data-slick-index="1"
              styles='background-image: url("./images/single-listing-02.jpg"); width: 432px;'
              aria-hidden="false"
              tabindex="-1"
              role="option"
              aria-describedby="slick-slide01"
            />
            <a
              href="./images/single-listing-03.jpg"
              data-background-image="./images/single-listing-03.jpg"
              class="item mfp-gallery slick-slide"
              title="Title 2"
              data-slick-index="2"
              styles='background-image: url("./images/single-listing-03.jpg"); width: 432px;'
              aria-hidden="true"
              tabindex="-1"
              role="option"
              aria-describedby="slick-slide02"
            />
            <a
              href="./images/single-listing-04.jpg"
              data-background-image="./images/single-listing-04.jpg"
              class="item mfp-gallery slick-slide"
              title="Title 4"
              data-slick-index="3"
              styles='background-image: url("./images/single-listing-04.jpg"); width: 432px;'
              aria-hidden="true"
              tabindex="-1"
              role="option"
              aria-describedby="slick-slide03"
            />
            <a
              href="./images/single-listing-01.jpg"
              data-background-image="./images/single-listing-01.jpg"
              class="item mfp-gallery slick-slide slick-cloned slick-center"
              title="Title 1"
              data-slick-index="4"
              styles='background-image: url("./images/single-listing-01.jpg"); width: 432px;'
              aria-hidden="true"
              tabindex="-1"
            />
            <a
              href="./images/single-listing-02.jpg"
              data-background-image="./images/single-listing-02.jpg"
              class="item mfp-gallery slick-slide slick-cloned"
              title="Title 3"
              data-slick-index="5"
              styles='background-image: url("./images/single-listing-02.jpg"); width: 432px;'
              aria-hidden="true"
              tabindex="-1"
            />
            <a
              href="./images/single-listing-03.jpg"
              data-background-image="./images/single-listing-03.jpg"
              class="item mfp-gallery slick-slide slick-cloned"
              title="Title 2"
              data-slick-index="6"
              styles='background-image: url("./images/single-listing-03.jpg"); width: 432px;'
              aria-hidden="true"
              tabindex="-1"
            />
          </div>
        </div>

        <button
          type="button"
          data-role="none"
          class="slick-next slick-arrow"
          aria-label="Next"
          role="button"
          styles="display: block;"
        >
          Next
        </button>
      </div>
    );
  }
}

export default ShootingLocationimageslider;
