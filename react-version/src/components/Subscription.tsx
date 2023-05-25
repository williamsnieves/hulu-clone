import { AiOutlineCheck } from "react-icons/ai";
import { SlArrowDown } from "react-icons/sl";

const Subscription = () => {
  return (
    <section className="bg-dark-grey text-white pb-12">
      <h2 className="text-5xl text-center pt-20 pb-4">Select your plan</h2>
      <p className="text-center pb-10">
        No hidden fees, equipment rentals, or installation appointments.
        <br />
        <strong>Switch plans or cancel anytime.**</strong>
      </p>
      <div className="w-8/12 mx-auto">
        <div className="border-y border-slate-500 flex justify-around py-8 sticky top-0 bg-dark-grey">
          <div className="flex gap-4 items-start">
            <div className="flex flex-col items-center gap-2">
              <h3 className="text-sm">BASE PLAN</h3>
              <img src="https://www.hulu.com/static/hitch/static/logos/hulu-logo.svg" />
            </div>

            <label className="relative inline-flex items-center mb-5 cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-20 h-10 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-10 after:w-10 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>

            <div>
              <h3 className="text-sm">BUNDLE/SAVE</h3>
              <img src="//www.hulu.com/static/hitch/static/logos/bundles-dark.svg" />
            </div>
          </div>
          <div className="flex gap-8 items-end">
            <div>
              <button className="w-full bg-green-500 py-2 px-6 rounded-3xl text-black text-[9px] uppercase">
                National streaming day
              </button>
              <div className="flex flex-col items-center mt-2">
                <p className="text-slate-400">LIMITED-TIME DEAL</p>
                <p className="font-bold pb-2">Hulu (With Ads)</p>
              </div>
              <button className="bg-slate-300 rounded text-black py-4 px-8 w-full">
                $2 / MONTH FOR 3 MONTHS*
              </button>
            </div>
            <div>
              <div className="flex flex-col items-center mt-2">
                <p className="text-slate-400">30 DAY FREE TRIAL</p>
                <span className="font-bold pb-2">Hulu (No Ads)</span>
              </div>
              <button className="bg-slate-300 rounded text-black py-4 px-8 w-full">
                $14 / MONTH FOR 3 MONTHS*
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex mt-6 pb-6 border-b border-slate-500">
            <div className="basis-[45%]">Monthly price</div>
            <div className="basis-[55%] flex">
              <div className="basis-[42%] text-center">
                $2/mo. for 3 mos., then $7.99/mo.*
              </div>
              <div className="basis-[53%] text-center">$14.99/mo.</div>
            </div>
          </div>
          <div className="flex mt-6 pb-6 border-b border-slate-500">
            <div className="basis-[45%]">
              Streaming Library with tons of TV episodes and movies 💁{" "}
            </div>
            <div className="basis-[55%] flex justify-center">
              <div className="basis-[36%] flex justify-center">
                <AiOutlineCheck className="text-green-500 w-6 h-6" />{" "}
              </div>
              <div className="basis-[62%] flex justify-center">
                <AiOutlineCheck className="text-green-500 w-6 h-6" />{" "}
              </div>
            </div>
          </div>
          <div className="flex mt-6 pb-6 border-b border-slate-500">
            <div className="basis-[45%]">
              Access to award-winning Hulu Originals
            </div>
            <div className="basis-[55%] flex justify-center">
              <div className="basis-[36%] flex justify-center">
                <AiOutlineCheck className="text-green-500 w-6 h-6" />{" "}
              </div>
              <div className="basis-[62%] flex justify-center">
                <AiOutlineCheck className="text-green-500 w-6 h-6" />{" "}
              </div>
            </div>
          </div>
          <div className="flex mt-6 pb-6 border-b border-slate-500">
            <div className="basis-[45%]">
              Watch on your favorite devices, including TV, laptop, phone, or
              tablet
            </div>
            <div className="basis-[55%] flex justify-center">
              <div className="basis-[36%] flex justify-center">
                <AiOutlineCheck className="text-green-500 w-6 h-6" />{" "}
              </div>
              <div className="basis-[62%] flex justify-center">
                <AiOutlineCheck className="text-green-500 w-6 h-6" />{" "}
              </div>
            </div>
          </div>
          <div className="flex mt-6 pb-6 border-b border-slate-500">
            <div className="basis-[45%]">Up to 6 user profiles</div>
            <div className="basis-[55%] flex justify-center">
              <div className="basis-[36%] flex justify-center">
                <AiOutlineCheck className="text-green-500 w-6 h-6" />{" "}
              </div>
              <div className="basis-[62%] flex justify-center">
                <AiOutlineCheck className="text-green-500 w-6 h-6" />{" "}
              </div>
            </div>
          </div>
          <div className="flex mt-6 pb-6 border-b border-slate-500">
            <div className="basis-[45%]">
              Watch on 2 different screens at the same time
            </div>
            <div className="basis-[55%] flex justify-center">
              <div className="basis-[36%] flex justify-center">
                <AiOutlineCheck className="text-green-500 w-6 h-6" />{" "}
              </div>
              <div className="basis-[62%] flex justify-center">
                <AiOutlineCheck className="text-green-500 w-6 h-6" />{" "}
              </div>
            </div>
          </div>
          <div className="flex mt-6 pb-6 border-b border-slate-500">
            <div className="basis-[45%]">No ads in streaming library</div>
            <div className="basis-[55%] flex justify-center">
              <div className="basis-[36%] flex justify-center">--</div>
              <div className="basis-[62%] flex justify-center">
                <AiOutlineCheck className="text-green-500 w-6 h-6" />{" "}
              </div>
            </div>
          </div>
          <div className="flex mt-6 pb-6 border-b border-slate-500">
            <div className="basis-[45%]">Download and watch</div>
            <div className="basis-[55%] flex justify-center">
              <div className="basis-[36%] flex justify-center">--</div>
              <div className="basis-[62%] flex justify-center">
                <AiOutlineCheck className="text-green-500 w-6 h-6" />{" "}
              </div>
            </div>
          </div>
          <div className="mt-4 pb-8">
            <p className="text-[9px]">
              *Offer for Hulu (With Ads) plan only: $2/month for 3 months, then
              auto-renews at $7.99/month or then-current regular monthly price.
              Ends 11:59 PM PT on 5/27/23. Cancel anytime, effective at the end
              of your billing period. No refunds or credits for partial months.
              New and eligible returning subscribers (who have not been Hulu
              subscribers in the past 1 month) only; Disney+ Basic (With Ads)
              subscribers are not eligible. Additional terms apply. **Switches
              from Live TV to Hulu take effect as of the next billing cycle.
              †For current-season shows in the streaming library only.
            </p>
          </div>
        </div>
        <div className="border-y border-slate-500 flex justify-center gap-2 items-center p-4">
          Show add-ons <SlArrowDown />
        </div>
      </div>
    </section>
  );
};

export default Subscription;
