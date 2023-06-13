import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  deleteShopItem,
  fetchShopsItems,
  saveShopItems,
  updateShopItems
} from "../utils/shopsApiActions";

const AddShops = ({ datas, setDatas }) => {
  const fileRef = useRef(null);
  const [isEdit, setisEdit] = useState(false);
  const [values, setvalues] = useState({
    image: null,
    title: "",
    price: "",
    details: "",
  });
  const [base64Image, setBase64Image] = useState("");
  const [errors, setErrors] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(datas);

  const convertToBase64 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log("called: ", reader);
      setBase64Image(reader.result);
    };
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      setvalues({ ...values, [name]: e.target.files[0] });
      convertToBase64(e.target.files[0]);
    } else {
      setvalues({
        ...values,
        [name]: value,
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!values.title.trim()) {
      errors.title = "Title is required";
      isValid = false;
    }

    if (!values.price.trim()) {
      errors.price = "Price is required";
      isValid = false;
    } else if (isNaN(Number(values.price))) {
      errors.price = "Price must be a number";
      isValid = false;
    }

    if (!values.details.trim()) {
      errors.details = "Details is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (isEdit) {
      // Edit
      const currentTimeStamp = Math.floor(Date.now() / 1000);
      await updateShopItems({
        ...values,
        image: base64Image ? base64Image : values.image,
        updatedAt: currentTimeStamp
      });
      await fetchShopsItems(setDatas);
      setisEdit(false);
    } else {
      const id = uuidv4();
      const currentTimeStamp = Math.floor(Date.now() / 1000);
      await saveShopItems({
        id,
        ...values,
        image: base64Image,
        createdAt: currentTimeStamp,
        updatedAt: ""
      });
      await fetchShopsItems(setDatas);
    }

    setvalues({
      image: "",
      title: "",
      price: "",
      details: ""
    });
    setBase64Image("");
  };

  const handleDelete = async (id) => {
    await deleteShopItem(id);
    await fetchShopsItems(setDatas);
  };

  const handleEdit = (item) => {
    setisEdit(true);
    setvalues(item);
  };

  const chooseImage = () => {
    fileRef.current.click();
  };
     
  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
    const filteredItems = datas.filter(item =>
        item.id.toLowerCase().includes(value.toLowerCase())||
      item.title.toLowerCase().includes(value.toLowerCase()) ||
      item.price.toLowerCase().includes(value.toLowerCase())||
      item.details.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filteredItems);
  };

  return (
    <>
      <div className="container py-10">
        <div className="grid grid-cols-3 gap-14">
          <div className=" rounded shadow-xl mt-6 bg-Tertiary ">
            <form className="ml-9 mt-4" onSubmit={handleSubmit}>
              <div className="">
                <label>Select Image: </label>
                <input type="file" name="image" onChange={handleChange}></input>
              </div>
              <div className="mb-4">
                <br />
                <label>Title: </label>
                <input
                  type="text"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  className="block border"
                />
                {errors.title && <p>{errors.title}</p>}
              </div>

              <div className="mb-4">
                <label>Price: </label>
                <input
                  type="text"
                  name="price"
                  value={values.price}
                  onChange={handleChange}
                  className="block border"
                />
                {errors.price && <p>{errors.price}</p>}
              </div>
              <div className="mb-4">
                <label>Details: </label>
                <textarea
                  type="text"
                  name="details"
                  value={values.details}
                  onChange={handleChange}
                  rows={5}
                  cols={35}
                  className="block border"
                />
                {errors.details && <p>{errors.details}</p>}
              </div>
              <button
                className="px-4 py-1 border  ml-16 rounded-md shadow-2xl  bg-secondary mb-4"
                onClick={handleSubmit}
              >
                {isEdit ? "Update" : "Submit"}
              </button>
            </form>
          </div>
          <div className="col-span-2 shadow-xl">
            <div className="">
            <input
                type="text"
                name="search"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearch}
                className="block border mb-4 px-2 py-1 rounded"
              />
              <table className="w-full">
                <thead>
                  <tr className="text-left bg-secondary">
                    <th className="px-4 py-2">ID</th>
                    <th className="px-4 py-2">Image</th>
                    <th className="px-4 py-2">Title</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Details</th>
                    <th className="px-4 py-2">Created At</th>
                    <th className="px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                {filteredData.map((item, index) => (
                    <tr className="border-b" key={index}>
                      <td className="px-4 py-2">{item.id}</td>
                      <td className="px-4 py-2">
                        {item.image && (
                          <img
                            src={item.image}
                            alt="img"
                            style={{ width: "50px", height: "50px" }}
                          />
                        )}
                      </td>
                      <td className="px-4 py-2">{item.title}</td>
                      <td className="px-4 py-2">{item.price}</td>
                      <td className="px-4 py-2">{item.details}</td>

                      <td className="px-4 py-2">
                        <button
                          className="px-3 text-sm py-2 rounded bg-fourth "
                          onClick={() => handleEdit(item)}
                        >
                          Edit
                        </button>
                        <button
                          className="px-3 text-sm py-2 rounded bg-fourth ml-2"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddShops;
