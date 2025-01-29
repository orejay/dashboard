import React from "react";
import Main from "../Main";

const PrivacyPolicy = () => {
  const PP = (
    <div className="w-full py-5 lg:py-10 " style={{ background: "#F2F2F2" }}>
      <div className="py-5 lg:py-10 md:min-h-screen  px-5 lg:px-14  mx-auto rounded-lg bg-white w-full lg:w-5/6">
        <h2
          className="mb-3 mona-head bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text"
          style={{ fontSize: "24px" }}
        >
          Privacy Policy
        </h2>
        <p className="mb-2">
          This privacy policy sets out how Tips180 Concepts (hereon referred to
          as Tips180) uses and protects any information that you give Tips180
          when you use this website. Tips180 is committed to ensuring that your
          privacy is protected. If required to provide certain information by
          which you can be identified when using this website, be assured that
          it will only be used in accordance with this privacy statement.
        </p>
        <p className="mb-5">
          Tips180 may change this policy from time to time by updating this
          page. You should check this page from time to time to ensure you are
          happy with the changes. This policy is effective from 25/12/2023.
        </p>
        <p className="mb-2">
          <span
            className="mona-head bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text"
            style={{ fontSize: "18px" }}
          >
            What we collect?
          </span>
          <br />
          <p>
            We may collect the following information:
            <ol>
              <li>1. Your name.</li>
              <li>2. Your email address.</li>
              <li>3. Your phone number and date of birth.</li>
              <li>
                4. Other information relevant to customer savers and/or offers.
              </li>
            </ol>
          </p>
          <br />
          <span
            className="mona-head bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text"
            style={{ fontSize: "18px" }}
          >
            What do we do with the information we gather?
          </span>
          <br />
          We require this information to understand your needs and provide you
          with a better service, and in particular for the following reasons:
        </p>
        <ol>
          <li>
            1. Internal record keeping. We may periodically send emails and SMS
            consisting of our products and services using the email address and
            phone numbers which you have provided.
          </li>
          <li>
            2. We may use the information to improve our products and services.
          </li>
          <li>
            3. We may periodically send promotional emails about new products,
            special offers or other information which we think you may find
            interesting using the email address which you have provided. From
            time to time, we may also use your information to contact you for
            market research purposes.
          </li>
          <li>4. We may contact you by email or phone.</li>
          <li>
            5. We may use the information to customize the website according to
            some of your interests.
          </li>
        </ol>
        <p className="mb-2 pt-5">
          <span
            className="mona-head bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text"
            style={{ fontSize: "18px" }}
          >
            Security
          </span>
          <br /> We are committed to ensuring that your information is secure.
          In order to prevent unauthorised access or disclosure, we have put in
          place suitable physical, electronic and managerial procedures to
          safeguard and secure the information we collect online. Controlling
          your personal information You may choose to restrict the collection or
          use of your personal information in the following ways:
        </p>
        <ol className="mb-2">
          <li>
            1. Whenever you are asked to fill in a form on the website, look for
            the box that you can click on indicate that you do not want the
            information to be used by anybody for direct marketing purposes. If
            you have previously agreed to us using your personal information for
            direct marketing purposes, you may change your mind at any time by
            emailing us at hello@tips180.com
          </li>
          <li>
            2. We will not sell, distribute or lease your personal information
            third parties unless we have your permission or are required by law
            to do so. We may use your personal information to send you
            promotional information about third parties which we think you may
            find interesting if you tell us that you wish this to happen.
          </li>
          <li>
            3. You may request details of personal information which we hold
            about under the Data Protection Laws. If you believe that any
            information we are holding on you is incorrect or incomplete, please
            email us as soon as possible at the above address. We will promptly
            correct any information found to be incorrect.
          </li>
          <li>
            4. Delete your Tips180 account You can delete your account at any
            time. If you change your mind, you might not be able to recover it.
          </li>
        </ol>
        <p className="mt-6 mb-2">
          <span className="font-bold mb-2 block">
            COMPANY REGISTRATION: BN 2640693
          </span>
          <span className="block font-bold">REGISTERED COMPANY ADDRESS</span>
          HFP EASTLINE COMPLEX, ABRAHAM ADESANYA, LAGOS, NIGERIA. <br />
          <span className="block mt-4">
            COPYRIGHT© 2023 TIPS180 CONCEPTS ALL RIGHTS RESERVED | POWERED BY
            TIPS180
          </span>
        </p>
      </div>
    </div>
  );

  return <Main Prop={PP} />;
};

export default PrivacyPolicy;
