import React, { useState, useRef } from "react";
const FileInput = ({ onChange, ...rest }) => {
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleButtonClick = () => {
    inputRef.current.click();
  };

  const handleInputChange = (event) => {
    const file = event.target.files[0];
    setFileName(file.name);
    onChange(file);
  };

  return (
    <div>
      <input
        type="file"
        ref={inputRef}
        style={{ display: "none" }}
        onChange={handleInputChange}
        {...rest}
      />
      <button className="border px-2 rounded" onClick={handleButtonClick} type="button">
        {fileName || "Choose File"}
      </button>
    </div>
  );
};

const AddShops = () => {
  const [formData, setFormData] = useState({
    id: 1,
    image: null,
    title: "",
    details: "",
    price: "",
  });
  const [tableData, setTableData] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (file) => {
    setFormData({ ...formData, image: file });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setTableData([...tableData, formData]);
    setFormData((prevFormData) => ({
      id: prevFormData.id + 1,
      image: null,
      title: "",
      details: "",
      price: "",
    }));
  };

  return (
    <div className="container py-10">
      <div className="grid grid-cols-3 gap-14">
        <div className=" rounded shadow-xl mt-6 bg-Tertiary ">
          <form className="ml-9 mt-4" onSubmit={handleSubmit}>
            <div className="">
              <label>Select Image: </label>
              <FileInput name="image" onChange={handleImageChange} />
            </div>
            <div className="mb-4">
              <br />
              <label>Title: </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="block border"
              />
            </div>

            <div className="mb-4">
              <label>Price: </label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="block border"
              />
            </div>
            <div className="mb-4">
              <label>Details: </label>
              <textarea
                type="text"
                name="details"
                value={formData.details}
                onChange={handleInputChange}
                rows={5}
                cols={35}
                className="block border"
              />
            </div>
            <button
              className="px-4 py-1 border  ml-16 rounded-md shadow-2xl  bg-secondary mb-4"
              type="submit"
            >
              Submit
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
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((data, index) => (
                  <tr className="border-b" key={index}>
                    <td className="px-4 py-2">{data.id}</td>
                    <td className="px-4 py-2">
                      {data.image && (
                        <img
                          src={URL.createObjectURL(data.image)}
                          alt="img"
                          style={{ width: "50px", height: "50px" }}
                        />
                      )}
                    </td>
                    <td className="px-4 py-2">{data.title}</td>
                    <td className="px-4 py-2">{data.price}</td>
                    <td className="px-4 py-2">{data.details}</td>

                    <td className="px-4 py-2">
                      {" "}
                      <button className="px-3 text-sm py-2 rounded bg-fourth">
                        Edit
                      </button>
                      <button className="px-3 text-sm py-2 rounded bg-fourth ml-2">
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
  );
};
export default AddShops;
