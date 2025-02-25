import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Navbar from "./Navbar";

const API_URL = "https://67bd2b26321b883e790b6dad.mockapi.io/Resturant";

const DishAPIList = () => {
  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState("");
  const [filterCuisine, setFilterCuisine] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(setDishes)
      .catch(console.error);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Do you want to delete this dish?")) {
      fetch(`${API_URL}/${id}`, { method: "DELETE" })
        .then(() => setDishes(dishes.filter((dish) => dish.id !== id)))
        .catch(console.error);
    }
  };

  const filteredDishes = dishes
    .filter((dish) => dish.name.toLowerCase().includes(search.toLowerCase()))
    .filter((dish) => (filterCuisine ? dish.cuisine === filterCuisine : true))
    .sort((a, b) => (sortOrder === "asc" ? a.price - b.price : b.price - a.price));

  return (
    <div>
      <Navbar />
      <div className="container my-5">
        <h2 className="text-center mb-4">Dish List</h2>

        <div className="mb-3 d-flex flex-wrap gap-2 justify-content-center">
          <input
            type="text"
            placeholder="Search..."
            className="form-control w-auto"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="form-control w-auto"
            value={filterCuisine}
            onChange={(e) => setFilterCuisine(e.target.value)}
          >
            <option value="">All Cuisines</option>
            {[...new Set(dishes.map((dish) => dish.cuisine))].map((cuisine) => (
              <option key={cuisine} value={cuisine}>{cuisine}</option>
            ))}
          </select>
          <button className="btn btn-secondary" onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
            Sort by Price ({sortOrder === "asc" ? "Low to High" : "High to Low"})
          </button>
        </div>

        {filteredDishes.length === 0 ? (
          <p className="text-center text-muted">No dishes found.</p>
        ) : (
          <div className="row">
            {filteredDishes.map(({ id, name, cuisine, price, image }) => (
              <div key={id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="card shadow-sm">
                  {image ? (
                    <img src={image} alt={name} className="card-img-top" style={{ height: "200px", objectFit: "cover" }} />
                  ) : (
                    <div className="card-img-top bg-light d-flex align-items-center justify-content-center" style={{ height: "200px" }}>
                      <span className="text-muted">No Image</span>
                    </div>
                  )}
                  <div className="card-body text-center">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Cuisine: {cuisine}</p>
                    <p className="card-text">Price: ${price ? Number(price).toFixed(2) : "N/A"}</p>
                    <div className="d-flex justify-content-center mt-3">
                      <Link to={`/edit-api/${id}`} className="btn btn-warning btn-sm mx-2">
                        <FaPen />
                      </Link>
                      <button className="btn btn-danger btn-sm" onClick={() => handleDelete(id)}>
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-4 text-center">
          <Link to="/create-api" className="btn btn-primary">Add New Dish</Link>
        </div>
      </div>
    </div>
  );
};

export default DishAPIList;
