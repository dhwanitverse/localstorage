import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

const Localstorage = () => {
  const [user, setUser] = useState([]);
  const [id, setId] = useState(null);
  const { register, handleSubmit, reset } = useForm();

  function submit(data) {
    if (id === null) {
      const newUser = {
        id: uuidv4(),
        ...data,
      };
      setUser([...user, newUser]);
      alert("Submitted successfully");
      reset();
    } else {
      const updatedata = user.findIndex((element) => {
        return element.id === id;
      });
      const newuser = [...user];
      newuser[updatedata] = data;
      setUser(newuser);
      alert("Updated successfully");
      setId(null);
      location.reload();
    }
  }

  useEffect(() => {
    if (user.length > 0) {
      localStorage.setItem("datalist", JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    const datalist = JSON.parse(localStorage.getItem("datalist"));
    if (datalist) {
      setUser(datalist);
    }
  }, []);
  function trash(id) {
    if (confirm("Do you want to delete this data")) {
      const deletedata = user.filter((element) => {
        return element.id !== id;
      });
      setUser(deletedata);
    }
  }
  function update(id) {
    setId(id);
    const selectedUser = user.find((element) => {
      return element.id === id;
    });
    reset(selectedUser);
  }

  return (
    <>
      <h2>User Form with LocalStorage</h2>
      <form
        className="col-lg-6 p-5 my-5 mx-auto shadow"
        onSubmit={handleSubmit(submit)}
      >
        <div className="mt-4">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            {...register("username")}
          />
        </div>
        <div className="mt-4">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            {...register("email")}
          />
        </div>
        <div className="mt-4">
          <input
            type="number"
            className="form-control"
            placeholder="Number"
            {...register("number")}
          />
        </div>
        <div className="mt-4">
          <select {...register("city")} className="form-dropdown form-control">
            <option value="">Select City</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Surat">Surat</option>
            <option value="Vadodara">Vadodara</option>
            <option value="Gandhinagar">Gandhinagar</option>
          </select>
        </div>
        <div className="mt-4">
          <label>Gender</label>
          <br />
          <input type="radio" {...register("gender")} value="male" />
          <label>Male</label>
          <br />
          <input type="radio" {...register("gender")} value="female" />
          <label>Female</label>
          <br />
        </div>
        <div className="mt-4">
          <textarea
            className="form-control"
            placeholder="Address"
            {...register("address")}
          ></textarea>
        </div>
        <div className="mt-4">
          <label htmlFor="">Hobbies</label>
          <br />
          {["Sports", "Reading", "Cooking", "Writing"].map((hobby) => (
            <div key={hobby}>
              <input type="checkbox" {...register("hobbies")} value={hobby} />
              <label htmlFor="">{hobby}</label>
            </div>
          ))}
        </div>
        <div className="mt-4">
          {id === null ? (
            <button type="submit" className="form-control btn btn-success">
              Submit
            </button>
          ) : (
            <button type="submit" className="form-control btn btn-warning">
              Update
            </button>
          )}
        </div>
      </form>

      {/* Table to Display Data */}
      <table className="table table-striped table-hover table-success">
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Number</th>
            <th>Address</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {user.map((element, index) => (
            <tr key={element.id}>
              <td>{index + 1}</td>
              <td>{element.username}</td>
              <td>{element.gender}</td>
              <td>{element.email}</td>
              <td>{element.number}</td>
              <td>{element.address}</td>
              <td>{element.city}</td>
              <td>
                <button
                  onClick={() => update(element.id)}
                  className="btn btn-warning"
                >
                  <FaPen style={{ cursor: "pointer", marginRight: "10px" }} />
                </button>
                <button
                  onClick={() => trash(element.id)}
                  className="btn btn-danger"
                >
                  <MdDelete style={{ cursor: "pointer" }} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Localstorage;
