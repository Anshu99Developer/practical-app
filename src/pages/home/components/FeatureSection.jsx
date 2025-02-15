import { PropTypes } from "prop-types";
import React, { useState } from "react";
import FeatureCard from "./FeatureCard";

const FeatureSection = ({ data }) => {
  const { heading, options } = data;

  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="feature-section section-padding bg-tan-lighter">
      <div className="wrapper">
        <div>
          <h2 className="text-neutral-90">{heading}</h2>
        </div>
        <div className="mt-24 max-md:flex max-md:flex-col max-md:gap-24">
          {options?.length > 0 &&
            options.map((option, index) => {
              return (
                <FeatureCard
                  key={index}
                  currentIndex={index}
                  option={option}
                  handleClick={toggleAccordion}
                  openIndex={openIndex}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};
FeatureSection.propTypes = {
  data: PropTypes.object,
};
export default FeatureSection;
