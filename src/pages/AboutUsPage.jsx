import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Navbar from "./Navbar";

const AboutUsPage = () => {
  return (
    <div>
      <Navbar /> {/* Navbar added here */}
      <div className="container my-5">
        <h1 className="text-center mb-4">About Us</h1>

        {/* Adding Restaurant Image */}
        <div className="text-center mb-4">
          <img
            src="https://indianpunjabibazaar.ca/assets/uploads/header_images/about5.jpg" // You can replace this with an actual restaurant image URL
            alt="Restaurant"
            className="img-fluid rounded"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        <p className="lead">
          Welcome to our restaurant, where great food and a welcoming atmosphere
          come together. We are committed to providing a memorable dining
          experience with every meal we serve. Our chefs use the finest
          ingredients to create dishes that delight your taste buds.
        </p>
        <p className="lead">
          Our restaurant offers a wide variety of cuisines to satisfy all
          preferences. Whether you're in the mood for a hearty meal or a light
          snack, we have something special just for you. Thank you for choosing
          us, and we look forward to serving you!
        </p>

        <h2 className="mt-5 mb-3">Our Values</h2>
        <ul className="list-group">
          <li className="list-group-item">Quality Ingredients</li>
          <li className="list-group-item">Exceptional Customer Service</li>
          <li className="list-group-item">Passion for Cooking</li>
          <li className="list-group-item">A Cozy Dining Experience</li>
        </ul>

        <h2 className="mt-5 mb-3">Contact Us</h2>
        <p>
          Have questions, suggestions, or feedback? We'd love to hear from you!
          Reach out to us at:
          <a href="mailto:contact@ourrestaurant.com" className="text-primary">
            {" "}
            contact@ourrestaurant.com
          </a>
        </p>

        {/* You can add a "Back to Home" button */}
        <div className="text-center mt-5">
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
