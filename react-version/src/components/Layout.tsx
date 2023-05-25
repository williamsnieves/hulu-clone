import Footer from "./Footer";
import MainBanner from "./MainBanner";
import Plans from "./Plans";
import SpotLight from "./SpotLight";
import Subscription from "./Subscription";

const Layout = () => {
  return (
    <main>
      <MainBanner />
      <Plans />
      <SpotLight />
      <Subscription />
      <Footer />
    </main>
  );
};

export default Layout;
