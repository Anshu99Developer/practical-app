import React from "react";
import { PropTypes } from "prop-types";
import Button from "../../../components/common/Button";

const StoryCard = ({ story }) => {
  const { title, description, btnName, btnUrl, image } = story;
  return (
    <div className="story-card flex lg:gap-24 gap-16 lg:basis-[calc(50%-24px)] basis-[calc(50%-16px)] max-lg:py-32 max-lg:border-t border-neutral-20">
      <div className="size-[200px] max-lg:hidden">
        <img
          src={image}
          alt="story-img"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full flex-1 lg:max-w-[calc(100%-224px)]">
        <div>
          {title && <h4 className="accent-text text-neutral-90 !leading-normal">{title}</h4>}
        </div>
        <div className="flex gap-16 mt-4">
          <div className="lg:hidden size-[100px]">
            <img
              src={image}
              alt="story-img"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-lg:max-w-[calc(100%-116px)]">
            {description && (
              <p
                className="flex-1 text-neutral-60 line-clamp-3 lg:text-sm text-base"
                title={description}
              >
                {description}
              </p>
            )}
          </div>
        </div>

        <div className="mt-16">
          <Button
            btnType="style3"
            enableLink={true}
            clickEvent={btnUrl}
            title={btnName}
          />
        </div>
      </div>
    </div>
  );
};
StoryCard.propTypes = {
  story: PropTypes.object,
};
export default StoryCard;
