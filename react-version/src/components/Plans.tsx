import { IoIosArrowDown } from "react-icons/io";

const Plans = () => {
  return (
    <section className="bg-dark-grey text-white">
      <h3 className="text-green-500 text-sm uppercase font-semibold text-center pt-24">
        included all plans
      </h3>
      <h2 className="text-5xl text-center font-semibold py-6">
        All the TV you love
      </h2>
      <p className="text-center w-5/12 my-0 mx-auto">
        Watch full seasons of exclusively streaming series, current-season
        episodes, hit movies, Hulu Originals, kids shows, and more.
      </p>
      <section className="flex justify-center gap-3 mt-12">
        <div className="w-72 relative">
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/50" />
          <img
            src="//cnbl-cdn.bamgrid.com/assets/1fe40561415a61a95726ada4467fc374fa6f9667028c0d249d8c2c594160777e/original"
            alt=""
          />
          <div className="absolute top-0 left-0 p-5">
            <span className="text-md">Past & Current Seasons</span>
            <h3 className="text-2xl font-semibold">TV Shows</h3>
          </div>
        </div>
        <div className="w-72 relative">
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/50" />
          <img
            src="//cnbl-cdn.bamgrid.com/assets/8c630a19daa8615918152082839724f4dab6538939ba7d3bb45f8faa97acf1b9/original"
            alt=""
          />
          <div className="absolute top-0 left-0 p-5">
            <span className="text-md">New & Classic</span>
            <h3 className="text-2xl font-semibold">Movies</h3>
          </div>
        </div>
        <div className="w-72 relative">
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/50" />
          <img
            src="//cnbl-cdn.bamgrid.com/assets/89cea7fd1cb42712c4aeb2d6a9629f9c76a12691359f8feef14b2f93eddfe46c/original"
            alt=""
          />
          <div className="absolute top-0 left-0 p-5">
            <span className="text-md">Groundbreaking</span>
            <h3 className="text-2xl font-semibold">Hulu Originals</h3>
          </div>
        </div>
        <div className="w-72 relative">
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/50" />
          <img
            src="//cnbl-cdn.bamgrid.com/assets/4bae266f4178c145a7285dd09aafff4bc40a8e463cbcee1a8b3f27fb3f7a42ba/original"
            alt=""
          />
          <div className="absolute top-0 left-0 p-5">
            <span className="text-md">Add-on</span>
            <h3 className="text-2xl font-semibold">Premiums</h3>
          </div>
        </div>
      </section>
      <section className="pt-20">
        <h3 className="text-green-500 text-sm uppercase font-semibold text-center pt-24">
          HULU + LIVE TV, NOW WITH DISNEY+ AND ESPN+, ALL WITH ADS
        </h3>
        <h2 className="text-5xl text-center font-semibold py-6">
          Live TV Makes It Better
        </h2>
        <p className="text-center w-5/12 my-0 mx-auto">
          Make the switch from cable. Get 85+ top channels on Hulu (With Ads) +
          Live TV with your favorite live sports, news, and events - plus the
          entire Hulu streaming library. With Unlimited DVR, store Live TV
          recordings for up to nine months and fast-forward through your DVR
          content. Access endless entertainment with Disney+ and live sports
          with ESPN+.{" "}
        </p>
        <div className="w-5/12 my-0 mx-auto pt-6">
          <p className="text-[8px] leading-[1rem] text-slate-400">
            Regional restrictions, blackouts and Live TV terms apply. Access
            content from each service separately. Location data required to
            watch certain content. Unlimited DVR recording is not available for
            on-demand shows.
          </p>
        </div>
        <div className="flex justify-center mt-4">
          <a href="#" className="text-center underline">
            VIEW CHANNELS IN YOUR AREA →
          </a>
        </div>
        <div className="flex justify-center py-10">
          <IoIosArrowDown className="w-8 h-8 animate-bounce" />
        </div>
      </section>
    </section>
  );
};

export default Plans;
