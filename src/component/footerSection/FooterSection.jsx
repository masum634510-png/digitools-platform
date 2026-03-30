import React from "react";
import instragramPng from "../../assets/Instagram.png";
import facebookPng from "../../assets/Facebook.png";
import twitterPng from "../../assets/Twitter.png";

const FooterSection = () => {
    return (
        <section className=" bg-[#101727]">
            <footer className="footer grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5  text-white  w-10/12 mx-auto py-8 mb-8">
                <aside>
                    <h2 className="text-3xl font-bold text-center md:text-left">DigiTools</h2>
                    <p className="text-[#9f9999]">
                        Premium digital tools for creators, <br></br> professionals, and
                        businesses. Work smarter <br></br> with our suite of powerful tools.
                    </p>
                </aside>

                <nav>
                    <h6 className="footer-title text-white">Product</h6>
                    <a className="link link-hover text-[#9f9999]">Features</a>
                    <a className="link link-hover text-[#9f9999]">Pricing</a>
                    <a className="link link-hover text-[#9f9999]">Templates</a>
                    <a className="link link-hover text-[#9f9999]">Integrations</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover text-[#9f9999]">About</a>
                    <a className="link link-hover text-[#9f9999]">Blog</a>
                    <a className="link link-hover text-[#9f9999]">Careers</a>
                    <a className="link link-hover text-[#9f9999]">Press</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Resources</h6>
                    <a className="link link-hover text-[#9f9999]">Documentation</a>
                    <a className="link link-hover text-[#9f9999]">Help Center</a>
                    <a className="link link-hover text-[#9f9999]">Community</a>
                    <a className="link link-hover text-[#9f9999]">Contact</a>
                </nav>
                <div>
                    <h6 className="text-[16px]">Social Link</h6>
                    <div className="flex gap-2">
                        <img src={instragramPng} alt="" />
                        <img src={facebookPng} alt="" />
                        <img src={twitterPng} alt="" />
                    </div>
                </div>
            </footer>
            <div className="w-10/12 mx-auto text-[#9f9999]  ">
                <div>
                    <hr className="border dorder-white" />
                </div>
                <div className="flex justify-between py-5">
                    <div>
                        <p>© 2026 Digitools. All rights reserved.</p>
                    </div>
                    <div className="flex gap-4">
                        <p>Privacy Policy </p>
                        <p>Terms of Service </p>
                        <p> Cookies</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FooterSection;
