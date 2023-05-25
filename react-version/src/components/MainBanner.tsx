import Header from "./Header";

const MainBanner = () => {
  return (
    <>
      <Header />
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
    </>
  );
};

export default MainBanner;
