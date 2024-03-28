import React, { useEffect, useState } from 'react';
import {useNavigate } from 'react-router-dom';
import { urlConfig } from "../../config"
import { useAppContext } from '../../context/AppContext';

function ItemPage() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [category, setCategory] = useState('Living');
    const [condition, setCondition] = useState('New');
    const [zipcode, setZipcode] = useState('10110');
    const [age_days, setAge_days] = useState(0);
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState(null);
    const { isLoggedIn } = useAppContext();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/app/login')
        }
    });

    const handleAddItem = async () => {

      // Get the form data
      const formData = new FormData();
      const file = document.getElementById('file').files[0];
      formData.append('file', file);
      formData.append('name', document.getElementById('name').value);
      formData.append('category', category);
      formData.append('condition', condition);
      formData.append('zipcode', document.getElementById('zipcode').value);
      let age_days = document.getElementById('age_days').value;
      formData.append('age_days', age_days);
      formData.append('age_years', (age_days/365).toFixed(2));
      formData.append('description', document.getElementById('description').value);
      formData.append('image', `/images/${file.name}`);
      formData.append('comments', []);

          try {
            let url = `${urlConfig.backendUrl}/api/secondchance/items`;
            console.log(url);
              const response = await fetch(url, {
                method: 'POST',
                body: formData
            });
    
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              const data = await response.json();
              if(data){
                setMessage("Item added!")
                setTimeout(() => {
                    setMessage("")
                    navigate("/");
                }, 500);
              }
          } catch (error) {
            setMessage(error.message);
          }
  }

    return (
      <div className="container mt-5">
      <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
              <div className="register-card p-4 border rounded">
                  <h2 className="text-center mb-4 font-weight-bold">Add Item</h2>
                  <div className="mb-3">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input
                          id="name"
                          type="text"
                          className="form-control"
                          placeholder="Enter Item Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                      />
                  </div>

                  <div className="d-flex flex-column">
                            {/* Category Dropdown */}
                            <label htmlFor="category">Category</label>
                            <select id="category" className="form-control my-1" onChange={(e) => setCategory(e.target.value)}>

                                <option key="Living" value="Living">Living</option>
                                <option key="Bedroom" value="Bedroom">Bedroom</option>
                                <option key="Bathroom" value="Bathroom">Bathroom</option>
                                <option key="Kitchen" value="Kitchen">Kitchen</option>
                                <option key="Office" value="Office">Office</option>
                            </select>

                            {/* Condition Dropdown */}
                            <label htmlFor="condition">Condition</label>
                            <select id="condition" className="form-control my-1" onChange={(e) => setCondition(e.target.value)}>
                                <option key="New" value="New">New</option>
                                <option key="Like New" value="Like New">Like New</option>
                                <option key="Older" value="Older">Older</option>
                            </select>
                  </div>

                  <div className="mb-3">
                      <label htmlFor="zipcode" className="form-label">Zipcode</label>
                      <input
                          id="zipcode"
                          type="text"
                          className="form-control"
                          placeholder="Enter the Zipcode"
                          value={zipcode}
                          onChange={(e) => setZipcode(e.target.value)}
                      />
                  </div>

                  <div className="mb-3">
                      <label htmlFor="age_days" className="form-label">Age in days</label>
                      <input
                          id="age_days"
                          type="text"
                          className="form-control"
                          placeholder="Enter the  Age in days"
                          value={age_days}
                          onChange={(e) => setAge_days(e.target.value)}
                      />
                  </div>

                  <div className="mb-3">
                      <label htmlFor="description" className="form-label">Description</label>
                      <textarea
                          id="description"
                          cols="2"
                          className="form-control"
                          placeholder="Enter the  description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                      />
                  </div>
                  <input style={{padding:'.5cm'}} type="file" id="file" name="file" accept=".jpg, .png, .gif"/>

                  <button className="btn btn-primary w-100 mb-3" onClick={handleAddItem}>Add Item</button>

                  <span style={{color:'green',height:'.5cm',display:'block',fontStyle:'italic',fontSize:'12px'}}>{message}</span>

              </div>
          </div>
      </div>
  </div>      
    );
}

export default ItemPage;
