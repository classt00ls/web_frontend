import { FaEnvelope, FaMobileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "/src/assets/CLASSTOOLS_LOGOS_1111 1.png";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [footerLinks, setFooterLinks] = useState([]);
  const [newsletterText, setNewsletterText] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // const response = await axios.get(`${BaseUrl}/home-content`);
        const response = await axios.get("/homeContent.json");
        setFooterLinks(response.data.footer_links || []);
        setNewsletterText(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch footerLinks");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const quickLinks = (footerLinks && footerLinks.slice(0, 4)) || [];
  const profileLinks = (footerLinks && footerLinks.slice(4)) || [];

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email) {
      toast.error("Please enter a valid email address.");
      return;
    }
    try {
      // const response = await fetch(`${BaseUrl}/subscribe-newsletter`, {
      const response = await fetch("/email.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (response.ok && data.success) {
        toast.success(data.message);
        setEmail("");
      } else {
        toast.error(data.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to subscribe. Please try again later.");
    }
  };

  return (
    <div className=" bg-[#1F1B2D] mt-10">
      <div className="footer  container mx-auto text-neutral-content p-10">
        <aside>
          <img src={logo} alt="" />
          <div className="ml-3">
            <div className="flex gap-3 items-center ">
              <FaEnvelope className="text-red-600 mt-1" />
              <p>classtools.io@gmail.com</p>
            </div>
            <br />
            <div className="flex gap-3 items-center ">
              <FaMobileAlt className="text-red-600 mt-1" />
              <p>(406) 555-0120</p>
            </div>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title text-[#FFFFFF] mb-2">Quick Links</h6>
          {quickLinks.map((link, index) => (
            <Link key={index} to={link.url} className="block hover:underline">
              {link.title}
            </Link>
          ))}
        </nav>
        <nav>
          <h6 className="footer-title text-[#FFFFFF] mb-2">Profile</h6>
          {profileLinks.map((link, index) => (
            <Link key={index} to={link.url} className="block hover:underline">
              {link.title}
            </Link>
          ))}
        </nav>
        <nav>
          <h6 className="footer-title text-[#FFFFFF]">
            Subscribe to our newsletter
          </h6>
          <a className="link link-hover">{newsletterText.newsletter_text}</a>
          <form
            onSubmit={handleSubmit}
            className="flex items-center justify-center mt-1 text-white"
          >
            <div className="flex items-center max-w-3xl bg-black p-3 h-[50px] md:w-[380px] border border-gray-600 shadow-lg rounded-full overflow-hidden">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaEnvelope className="text-[#FFFFFF96] w-[14px] h-[12px]" />
                </div>
                <input
                  type="email"
                  className="w-full text-[15px] pl-10 pr-4 py-3 bg-black rounded-full border-none focus:outline-none"
                  placeholder="Your Email?"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-orange-500 text-[13px] text-white px-[16px] py-[9px] rounded-full hover:bg-orange-600"
              >
                Subscribe
              </button>
            </div>
          </form>
        </nav>
      </div>

      <hr />

      <div className="  ">
        <div className="footer  container mx-auto text-neutral-content items-center p-4">
          <aside className="grid-flow-col items-center md:place-self-stretch  place-self-center">
            <p>
              © ClassTools.io{new Date().getFullYear()} . All right reserved.
            </p>
          </aside>
          <nav className="flex flex-col md:flex-row justify-center items-center place-self-center ">
            <div className=" flex gap-3">
              <Link to="about">About</Link>
              <Link to="blog">Blog</Link>
              <Link to="support">Support</Link>
              <Link to="contact">Contact</Link>
            </div>
            <div className=" flex gap-3">
              <Link to="facebook.com">
                <FaXTwitter className="text-white p-1 hover:bg-white hover:text-red-700 hover:rounded-full text-2xl" />
              </Link>
              <Link to="facebook.com">
                <FaFacebook className="text-white p-1 hover:bg-white hover:text-red-700 hover:rounded-full text-2xl" />
              </Link>
              <Link to="facebook.com">
                <FaInstagram className="text-white p-1 hover:bg-white hover:text-red-700 hover:rounded-full text-2xl" />
              </Link>
              <Link to="facebook.com">
                <FaLinkedin className="text-white p-1 hover:bg-white hover:text-red-700 hover:rounded-full text-2xl" />
              </Link>
              <Link to="facebook.com">
                <FaYoutube className="text-white p-1 hover:bg-white hover:text-red-700 hover:rounded-full text-2xl" />
              </Link>
            </div>
          </nav>
        </div>
      </div>
      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Footer;
