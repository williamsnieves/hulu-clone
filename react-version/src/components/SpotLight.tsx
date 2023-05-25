const SpotLight = () => {
  return (
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
              major college and pro leagues including the NCAA®, NBA, NHL, NFL,
              and more.
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
  );
};

export default SpotLight;
