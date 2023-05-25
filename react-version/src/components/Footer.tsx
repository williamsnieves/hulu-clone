import {
  GrFacebookOption,
  GrInstagram,
  GrTwitter,
  GrYoutube,
} from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="bg-slate-100 pt-24 text-slate-500">
      <div className="flex justify-between my-0 mx-auto max-w-[1200px]">
        <div>
          <h3 className="text-slate-950 text-xs uppercase font-bold">Browse</h3>
          <div className="flex gap-24">
            <div className="flex flex-col">
              <a href="#">Streaming Library</a>
              <a href="#">Live TV</a>
              <a href="#">Live News</a>
              <a href="#">Live Sports</a>
            </div>
            <div className="flex flex-col">
              <a href="#">TV Shows</a>
              <a href="#">Movies</a>
              <a href="#">Originals</a>
              <a href="#">Networks</a>
              <a href="#">Kids</a>
              <a href="#">FX</a>
            </div>
            <div className="flex flex-col">
              <a href="#">HBO Max™</a>
              <a href="#">Cinemax</a>
              <a href="#">Showtime</a>
              <a href="#">STARZ</a>
            </div>
            <div className="flex flex-col">
              <a href="#">Disney Bundle Trio Basic</a>
              <a href="#">Disney Bundle Trio Premium</a>
              <a href="#">Disney Bundle Duo Basic</a>
              <a href="#">Student Discount</a>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-slate-950 text-xs uppercase font-bold">Help</h3>
          <div className="flex flex-col">
            <a href="#">Account & Billing</a>
            <a href="#">Plans & Pricing</a>
            <a href="#">Supported Devices</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
        <div>
          <h3 className="text-slate-950 text-xs uppercase font-bold">
            About us
          </h3>
          <div className="flex flex-col">
            <a href="#">Shop Hulu</a>
            <a href="#">Press</a>
            <a href="#">Jobs</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col my-0 mx-auto max-w-[1200px] border-t border-slate-400 mt-32 py-8">
        <div className="flex gap-6">
          <GrFacebookOption />
          <GrTwitter />
          <GrYoutube />
          <GrInstagram />
        </div>
        <div className="text-xs mt-6 flex gap-6">
          <span>© 2023 Hulu, LLC</span>
          <a href="#">About Ads</a>
          <a href="#">Subscriber Agreement</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Do Not Sell My Personal Information</a>
          <a href="#">Your California Privacy Rights</a>
          <a href="#">TV Parental Guidelines</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
