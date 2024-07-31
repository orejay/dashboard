import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/nav/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Reset from "./pages/auth/Reset";
import LandSub from "./pages/nav/Payments";
import Subscribe from "./pages/Subscribe";
import Profile from "./pages/Profile";
import Odds50 from "./components/Odds50";
import SmartBet from "./components/SmartBet";
import Weekend10 from "./components/Weekend10";
import ACCA from "./components/Acca";
import Rollover from "./components/Rollover";
import Store from "./components/Store";
import Glossary from "./components/Glossary";
import PuntersGuide from "./components/PuntersGuid";
import BankersTip from "./components/BankersTip";
import Payment from "./components/Payment";
import TipStore from "./pages/nav/TipStore";
import OurPlans from "./pages/nav/OurPlans";
import Leagues from "./pages/nav/Leagues";
import ContactUs from "./pages/ContactUs";
import League from "./pages/League";
import TandC from "./pages/TandC";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PaystackCheckout from "./components/PaystackCheckout";
import FlutterwaveCheckout from "./components/FlutterwaveCheckout";
import GhanaPayment from "./components/GhanaPayment";
import KenyaPayment from "./components/KenyaPayment";
import StorePage from "./pages/StorePage";
import PageNotFound from "./pages/Error/PageNotFound";
import PredictWin from "./pages/nav/PredictWin";
import RefundPolicy from "./pages/RefundPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AboutUs from "./pages/AboutUs";
import Disclaimer from "./pages/Disclaimer";
import TanzaniaPayment from "./components/TanzaniaPayment";
import UgandaPayment from "./components/UgandaPayment";
import CameroonPayment from "./components/CameroonPayment";
import BeninPayment from "./components/BeninPayment";
import { useEffect } from "react";
import Ad from "./pages/Ad";
import Hiring from "./components/Hiring";
import ProfileSure3 from "./components/ProfileSure3";
import ProfileSure2 from "./components/ProfileSure2";
import SlPayment from "./components/SlPayment";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/refund-policy" element={<RefundPolicy />}></Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/disclaimer" element={<Disclaimer />}></Route>
        <Route path="/ad" element={<Ad />}></Route>

        {/* Auth Routes Start */}
        <Route path="/auth/login" element={<Login />}></Route>
        <Route path="/auth/signup" element={<Signup />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/auth/password" element={<ForgotPassword />}></Route>
        <Route path="/auth/reset/:id" element={<Reset />}></Route>
        {/* Auth Routes End */}

        {/* Payment Routes */}
        <Route path="/payment/paystack" element={<PaystackCheckout />}></Route>
        <Route
          path="/payment/flutterwave"
          element={<FlutterwaveCheckout />}
        ></Route>
        <Route path="/payment/ghana-payment" element={<GhanaPayment />}></Route>
        <Route path="/payment/kenya-payment" element={<KenyaPayment />}></Route>
        <Route
          path="/payment/tanzania-payment"
          element={<TanzaniaPayment />}
        ></Route>
        <Route
          path="/payment/uganda-payment"
          element={<UgandaPayment />}
        ></Route>
        <Route
          path="/payment/cameroon-payment"
          element={<CameroonPayment />}
        ></Route>
        <Route path="/payment/wa-payment" element={<SlPayment />}></Route>
        <Route path="/payment/benin-payment" element={<BeninPayment />}></Route>
        {/* Payment Routes End */}

        {/* User Profile Routes Start */}
        <Route path="/dashboard" element={<Profile />}></Route>
        <Route path="/dashboard/profile" element={<Profile />}></Route>
        <Route path="/dashboard/50odds" element={<Odds50 />}></Route>
        <Route path="/dashboard/smartbet" element={<SmartBet />}></Route>
        <Route path="/dashboard/weekend10" element={<Weekend10 />}></Route>
        <Route path="/dashboard/payment" element={<Payment />}></Route>
        <Route path="/dashboard/rollover" element={<Rollover />}></Route>
        <Route path="/dashboard/acca" element={<ACCA />}></Route>
        <Route path="/dashboard/store" element={<Store />}></Route>
        <Route path="/dashboard/glossary" element={<Glossary />}></Route>
        <Route path="/dashboard/hiring" element={<Hiring />}></Route>
        <Route
          path="/dashboard/puntersguide"
          element={<PuntersGuide />}
        ></Route>
        <Route path="/dashboard/bankertips" element={<BankersTip />}></Route>
        <Route path="/dashboard/subscribe" element={<Subscribe />}></Route>
        <Route path="/dashboard/odds3" element={<ProfileSure3 />}></Route>
        <Route path="/dashboard/odds2" element={<ProfileSure2 />}></Route>

        {/* User Profile Routes End */}

        {/* Store Routes Start */}
        <Route path="/tip-store/:name" element={<StorePage />}></Route>
        {/* Store Routes Start */}

        {/* Nav Bar Routes Start */}
        <Route path="/tips-store" element={<TipStore />}></Route>
        <Route path="/our-plans" element={<OurPlans />}></Route>
        <Route path="/leagues" element={<Leagues />} />
        <Route path="/predict-win" element={<PredictWin />} />
        {/* Nav Bar Routes Start */}
        <Route path="/how-to-pay" element={<LandSub />}></Route>
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/leagues/:name" element={<League />} />
        <Route path="/terms-and-condition" element={<TandC />} />
        <Route path="/tipsstore" element={<TipStore />} />
        {/* Error Route Start */}
        <Route path="*" element={<PageNotFound />} />
        {/* Error Route End */}
      </Routes>
      <ToastContainer limit={1} />
    </div>
  );
}

export default App;
