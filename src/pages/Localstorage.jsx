import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

const LocalStorageForm = () => {
  const [dishes, setDishes] = useState([]);
  const [editId, setEditId] = useState(null);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("dishlist")) || [];
    setDishes(storedData);
  }, []);

  useEffect(() => {
    localStorage.setItem("dishlist", JSON.stringify(dishes));
  }, [dishes]);

  const onSubmit = (data) => {
    if (editId === null) {
      setDishes([...dishes, { id: uuidv4(), ...data }]);
      alert("Dish added successfully");
    } else {
      setDishes(
        dishes.map((dish) =>
          dish.id === editId ? { ...data, id: editId } : dish
        )
      );
      alert("Dish updated successfully");
      setEditId(null);
    }
    reset();
  };

  const handleDelete = (id) => {
    if (confirm("Do you want to delete this dish?")) {
      setDishes(dishes.filter((dish) => dish.id !== id));
    }
  };

  const handleEdit = (id) => {
    setEditId(id);
    reset(dishes.find((dish) => dish.id === id));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Dish Management Form</h2>
      <form
        className="p-4 shadow-lg rounded bg-light"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-3">
          <label className="form-label">Dish Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter dish name"
            {...register("name")}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Cuisine</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter cuisine type"
            {...register("cuisine")}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price ($)</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter price"
            {...register("price")}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Ingredients</label>
          <textarea
            className="form-control"
            placeholder="Enter ingredients"
            {...register("ingredients")}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Dish Image URL</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter image URL"
            {...register("image")}
            required
          />
        </div>
        <button
          type="submit"
          className={`btn ${editId ? "btn-warning" : "btn-success"} w-100 my-2`}
        >
          {editId ? "Update Dish" : "Add Dish"}
        </button>
      </form>

      <table className="table table-striped mt-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Price ($)</th>
            <th>Ingredients</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dishes.map((dish, index) => (
            <tr key={dish.id}>
              <td>{index + 1}</td>
              <td>{dish.name}</td>
              <td>{dish.cuisine}</td>
              <td>{dish.price}</td>
              <td>{dish.ingredients}</td>
              <td>
                <img
                  src={dish.image}
                  alt={dish.name}
                  width="100"
                  height="70"
                  className="img-thumbnail"
                />
              </td>
              <td>
                <button
                  onClick={() => handleEdit(dish.id)}
                  className="btn btn-warning me-2"
                >
                  <FaPen />
                </button>
                <button
                  onClick={() => handleDelete(dish.id)}
                  className="btn btn-danger"
                >
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LocalStorageForm;
