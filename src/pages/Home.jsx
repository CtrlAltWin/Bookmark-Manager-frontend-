import React from "react";
import FeatureCard from "../components/featureCard";
import Tag from "../components/Tag";
import CardB from "../components/CardB";
import Logo from "../components/Logo";
const Home = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-white to-violet-200 px-2">
        <div className="max-w-[700px] m-auto text-center mt-16">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Organize your web, simply and beautifully
          </h1>
          <p className="text-lg sm:text-xl mt-5 mx-1">
            BookmarkHub helps you save and organize your favorite websites,
            articles, and resources all in one place.
          </p>
          <button className="text-lg font-semibold text-white bg-violet-400 hover:scale-[1.02] duration-250 ease-in active:scale-[1] px-10 py-[9px] rounded-sm mt-8 mb-16">
            Get Started
          </button>
        </div>
      </div>
      {/* second section */}
      <div className="px-2">
        <div className="max-w-[700px] m-auto text-center mt-16">
          <h1 className="text-3xl font-bold">
            Everything you need to organize your bookmarks
          </h1>
        </div>

        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 mb-14">
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
      <div className="bg-gray-50 py-16 px-2">
        <div className="max-w-[920px] mx-auto text-center">
          <h1 className="text-3xl font-bold">How it works</h1>
          {/* grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
            {/* card A */}
            <div className="order-2 md:order-1 text-start space-y-5 px-2 pt-10">
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
            <div className="order-1 md:order-2 px-2">
              <CardB />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-violet-400 text-white py-16 px-2">
        <div className="max-w-[700px] m-auto text-center">
          <h1 className="text-3xl font-bold">
            Start organizing your bookmarks today
          </h1>
          <p className="text-lg mt-6">
            Join thousands of users who have simplified their web browsing
            experience with BookmarkHub.
          </p>
          <button className="font-semibold bg-white text-violet-400 hover:scale-[1.02] duration-250 ease-in active:scale-[1] px-10 py-[9px] rounded-md mt-8">
            Get Started Now
          </button>
        </div>
      </div>

      <div className="bg-slate-900 grid grid-cols-1 md:grid-cols-2 py-8 px-6 space-y-2 md:space-y-0">
        <div className="flex justify-center md:justify-start">
          <Logo />
          <h2 className="text-white font-semibold text-lg">BookmarkHub</h2>
        </div>
        <p className="text-gray-400 text-sm text-center md:text-end p-1">
          © {new Date().getFullYear()} BookmarkHub. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Home;
