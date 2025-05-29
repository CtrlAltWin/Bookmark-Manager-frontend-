import React from "react";
import FeatureCard from "../components/featureCard";
import Tag from "../components/Tag";

const Home = () => {
  return (
    <div>
      {/* Sections in home, each taking some background and have some texts */}
      <div className="bg-gradient-to-b from-white to-violet-200">
        {/* I found that text are not taking full width */}
        <div className="max-w-[700px] m-auto text-center mt-20">
          <h1 className="text-4xl md:text-5xl font-bold">
            Organize your web, simply and beautifully
          </h1>
          <p className="text-lg sm:text-xl mt-4 mx-1">
            BookmarkHub helps you save and organize your favorite websites,
            articles, and resources all in one place.
          </p>
          <button className="text-xl font-semibold text-white bg-violet-400 px-[25px] py-[9px] rounded-sm mt-8 mb-16">
            Get Started
          </button>
        </div>
      </div>
      {/* second section */}
      <div className="">
        {/* I found that text are not taking full width */}
        <div className="max-w-[700px] m-auto text-center mt-16">
          <h1 className="text-3xl font-bold">
            Everything you need to organize your bookmarks
          </h1>
        </div>
        {/* div for cards ---> it will be a grid */}
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-2 mt-10 mb-14">
          <FeatureCard
            title={"Save Bookmarks"}
            text={
              "Save any link with a title, description, tags, and category for easy organization."
            }
          />
          <FeatureCard
            title={"Search & Filter"}
            text={
              "Quickly find what you're looking for with powerful search and filtering options."
            }
          />
          <FeatureCard
            title={"Organize with Tags"}
            text={
              "Add tags to your bookmarks to create custom collections and find them easily later."
            }
          />
        </div>
      </div>
      {/* third section */}
      <div className="bg-gray-50 py-14">
        {/* I found that text are not taking full width */}
        <div className="max-w-[920px] mx-auto text-center">
          <h1 className="text-3xl font-bold">How it works</h1>
          {/* grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 mt-8">
            {/* card A */}
            <div className="order-2 md:order-1 text-start space-y-5 p-4">
              <h3 className="text-2xl font-semibold">
                Organized by Categories
              </h3>
              <p className="text-gray-600">
                Categorize your bookmarks for different areas of your life or
                work. Switch between categories to find exactly what you need.
              </p>
              <div className="flex space-x-2">
                <Tag name={"Work"} />
                <Tag name={"Learning"} />
                <Tag name={"Personal"} />
              </div>
            </div>
            {/* card B */}
            <div className="order-1 md:order-2 border">hello</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
