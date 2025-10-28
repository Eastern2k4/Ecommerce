import React from "react";
import { Link } from "react-router-dom";
import IMAGE10 from "../assets/images/IMAGE-10.png";
import IMAGE11 from "../assets/images/IMAGE-11.png";
import IMAGE12 from "../assets/images/IMAGE-12.png";
import IMAGE13 from "../assets/images/IMAGE-13.png";
import IMAGE14 from "../assets/images/IMAGE-14.png";
import IMAGE15 from "../assets/images/IMAGE-15.png";
import IMAGE16 from "../assets/images/IMAGE-16.png";
import IMAGE17 from "../assets/images/IMAGE-17.png";
import IMAGE18 from "../assets/images/IMAGE-18.png";
import IMAGE4 from "../assets/images/IMAGE-4.png";
import IMAGE5 from "../assets/images/IMAGE-5.png";
import IMAGE6 from "../assets/images/IMAGE-6.png";
import IMAGE7 from "../assets/images/IMAGE-7.png";
import IMAGE from "../assets/images/IMAGE.png";
import button from "../assets/images/button.svg";
import i2 from "../assets/images/i-2.svg";
import i4 from "../assets/images/i-4.svg";
import i from "../assets/images/i.svg";
import image110 from "../assets/images/image-110.png";
import image113 from "../assets/images/image-113.png";
import image122 from "../assets/images/image-122.png";
import image85 from "../assets/images/image-85.png";
import image87 from "../assets/images/image-87.png";
import image1 from "../assets/images/image.png";
import svg from "../assets/images/svg.svg";
import { Badge } from "../components/Badge/Badge";
import { Button } from "../components/Button/Button";
import { Rating } from "../components/Rating/Rating";

export default function Home() {
  return (
    <main className="bg-white grid justify-items-center items-start w-screen">
      <div className="w-full max-w-[1440px] flex flex-col items-start">
        {/* Header */}
<header className="sticky top-0 z-30 w-full border-b bg-white/80 backdrop-blur">
  <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-6">
    <div className="text-2xl font-semibold tracking-tight text-gray-900">TechNest</div>

    <nav className="hidden gap-10 text-sm text-gray-700 md:flex">
      <div className="flex items-center gap-1">
        <button className="flex items-center gap-1 hover:text-gray-900">
          Catalog
          <img src={svg} alt="Dropdown" className="h-3 w-3" />
        </button>
        <a className="hover:text-gray-900" href="#phone">Phone</a>
      </div>
      <a className="hover:text-gray-900" href="#laptop">Laptop</a>
      <a className="hover:text-gray-900" href="#screen">Screen</a>
      <a className="hover:text-gray-900" href="#headphone">Headphone</a>
    </nav>

    <div className="flex items-center gap-5">
      <img src={button} alt="Search" className="h-5 w-5" />
      <button className="text-xl text-gray-500">🛒</button>
      <img src={i2} alt="User" className="h-5 w-5" />
       {/*<button className="rounded-lg bg-gray-900 px-4 py-2 text-sm text-white">Sign In</button>*/}
       <Link to="/signin" className="bg-[#404757] text-white text-sm px-4 py-2 rounded-lg">
          Sign In
        </Link>
      
    </div>
  </div>
</header>

{/* Hero Section */}
<section className="w-full bg-gradient-to-b from-[#f8fafc] via-white to-[#eff6ff] py-14">
  <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
    {/* Left content */}
    <div className="flex flex-col gap-6">
      <Badge badgeVariant="default" className="items-center gap-2 px-4 py-0" />

      <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl md:leading-[70px]">
        Upgrade Your <br /> Tech Life
      </h1>

      <p className="text-base leading-relaxed text-gray-600 md:text-xl">
        Shop the latest phones, laptops, and accessories all in one place.
        Experience premium technology with unbeatable prices and expert support.
      </p>

      <div className="flex flex-wrap gap-3">
        <Button color="primary" size="medium" className="px-8 py-3 shadow" />
        <Button color="default" size="medium" className="px-8 py-3" />
      </div>

      <div className="pt-2">
        <Rating numberOfStars="five" />
      </div>
    </div>

    {/* Right gallery (thay cho khối absolute) */}
    <div className="relative">
      {/* Nhãn Hot Deals */}
      <div className="absolute right-2 top-2 z-10 flex items-center gap-2 rounded-full bg-[#0066ff] px-3 py-1 text-xs font-semibold text-white shadow">
        <img src={i4} alt="Hot Deals" className="h-4 w-4" />
        Hot Deals
      </div>

      {/* Lưới 2 cột 2 hàng – không dùng absolute, tự co giãn */}
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-2xl bg-white p-3 shadow-sm">
          <ProductCard image="/img-5.png" title="iPhone 15 Pro" price="$999" />
        </div>
        <div className="rounded-2xl bg-white p-3 shadow-sm">
          <ProductCard image="/img.png" title="MacBook Pro" price="$1,999" />
        </div>
        <div className="rounded-2xl bg-white p-3 shadow-sm">
          <ProductCard image="/img-2.png" title="AirPods Pro" price="$249" />
        </div>
        <div className="rounded-2xl bg-white p-3 shadow-sm">
          <ProductCard image="/img-3.png" title="Gaming Monitor" price="$599" />
        </div>
      </div>
    </div>
  </div>
</section>


        {/* Catalog Section */}
        <section className="w-full mt-20 px-12">
          <h2 className="text-5xl text-center mb-10">Catalogs</h2>
          <div className="grid grid-cols-5 gap-8">
            <CatalogItem icon="📱" title="Smartphones" count="45 items" />
            <CatalogItem icon="💻" title="Laptops" count="32 items" />
            <CatalogItem icon="🖥" title="Screen" count="19 items" />
            <CatalogItem icon="🎧" title="Headphone" count="28 items" />
            <CatalogItem icon="⚡" title="Accessories" count="67 items" />
          </div>
        </section>

        {/* Product Sections */}
        <ProductSection
          title="Smartphone"
          viewAll
          href="#"
          products={[
            {
              image: image110,
              title: "iPhone 14 Pro Max 256GB",
              rating: "4.8 (124)",
              price: "$1897",
            },
            {
              image: IMAGE7,
              title: "OPPO Find N3 Flip",
              rating: "4.7 (34)",
              price: "$1149",
            },
            {
              image: IMAGE13,
              title: "Samsung Galaxy S23 FE",
              rating: "4.6 (67)",
              price: "$629",
            },
            {
              image: IMAGE15,
              title: "Samsung Galaxy S24 Ultra",
              rating: "4.9 (89)",
              price: "$1299",
            },
          ]}
        />

        <ProductSection
          title="Laptop"
          viewAll
          href="#"
          products={[
            {
              image: IMAGE14,
              title: "MacBook Air M4 13 inch",
              specs: {
                Processor: "Apple M4 Chip",
                Memory: "16GB Unified",
                Storage: "512GB SSD",
                Display: '13.6" Retina',
              },
              price: "$1,499",
            },
            {
              image: IMAGE17,
              title: "MSI Katana 15 B13VEK",
              specs: {
                Processor: "Intel i7-13620H",
                Memory: "16GB DDR5",
                Storage: "1TB SSD",
                Graphics: "RTX 4060",
              },
              price: "$1,799",
            },
            {
              image: IMAGE4,
              title: "ASUS ROG Strix G513",
              specs: {
                Processor: "AMD Ryzen 7",
                Memory: "16GB DDR4",
                Storage: "512GB SSD",
                Graphics: "RTX 3060",
              },
              price: "$1,599",
            },
            {
              image: IMAGE16,
              title: "Dell XPS 15 9530",
              specs: {
                Processor: "Intel i9-13900H",
                Memory: "32GB DDR5",
                Storage: "1TB SSD",
                Graphics: "RTX 4070",
              },
              price: "$2,299",
            },
          ]}
        />

        <ProductSection
          title="Screen, PC"
          viewAll
          href="#"
          products={[
            {
              image: IMAGE10,
              title: "Dell OptiPlex 7090",
              specs: {
                Processor: "Intel i7-11700",
                Memory: "16GB DDR4",
                Storage: "512GB SSD",
                "Form Factor": "Small Form",
              },
              price: "$1,299",
            },
            {
              image: IMAGE6,
              title: "ASUS ROG Strix GT35",
              specs: {
                Processor: "Intel i9-11900KF",
                Memory: "32GB DDR4",
                Graphics: "RTX 3080",
                Storage: "1TB SSD",
              },
              price: "$2,899",
            },
            {
              image: IMAGE11,
              title: "Acer Aspire TC-1760",
              specs: {
                Processor: "Intel i5-12400",
                Memory: "8GB DDR4",
                Storage: "256GB SSD",
                Graphics: "Intel UHD",
              },
              price: "$699",
            },
            {
              image: IMAGE12,
              title: "BenQ ZOWIE XL2546K",
              specs: {
                Size: '24.5" Gaming',
                Resolution: "1920x1080",
                "Refresh Rate": "240Hz",
                "Response Time": "1ms",
              },
              price: "$549",
            },
          ]}
        />

        <ProductSection
          title="Headphone"
          viewAll
          href="#"
          products={[
            {
              image: IMAGE5,
              title: "Sony WH-1000XM5",
              rating: "4.9 (156)",
              price: "$399",
            },
            {
              image: IMAGE,
              title: "Bose QuietComfort 45",
              rating: "4.8 (203)",
              price: "$329",
            },
            {
              image: IMAGE18,
              title: "Apple AirPods Max",
              rating: "4.6 (89)",
              price: "$549",
            },
            {
              image: image1,
              title: "Sennheiser HD 660S2",
              rating: "4.7 (142)",
              price: "$499",
            },
          ]}
        />

        <ProductSection
          title="Accessories"
          viewAll
          href="#"
          products={[
            {
              image: image113,
              title: "Belkin UltraGlass 2 Screen Protector for iPhone 17",
              rating: "4.9 (156)",
              price: "$10",
            },
            {
              image: image85,
              title: "Honeywell 4-in-1 USB Hub",
              rating: "4.8 (203)",
              price: "$299",
            },
            {
              image: image122,
              title: "STRIFF Adjustable Laptop Stand",
              rating: "4.6 (89)",
              price: "$399",
            },
            {
              image: image87,
              title: "Dyazo Water Resistant Laptop Sleeve",
              rating: "4.7 (142)",
              price: "$499",
            },
          ]}
        />

        {/* Contact Section */}
        <section className="w-full mt-20 bg-gradient-to-b from-white via-[#f5f5f5] to-[#ececec] py-20">
          <div className="max-w-[1280px] mx-auto flex justify-between items-center">
            <div className="w-96 h-96 bg-[url(/img-4.png)] bg-cover bg-center" />
            <form className="w-[576px] bg-white/80 p-8 rounded-3xl shadow-lg border border-gray-200 flex flex-col gap-6">
              <h2 className="text-4xl text-gray-800">Contact Us</h2>
              <p className="text-lg text-gray-600">
                Get in touch with our team
              </p>
              <label className="text-sm text-gray-700">Your Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full p-3 rounded-xl border bg-gray-50"
              />
              <label className="text-sm text-gray-700">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full p-3 rounded-xl border bg-gray-50"
              />
              <label className="text-sm text-gray-700">Your Message</label>
              <textarea
                placeholder="Tell us how we can help you..."
                className="w-full p-3 h-32 rounded-xl border bg-gray-50"
              />
              <button
                type="submit"
                className="bg-gray-800 text-white py-3 rounded-xl flex items-center justify-center gap-2 shadow-md"
              >
                <img src={i} alt="Send" className="w-4 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full text-center py-6 text-sm text-gray-500">
          © 2025 TechStore. All rights reserved.
        </footer>
      </div>
    </main>
  );
};

const ProductCard = ({ image, title, price }) => (
  <div className="w-[252px] bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
    <div
      className="w-[204px] h-32 bg-cover bg-center rounded-lg"
      style={{ backgroundImage: `url(${image})` }}
    />
    <h3 className="mt-4 text-base text-[#111827]">{title}</h3>
    <p className="text-base text-[#0066ff]">{price}</p>
  </div>
);

const CatalogItem = ({ icon, title, count }) => (
  <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow">
    <div className="text-6xl">{icon}</div>
    <h4 className="mt-4 text-base text-[#1a1a1a]">{title}</h4>
    <p className="text-sm text-[#666666]">{count}</p>
  </div>
);

const ProductSection = ({ title, viewAll, href, products }) => (
  <section className="w-full mt-20 px-6">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-5xl text-black">{title}</h2>
      {viewAll && (
        <a href={href} className="text-[#4318d1] text-2xl">
          View All →
        </a>
      )}
    </div>
    <div className="grid grid-cols-4 gap-8">
      {products.map((product, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover rounded-md"
          />
          <h3 className="mt-4 text-lg font-medium text-gray-900">
            {product.title}
          </h3>
          {product.rating && (
            <p className="text-sm text-gray-600">{product.rating}</p>
          )}
          {product.specs && (
            <ul className="text-sm text-gray-600 mt-2">
              {Object.entries(product.specs).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          )}
          <div className="mt-4 flex justify-between items-center">
            <span className="text-xl text-gray-900">{product.price}</span>
            <button className="bg-[#4318d1] text-white px-4 py-2 rounded-lg text-sm">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
);
