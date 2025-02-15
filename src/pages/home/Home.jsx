import React from "react";
import catchDayImage from "../../assets/images/catch-day.png";
import catchMoreImage from "../../assets/images/catch-more.jpg";
import exploreFishingImage from "../../assets/images/explore-fish.png";
import fishingExpImage from "../../assets/images/fishing-experience.jpg";
import heroImage from "../../assets/images/hero-image.png";
import johnStoryImage from "../../assets/images/john-story.png";
import theJourneyImage from "../../assets/images/the-journey.png";
import troutTalesImage from "../../assets/images/trout-tales.png";
import "../../assets/styles/home.scss";
import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import MemberStories from "./components/MemberStories";

// Home Page Data
const HomeData = {
  hero: {
    title: "Central Texas Fly Fishing",
    description:
      "At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, facilisi ac, sed faucibus.",
    btnUrl: "/",
    btnName: "Get started",
    imageUrl: heroImage,
  },
  features: {
    heading: "Featured options",
    options: [
      {
        id: 1,
        title: "Explore Fly Fishing",
        description:
          "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
        image: exploreFishingImage,
        btnName: "Learn more",
        btnUrl: "/",
      },
      {
        id: 2,
        title: "Fly Fishing Experiences",
        description:
          "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
        image: fishingExpImage,
        btnName: "Learn more",
        btnUrl: "/",
      },
      {
        id: 3,
        title: "Gear Up and Catch More",
        description:
          "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
        image: catchMoreImage,
        btnName: "Learn more",
        btnUrl: "/",
      },
    ],
  },
  memberStory: {
    heading: "Member stories",
    stories: [
      {
        id: 1,
        title: "John’s Story",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat",
        image: johnStoryImage,
        btnName: "Read more",
        btnUrl: "/",
      },
      {
        id: 2,
        title: "The Journey",
        description:
          "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
        image: theJourneyImage,
        btnName: "Read more",
        btnUrl: "/",
      },
      {
        id: 3,
        title: "Catch Day",
        description:
          "Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque",
        image: catchDayImage,
        btnName: "Read more",
        btnUrl: "/",
      },
      {
        id: 4,
        title: "Trout Tales",
        description:
          "Sit amet mattis vulputate enim nulla aliquet. At augue eget arcu dictum varius. Volutpat commodo sed",
        image: troutTalesImage,
        btnName: "Read more",
        btnUrl: "/",
      },
    ],
  },
};
const Home = () => {
  return (
    <div>
      <HeroSection data={HomeData?.hero} />
      <FeatureSection data={HomeData?.features} />
      <MemberStories data={HomeData?.memberStory} />
    </div>
  );
};

export default Home;
