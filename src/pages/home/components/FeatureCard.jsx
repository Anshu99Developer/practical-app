import { PropTypes } from "prop-types";
import React from "react";
import { ChevronDown, ChevronUp } from "../../../assets/Icons";
import Button from "../../../components/common/Button";

const FeatureCard = ({ option, openIndex, handleClick, currentIndex }) => {
  const { title, description, btnName, btnUrl, image } = option;
  return (
    <div className="feature-card">
      <div className="max-md:hidden">
        <button
          onClick={() => handleClick(currentIndex)}
          className="h6 outline-none border-b border-neutral-40 w-full flex justify-between items-center p-8 pl-0 text-left text-neutral-90"
        >
          {title}
          {openIndex === currentIndex ? <ChevronUp /> : <ChevronDown />}
        </button>
        {openIndex === currentIndex && (
          <div className="flex">
            <div className="lg:w-[400px] w-[300px] h-[220px]">
              <img
                src={image}
                alt="feature-img"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 lg:max-w-[calc(100%-300px)] max-w-[calc(100%-200px)] p-24">
              <div>
                {title && <h4 className="text-neutral-90">{title}</h4>}
                {description && (
                  <h6 className="text-neutral-60 pt-8 line-clamp-3">
                    {description}
                  </h6>
                )}
              </div>
              <div className="mt-8">
                <Button
                  btnType="style2"
                  enableLink={true}
                  clickEvent={btnUrl}
                  title={btnName}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="md:hidden relative w-full p-24">
        <div className="absolute left-0 top-0 w-full h-full">
          <span className="bg-tan-lighter bg-opacity-70 z-[5] absolute left-0 top-0 w-full h-full"></span>
          <img
            src={image}
            alt="feature-img"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10">
          <div>
            {title && <h4 className="text-neutral-90">{title}</h4>}
            {description && (
              <h6 className="text-neutral-60 pt-8 line-clamp-3">
                {description}
              </h6>
            )}
          </div>
          <div className="mt-8">
            <Button
              btnType="style2"
              enableLink={true}
              clickEvent={btnUrl}
              title={btnName}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

FeatureCard.propTypes = {
  option: PropTypes.object,
  currentIndex: PropTypes.number,
  openIndex: PropTypes.number,
  handleClick: PropTypes.func,
};
export default FeatureCard;
