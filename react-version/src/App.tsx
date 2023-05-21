import "./App.css";
import { IoIosArrowDown } from "react-icons/io";

function App() {
  return (
    <main>
      <header className="absolute top-0 z-10 w-full">
        <nav className="flex justify-between h-16 pt-6">
          <section className="pl-12">Hulu</section>
          <section className="pr-12">LOG IN</section>
        </nav>
      </header>
      <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative flex flex-col items-center pt-36">
        <h1 className="w-4/12">
          <img
            src="https://cnbl-cdn.bamgrid.com/assets/5a2906c80d26988b1f7aa470c70cc703a2ffcf6a642f2fd893fef1f7f7afbe3f/original"
            alt="main-banner"
          />
        </h1>
        <section>
          <p className="text-white text-2xl pt-6">
            Save 74% per month for 3 months on Hulu (With Ads)
          </p>
          <p className="text-white text-2xl text-center">Deal ends 5/27/23.</p>
        </section>
        <section className="w-4/12 mt-6">
          <button className="w-full bg-green-500 p-2 rounded">
            GET THIS DEAL
          </button>
        </section>
        <section className="w-5/12 text-xs text-white my-5 leading-tight">
          <small>
            Savings compared to current regular monthly price. Offer for Hulu
            (With Ads) plan only: $2/month for 3 months, then auto-renews at
            $7.99/month or then-current regular monthly price. Ends 11:59 PM PT
            on 5/27/23. Cancel anytime, effective at the end of your billing
            period. No refunds or credits for partial months. New and eligible
            returning subscribers (who have not been Hulu subscribers in the
            past 1 month) only; Disney+ Basic (With Ads) subscribers are not
            eligible. <a>Additional terms apply.</a>
          </small>
        </section>
      </section>
      <section className="bg-gradient-to-r from-black via-stone-900 to-lime-900 flex text-white justify-around items-center p-10">
        <img src="//cnbl-cdn.bamgrid.com/assets/f1607ad0edca860aef966f4295fcb94be1af04de5aefcf855bc080b778448bef/original" />
        <section>
          <div className="w-96 text-xl">
            Get Hulu (With Ads) for $2/mo for 3 mos & add Disney+ (With Ads) for
            just $2/mo more.
          </div>
          <p className="text-xs mt-4">
            Regular monthly price after. Ends 5/27.
          </p>
        </section>
        <section>
          <button className="w-full bg-green-500 py-2 px-6 rounded text-black">
            Get them both
          </button>
          <p className="text-xs text-center">Terms apply</p>
        </section>
      </section>
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
            Make the switch from cable. Get 85+ top channels on Hulu (With Ads)
            + Live TV with your favorite live sports, news, and events - plus
            the entire Hulu streaming library. With Unlimited DVR, store Live TV
            recordings for up to nine months and fast-forward through your DVR
            content. Access endless entertainment with Disney+ and live sports
            with ESPN+.{" "}
          </p>
          <div className="w-5/12 my-0 mx-auto pt-6">
            <p className="text-[8px] leading-[1rem] text-slate-400">
              Regional restrictions, blackouts and Live TV terms apply. Access
              content from each service separately. Location data required to
              watch certain content. Unlimited DVR recording is not available
              for on-demand shows.
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
      <section
        className="bg-local bg-no-repeat bg-left-top bg-cover h-[900px]"
        style={{
          backgroundImage:
            "url(https://cnbl-cdn.bamgrid.com/assets/b8c6dfb74d0a755e8df205721c87b1f8b74821b4229c78492ecca29a2635db9e/original)",
        }}
      >
        <div className="w-9/12 my-0 mx-auto pt-52">
          <div className="text-white text-[12px] font-bold">
            <button className="uppercase mr-4 border-b-4 border-white pb-2">
              Lives sports
            </button>
            <button className="uppercase mr-4">breaking news</button>
            <button className="uppercase mr-4">Lives sports</button>
          </div>
          <div>
            <div className="mt-8">
              <h1 className="text-5xl font-semibold text-white">Live Sports</h1>
            </div>
            <div className="mt-8 text-white max-w-xl">
              <p>
                Catch your games at home or on the go. Stream live games from
                major college and pro leagues including the NCAA®, NBA, NHL,
                NFL, and more.
              </p>
            </div>
            <div className="flex my-6 gap-5">
              <img
                className="rounded-full bg-white p-4"
                src="//cnbl-cdn.bamgrid.com/assets/13aa152764ceb4047c7f902524efb09c2a56e75c95991d2eb708b97cb95c25fa/original"
                width={65}
              />
              <img
                className="rounded-full bg-white p-4"
                src="//cnbl-cdn.bamgrid.com/assets/22943c5e9e0ee02501daa440ecbc2384e5e5255b6306a4100bb49bde19b1d6ca/original"
                width={65}
              />
              <img
                className="rounded-full bg-white p-4"
                src="//cnbl-cdn.bamgrid.com/assets/1011985ada97696d9ac50c3ba59cfa50d0cebb41008519c5bbe0058f9c7fc079/original"
                width={65}
              />
            </div>
            <div>
              <p className="text-[9px] text-slate-300">
                Live TV plan required. Regional restrictions, blackouts and
                additional terms apply. See details
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>Select your plan</h2>
        <p>
          No hidden fees, equipment rentals, or installation appointments.
          Switch plans or cancel anytime.**
        </p>

        <div>
          <div>
            <div>
              <h3>BASE PLAN</h3>
              <span>hulu</span>
            </div>
            <button>switch</button>
            <div>
              <h3>BUNDLE/SAVE</h3>
              <img src="//www.hulu.com/static/hitch/static/logos/bundles-dark.svg" />
            </div>
          </div>
          <div>
            <div>
              <button>National streaming day</button>
              <div>
                <p>LIMITED-TIME DEAL</p>
                <span>Hulu (With Ads)</span>
              </div>
              <button>$2 / MONTH FOR 3 MONTHS*</button>
            </div>
            <div>
              <div>
                <p>LIMITED-TIME DEAL</p>
                <span>Hulu (With Ads)</span>
              </div>
              <button>$2 / MONTH FOR 3 MONTHS*</button>
            </div>
          </div>
          <div>
            <div>
              <div>Monthly price</div>
              <div>$2/mo. for 3 mos., then $7.99/mo.*</div>
              <div>$14.99/mo.</div>
            </div>
            <div>
              <div>
                Streaming Library with tons of TV episodes and movies 💁{" "}
              </div>
              <div>✔ </div>
              <div>✔ </div>
            </div>
            <div>
              <div>Access to award-winning Hulu Originals</div>
              <div>✔ </div>
              <div>✔ </div>
            </div>
            <div>
              <div>
                Watch on your favorite devices, including TV, laptop, phone, or
                tablet
              </div>
              <div>✔ </div>
              <div>✔ </div>
            </div>
            <div>
              <div>Up to 6 user profiles</div>
              <div>✔ </div>
              <div>✔ </div>
            </div>
            <div>
              <div>Watch on 2 different screens at the same time</div>
              <div>✔ </div>
              <div>✔ </div>
            </div>
            <div>
              <div>No ads in streaming library</div>
              <div>--</div>
              <div>✔ </div>
            </div>
            <div>
              <div>Download and watch</div>
              <div>--</div>
              <div>✔ </div>
            </div>
            <div>
              <p>
                *Offer for Hulu (With Ads) plan only: $2/month for 3 months,
                then auto-renews at $7.99/month or then-current regular monthly
                price. Ends 11:59 PM PT on 5/27/23. Cancel anytime, effective at
                the end of your billing period. No refunds or credits for
                partial months. New and eligible returning subscribers (who have
                not been Hulu subscribers in the past 1 month) only; Disney+
                Basic (With Ads) subscribers are not eligible. Additional terms
                apply. **Switches from Live TV to Hulu take effect as of the
                next billing cycle. †For current-season shows in the streaming
                library only.
              </p>
            </div>
          </div>
          <div id="this-will-be-hide">
            <h2>Available Add-ons</h2>
            <p>
              Add-ons available at an additional cost. Add them up after you
              sign up for Hulu.
            </p>
            <div>
              <div>
                <div>HBO Max™</div>
                <div>✔ </div>
                <div>✔ </div>
              </div>
              <div>
                <div>CINEMAX®</div>
                <div>✔ </div>
                <div>✔ </div>
              </div>
              <div>
                <div>SHOWTIME®</div>
                <div>✔ </div>
                <div>✔ </div>
              </div>
              <div>
                <div>STARZ®</div>
                <div>✔ </div>
                <div>✔ </div>
              </div>
            </div>
          </div>
          <div>
            Show add-ons <div>Icono flecha abajo</div>
          </div>
        </div>
      </section>
      <footer>
        <div>
          <div>
            <h3>Browse</h3>
            <div>
              <div>
                <a href="#">Streaming Library</a>
                <a href="#">Live TV</a>
                <a href="#">Live News</a>
                <a href="#">Live Sports</a>
              </div>
              <div>
                <a href="#">TV Shows</a>
                <a href="#">Movies</a>
                <a href="#">Originals</a>
                <a href="#">Networks</a>
                <a href="#">Kids</a>
                <a href="#">FX</a>
              </div>
              <div>
                <a href="#">HBO Max™</a>
                <a href="#">Cinemax</a>
                <a href="#">Showtime</a>
                <a href="#">STARZ</a>
              </div>
              <div>
                <a href="#">Disney Bundle Trio Basic</a>
                <a href="#">Disney Bundle Trio Premium</a>
                <a href="#">Disney Bundle Duo Basic</a>
                <a href="#">Student Discount</a>
              </div>
            </div>
          </div>
          <div>
            <h3>Help</h3>
            <div>
              <a href="#">Account & Billing</a>
              <a href="#">Plans & Pricing</a>
              <a href="#">Supported Devices</a>
              <a href="#">Accessibility</a>
            </div>
          </div>
          <div>
            <h3>About us</h3>
            <div>
              <a href="#">Shop Hulu</a>
              <a href="#">Press</a>
              <a href="#">Jobs</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
        <div>
          <div>iconos de redes sociales</div>
          <div>
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
    </main>
  );
}

export default App;
