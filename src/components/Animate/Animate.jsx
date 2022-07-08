import React from "react";
import { useRef } from "react";
import { useInView } from "react-hook-inview";

const Animate = () => {
  //   const animateRef = useRef();
  const [rocketRef, rocketisVisible] = useInView();
  const [ref, isVisible] = useInView();
  const viewRef = useRef();

  //   const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     setIsVisible(entry.isIntersecting);
  //   });

  //   observer.observe(animateRef.current);

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);

  const handleClick = () => {
    viewRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="animate">
      <div className="layout">
        <h1 className="title">Space Jelly</h1>
        <p className="subtitle">
          Cosmic web dev tutorials that will shock you with joy!
        </p>
        <button className="animate-btn" onClick={handleClick}>
          Go to rocket
        </button>
      </div>

      <div className="layout">
        <h2 className="posts-title">Latest Posts</h2>
        <ul>
          <li>
            <a href="https://spacejelly.dev/posts/how-to-automatically-tag-categorize-images-using-ai-with-google-vision-cloudinary/">
              How to Automatically Tag & Categorize Images Using AI with Google
              Vision & Cloudinary
            </a>
          </li>
          <li>
            <a href="https://spacejelly.dev/posts/how-to-authenticate-spotify-web-api-requests-in-next-js-with-netlify-api-auth/">
              How to Authenticate Spotify Web API Requests in Next.js with
              Netlify API Auth
            </a>
          </li>
          <li>
            <a href="https://spacejelly.dev/posts/how-to-generate-personalized-social-media-cards-for-landing-pages-with-next-js-cloudinary/">
              How to Generate Personalized Social Media Cards for Landing Pages
              with Next.js & Cloudinary
            </a>
          </li>
        </ul>
      </div>

      <div className="layout-100" style={{ backgroundColor: "#9c5bc3" }}>
        <div>
          <h2 className="heading">Courses</h2>

          <ul className="posts">
            <li>
              <a href="https://egghead.io/courses/create-an-ecommerce-store-with-next-js-and-stripe-checkout-562c?af=atzgap">
                Create an eCommerce Store with Next.js and Stripe Checkout
              </a>
            </li>
            <li>
              <a href="https://spacejelly.dev/levelupecommerce">
                Ecommerce on the Jamstack
              </a>
            </li>
            <li>
              <a href="https://fromdesignto.dev/">From Design to Development</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="layout-100" style={{ backgroundColor: "#397dff" }}>
        <div>
          <h2 className="heading">Filler content</h2>
          <p>There can be something cool here too.</p>
        </div>
      </div>

      <div className="layout">
        <h2 className="heading">Filler content</h2>
        <p>There can be something cool here too.</p>
      </div>

      <div className="layout-100" style={{ backgroundColor: "#9c5bc3" }}>
        <div ref={viewRef}>
          <h2 className="heading">Magic 🪄</h2>
          <p ref={rocketRef}>
            <span
              className={`rocket ${rocketisVisible ? "animateRocket" : ""}`}
            >
              🚀
            </span>
          </p>
        </div>
      </div>

      <div className="layout-100" style={{ backgroundColor: "#397dff" }}>
        <div>
          <h2 ref={ref} className="heading">
            Have you scrolled down here yet? 🧐
          </h2>
          <p>Idk 🤷‍♂️</p>
        </div>
      </div>

      <div className="layout">
        <h2 className="heading">Call to Action</h2>
        <p>Sign up now!</p>
      </div>
      <footer className="animate-footer">© Space Jelly, 2022</footer>
    </div>
  );
};

export default Animate;
