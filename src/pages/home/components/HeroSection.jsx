import { PropTypes } from "prop-types";
import React from "react";
import Button from "../../../components/common/Button";

const HeroSection = ({ data }) => {
  const { title, description, btnUrl, btnName, imageUrl } = data;

  return (
    <div className="hero-section section-padding">
      <div className="wrapper flex items-center gap-24 max-lg:flex-col-reverse">
        <div className="flex-1 lg:max-w-[calc(100%-424px)]">
          {title && (
            <h1 className="text-neutral-90 max-w-[90%] xl:max-w-[75%] ">
              {title}
            </h1>
          )}
          {description && (
            <h6 className="text-neutral-60 pt-16">{description}</h6>
          )}
          <div className="mt-16">
            <Button
              btnType="style1"
              enableLink={true}
              clickEvent={btnUrl}
              title={btnName}
            />
          </div>
        </div>
        <div className="lg:w-[400px] w-[calc(100%+48px)] lg:h-[300px] h-[500px]">
          <img
            src={imageUrl}
            alt="hero"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

// Define prop types
HeroSection.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    btnUrl: PropTypes.string,
    btnName: PropTypes.string,
  }),
};

export default HeroSection;
