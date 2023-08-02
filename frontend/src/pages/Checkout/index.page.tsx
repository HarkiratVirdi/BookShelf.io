import React from "react";
import Product from "../../components/Product/index.comp";
import Checkout from "../../components/Checkout/index.comp";
import HeaderSearch from "../../components/Header/index.comp";
import FooterLinks from "../../components/Footer/index.comp";

const CheckoutPage = () => {
  return (
    <>
      <HeaderSearch />
      <div className="mt-12 mx-4">
        <Checkout />
      </div>
      <FooterLinks
        data={[
          {
            title: "Bookshelf.io",
            links: [
              {
                link: "#",
                label: "Contact",
              },
              {
                link: "#",
                label: "Privacy",
              },
              {
                link: "#",
                label: "Blog",
              },
              {
                link: "#",
                label: "Store",
              },
              {
                link: "#",
                label: "Careers",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default CheckoutPage;
