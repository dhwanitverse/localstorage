import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const API_URL = "https://67bd2b26321b883e790b6dad.mockapi.io/Resturant";

const CreateDishAPIForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ingredients, setIngredients] = useState([]);
  const { register, handleSubmit, reset, setValue, watch } = useForm();

  useEffect(() => {
    if (id) {
      fetch(`${API_URL}/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setValue("name", data.name);
          setValue("cuisine", data.cuisine);
          setValue("price", data.price);
          setValue("image", data.image);
          setIngredients(data.ingredients || []);
        })
        .catch((error) => console.error("Error fetching dish data:", error));
    }
  }, [id, setValue]);

  const onSubmit = async (data) => {
    const dishData = { ...data, ingredients, id: id || uuidv4() };

    try {
      if (id) {
        await fetch(`${API_URL}/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dishData),
        });
        alert("Dish API updated successfully!");
      } else {
        await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dishData),
        });
        alert("Dish API added successfully!");
      }
      reset();
      navigate("/dish-api-list");
    } catch (error) {
      console.error("Error saving dish:", error);
    }
  };

  const addIngredient = () => {
    const newIngredient = watch("ingredientInput");
    if (newIngredient) {
      setIngredients([...ingredients, newIngredient]);
      setValue("ingredientInput", "");
    }
  };

  const removeIngredient = (index) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h2 className="text-center mb-4">{id ? "Edit Dish API" : "Add Dish API"}</h2>
        <form className="p-4 shadow-lg rounded bg-light" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Dish Name</label>
            <input type="text" className="form-control" placeholder="Enter dish name" {...register("name")} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Cuisine</label>
            <select className="form-control" {...register("cuisine")} required>
              <option value="">Select Cuisine</option>
              <option value="Italian">Italian</option>
              <option value="Chinese">Chinese</option>
              <option value="Indian">Indian</option>
              <option value="Mexican">Mexican</option>
              <option value="Japanese">Japanese</option>
              <option value="French">French</option>
              <option value="Mediterranean">Mediterranean</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Price ($)</label>
            <input type="number" className="form-control" placeholder="Enter price" {...register("price")} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Dish Image URL</label>
            <input type="text" className="form-control" placeholder="Enter image URL" {...register("image")} required />
          </div>

          <button type="submit" className={`btn ${id ? "btn-warning" : "btn-success"} w-100 my-2`}>
            {id ? "Update Dish API" : "Add Dish API"}
          </button>
        </form>

        <div className="mt-4">
          <Link to="/dish-api-list" className="btn btn-primary w-100">
            Go to Dish API List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateDishAPIForm;
