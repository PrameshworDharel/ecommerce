import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const StudentForm = () => {
  const [items, setItems] = useState([]);
    const [isEdit,setisEdit]=useState(false);
    const [values,setvalues]=useState({
    
    name: "",
    email: "",
    dateOfBirth: "",
    gender: "",
    phoneNumber: "",
    city: "",
  });
  const handleChange=(e)=>{
    const {name, value,type}= e.target;
    if(type==="file"){
      setvalues({...values,[name]: e.target.files[0]})
    }
    else{
      setvalues({
        ...values,
        [name]:value
    });
    };
  };
  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(values);

    setItems([...items,values]);
    if(isEdit){
      const index = items.findIndex((item) => item.id === values.id);
      const newItem = [...items];
      newItem.splice(index, 1, values);
      setItems(newItem);
      setisEdit(false);
}
 else {
  const id = uuidv4();
  setItems([{ id, ...values }, ...items]);
} 
setvalues({
      
      name: "",
      email: "",
      dateOfBirth: "",
      gender: "",
      phoneNumber: "",
      city: "",
    });
  };
  const deleteTableRows = (index)=>{
    const rows = [...items];
    rows.splice(index, 1);
    setItems(rows);
};
const handleEdit = (item) => {
setisEdit(true);
setvalues(item);
};
  

  return (
    <div className="container">
      <div className="grid grid-cols-3 gap-14">
        <div className=" rounded shadow-xl mt-6 bg-Tertiary ">
          <form onSubmit={handleSubmit} className="ml-9 mt-4">
            <div className="">
              <div>
                <label className=" mb-4">Name</label>
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  className="block border"
                />
              </div>
              <div>
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  className="block border"
                />
              </div>
              <div>
                <label className="mb-4">Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={values.dateOfBirth}
                  onChange={handleChange}
                  className="block border"
                />
              </div>
              <div>
                <label className="mb-4">Gender</label>
                <select
                  name="gender"
                  value={values.gender}
                  onChange={handleChange}
                  className="block border"
                >
                  <option value="">Select option</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div>
                <label className="mb-4">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={values.phoneNumber}
                  onChange={handleChange}
                  className="block border"
                />
              </div>
              <div>
                <label className="mb-4">City</label>
                <input
                  type="text"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  className="block border"
                />
              </div>
            </div>
            <button
              className="px-4 mt-5 py-1 border  ml-16 rounded-md shadow-2xl  bg-secondary mb-4"
              onClick={handleSubmit}> {isEdit ? "Update" : "Submit"}
            
            </button>
          </form>
        </div>
        <div className="col-span-2 shadow-sm">
          <div className="">
            <table className="w-full">
              <thead>
                <tr className="text-left bg-secondary">
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Date of Birth</th>
                  <th className="px-4 py-2">Gender</th>
                  <th className="px-4 py-2">Phone Number</th>
                  <th className="px-4 py-2">City</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr className="border-b" key={index}>
                    <td className="px-4 py-2">{item.id}</td>
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2">{item.email}</td>
                    <td className="px-4 py-2">{item.dateOfBirth}</td>
                    <td className="px-4 py-2">{item.gender}</td>
                    <td className="px-4 py-2">{item.phoneNumber}</td>
                    <td className="px-4 py-2">{item.city}</td>
                    <td className="px-4 py-2">
                    <button className="px-3 text-sm py-2 rounded bg-fourth " onClick={() => handleEdit(item)}>
                            Edit
                          </button>
                          <button className="px-3 text-sm py-2 rounded bg-fourth ml-2" onClick={deleteTableRows}>
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

export default StudentForm;
