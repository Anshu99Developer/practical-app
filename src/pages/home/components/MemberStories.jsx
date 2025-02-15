import React from "react";
import StoryCard from "./StoryCard";
import { PropTypes } from 'prop-types';

const MemberStories = ({ data }) => {
  const { heading, stories } = data;
  return (
    <div className="story-section section-padding">
      <div className="wrapper">
        <div>
          <h2 className="text-neutral-90">{heading}</h2>
        </div>
        <div className="stories mt-24 flex lg:gap-48 flex-wrap max-lg:flex-col">
          {stories?.length > 0 &&
            stories.map((item) => {
              return <StoryCard story={item} key={item?.id} />;
            })}
        </div>
      </div>
    </div>
  );
};
MemberStories.propTypes = {
  data: PropTypes.object,
};
export default MemberStories;
