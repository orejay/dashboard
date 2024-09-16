import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import Messages from "./pages/Messages";
import PredictAndWin from "./pages/PredictAndWin";
import PwTandC from "./pages/PwTandC";
import PandW from "./pages/PandW";
const Home = lazy(() => import("./pages/nav/Home"));
const SlPayment = lazy(() => import("./components/SlPayment"));
const Odds50 = lazy(() => import("./components/Odds50"));
const Profile = lazy(() => import("./pages/Profile"));
const Subscribe = lazy(() => import("./pages/Subscribe"));
const LandSub = lazy(() => import("./pages/nav/Payments"));
const Reset = lazy(() => import("./pages/auth/Reset"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));
const Signup = lazy(() => import("./pages/auth/Signup"));
const Login = lazy(() => import("./pages/auth/Login"));
const Ad = lazy(() => import("./pages/Ad"));
const Payment = lazy(() => import("./components/Payment"));
const BankersTip = lazy(() => import("./components/BankersTip"));
const PuntersGuide = lazy(() => import("./components/PuntersGuid"));
const Glossary = lazy(() => import("./components/Glossary"));
const Rollover = lazy(() => import("./components/Rollover"));
const Store = lazy(() => import("./components/Store"));
const ACCA = lazy(() => import("./components/Acca"));
const Weekend10 = lazy(() => import("./components/Weekend10"));
const SmartBet = lazy(() => import("./components/SmartBet"));
const PaystackCheckout = lazy(() => import("./components/PaystackCheckout"));
const FlutterwaveCheckout = lazy(() =>
  import("./components/FlutterwaveCheckout")
);
const GhanaPayment = lazy(() => import("./components/GhanaPayment"));
const KenyaPayment = lazy(() => import("./components/KenyaPayment"));
const TandC = lazy(() => import("./pages/TandC"));
const Leagues = lazy(() => import("./pages/nav/Leagues"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const League = lazy(() => import("./pages/League"));
const OurPlans = lazy(() => import("./pages/nav/OurPlans"));
const TipStore = lazy(() => import("./pages/nav/TipStore"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const ProfileSure2 = lazy(() => import("./components/ProfileSure2"));
const ProfileSure3 = lazy(() => import("./components/ProfileSure3"));
const BeninPayment = lazy(() => import("./components/BeninPayment"));
const CameroonPayment = lazy(() => import("./components/CameroonPayment"));
const UgandaPayment = lazy(() => import("./components/UgandaPayment"));
const TanzaniaPayment = lazy(() => import("./components/TanzaniaPayment"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const PredictWin = lazy(() => import("./pages/nav/PredictWin"));
const StorePage = lazy(() => import("./pages/StorePage"));
const PageNotFound = lazy(() => import("./pages/Error/PageNotFound"));
const Hiring = lazy(() => import("./components/Hiring"));

function App() {
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const isMobile = useMediaQuery("(max-width:450px)");
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (isInitialLoad) {
      const timer = setTimeout(() => {
        setIsInitialLoad(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [isInitialLoad]);

  const Loader = () => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: isMobile ? "24px" : "36px",
        height: "100vh",
      }}
    >
      <h1>Site Is Loading...</h1>
    </div>
  );

  return (
    <div>
      <Suspense
        fallback={
          <div className="h-screen w-screen flex justify-center items-center">
            <p>Loading...</p>
          </div>
        }
      >
        <Routes>
          <Route
            path="/"
            element={isInitialLoad ? <Loader /> : <Home />}
          ></Route>
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
          <Route
            path="/payment/paystack"
            element={<PaystackCheckout />}
          ></Route>
          <Route
            path="/payment/flutterwave"
            element={<FlutterwaveCheckout />}
          ></Route>
          <Route
            path="/payment/ghana-payment"
            element={<GhanaPayment />}
          ></Route>
          <Route
            path="/payment/kenya-payment"
            element={<KenyaPayment />}
          ></Route>
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
          <Route
            path="/payment/benin-payment"
            element={<BeninPayment />}
          ></Route>
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
          <Route path="/pw-terms" element={<PwTandC />} />
          <Route path="/dashboard/pw-history" element={<PandW />}></Route>
          <Route path="/dashboard/pw" element={<PredictAndWin />}></Route>
          <Route path="/dashboard/messages" element={<Messages />}></Route>
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
      </Suspense>
      <ToastContainer limit={1} />
    </div>
  );
}

export default App;
