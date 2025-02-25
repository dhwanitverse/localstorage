import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./pages/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="container my-5">
        <div className="text-center mb-4">
          <h1>Welcome to Our Restaurant!</h1>
          <p className="lead">
            Delicious meals, innovative solutions, and exceptional service!
          </p>
        </div>

        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/70bc81c8-b277-407d-8c3a-5c1a3e501732-4-hamburger.jpg"
                alt="Delicious Meals"
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Delicious Meals</h5>
                <p className="card-text">
                  Enjoy a variety of exquisite dishes made with fresh
                  ingredients.
                </p>
                <Link to="/create-api" className="btn btn-primary">
                  Order Now
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src="https://thesmartlocal.com/images/easyblog_articles/4708/b2ap3_thumbnail_98710033.jpeg"
                alt="Perfect Ambience"
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Perfect Ambience</h5>
                <p className="card-text">
                  Experience a cozy and relaxing atmosphere while dining with
                  us.
                </p>
                <Link to="/create-api" className="btn btn-primary">
                  Reserve a Table
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src="https://livepositively.com/images/gallery/article/12690_customerexperiencetips.webp"
                alt="Great Customer Service"
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Great Customer Service</h5>
                <p className="card-text">
                  Our friendly staff ensures you have a fantastic dining
                  experience.
                </p>
                <Link to="/create-api" className="btn btn-primary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <h2>Why Choose Our Restaurant?</h2>
          <p>
            We offer a mix of traditional and contemporary dishes, served with
            the best customer service in town.
          </p>
          <Link to="/about" className="btn btn-success">
            Learn More About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
