import React, {useRef, useState } from "react";
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    

    if (isEdit) {
      //Edit
      // const index = datas.findIndex((data) => data.id === values.id);
      const currentTimeStamp = Math.floor(Date.now() / 1000);
      // Slice
      // setDatas([...datas.slice(0, index), values, ...datas.slice(index + 1)]);

      // Splice
      // const newDatas = [...datas];
      //values: image, base64Image
      // newDatas.splice(index, 1, {
      //   ...values,
      //   image: base64Image ? base64Image : values.image,
      //   updatedAt: currentTimeStamp
      // });
      // setDatas(newDatas);

      // Edit data in last or first | Filter
      // const newDatas = datas.filter((data) => data.id !== values.id);
      // setDatas([values, ...newDatas]);
      //editbackend
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
      // setDatas([
      //   {
      //     id,
      //     ...values,
      //     image: base64Image,
      //     createdAt: currentTimeStamp,
      //     updatedAt: ""
      //   },
      //   ...datas
      // ]);
      //backend
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
  const chooseImage = () => {
    fileRef.current.click();
  };

    const handleDelete = async (id) => {
      // Splice
      // const index = datas.findIndex((data) => data.id === id);
      // const newDatas = [...datas];
      // newDatas.splice(index, 1);
      // setDatas(newDatas);
      //Filter
  
      await deleteShopItem(id);
      await fetchShopsItems(setDatas);
  
      // setDatas(datas.filter((data) => data.id !== id));
    };
  const handleEdit= (item) => {
    setisEdit(true);
    setvalues(item);
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
              </div>
              <button
                className="px-4 py-1 border  ml-16 rounded-md shadow-2xl  bg-secondary mb-4"
                onClick={handleSubmit}
              >
                {" "}
                {isEdit ? "Update" : "Submit"}
              </button>
            </form>
          </div>
          <div className="col-span-2 shadow-xl">
            <div className="">
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
                  {datas.map((item, index) => (
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
