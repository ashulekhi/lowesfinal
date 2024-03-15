import React, { useState } from 'react';

const AddMobile = () => {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    price: '',
    screenSize: '',
    color: '',
    releaseDate: '',
    features: '',
    cameraResolution: '',
    batteryCapacity: '',
    operatingSystem: '',
    processor: '',
    memory: '',
    storage: '',
    dimensions: {
      length: '',
      width: '',
      height: ''
    }
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDimensionChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      dimensions: {
        ...formData.dimensions,
        [name]: value
      }
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Reset form fields
    setFormData({
      brand: '',
      model: '',
      price: '',
      screenSize: '',
      color: '',
      releaseDate: '',
      features: '',
      cameraResolution: '',
      batteryCapacity: '',
      operatingSystem: '',
      processor: '',
      memory: '',
      storage: '',
      dimensions: {
        length: '',
        width: '',
        height: ''
      }
    });
  };

  return (
    <div className="container">
        <h1>Add New Mobile</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="brand" className="form-label">Brand</label>
          <input type="text" className="form-control" id="brand" placeholder="Enter brand" name="brand" value={formData.brand} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="model" className="form-label">Model</label>
          <input type="text" className="form-control" id="model" placeholder="Enter model" name="model" value={formData.model} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input type="number" className="form-control" id="price" placeholder="Enter price" name="price" value={formData.price} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="screenSize" className="form-label">Screen Size</label>
          <input type="number" className="form-control" id="screenSize" placeholder="Enter screen size" name="screenSize" value={formData.screenSize} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="color" className="form-label">Color</label>
          <input type="text" className="form-control" id="color" placeholder="Enter color" name="color" value={formData.color} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="releaseDate" className="form-label">Release Date</label>
          <input type="date" className="form-control" id="releaseDate" name="releaseDate" value={formData.releaseDate} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="features" className="form-label">Features</label>
          <input type="text" className="form-control" id="features" placeholder="Enter features (comma separated)" name="features" value={formData.features} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="cameraResolution" className="form-label">Camera Resolution</label>
          <input type="number" className="form-control" id="cameraResolution" placeholder="Enter camera resolution" name="cameraResolution" value={formData.cameraResolution} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="batteryCapacity" className="form-label">Battery Capacity</label>
          <input type="number" className="form-control" id="batteryCapacity" placeholder="Enter battery capacity" name="batteryCapacity" value={formData.batteryCapacity} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="operatingSystem" className="form-label">Operating System</label>
          <input type="text" className="form-control" id="operatingSystem" placeholder="Enter operating system" name="operatingSystem" value={formData.operatingSystem} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="processor" className="form-label">Processor</label>
          <input type="text" className="form-control" id="processor" placeholder="Enter processor" name="processor" value={formData.processor} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="memory" className="form-label">Memory</label>
          <select className="form-select" id="memory" name="memory" value={formData.memory} onChange={handleChange} required>
            <option value="">Select memory</option>
            <option value="8GB">8GB</option>
            <option value="6GB">6GB</option>
            <option value="4GB">4GB</option>
            <option value="16GB">16GB</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="storage" className="form-label">Storage</label>
          <select className="form-select" id="storage" name="storage" value={formData.storage} onChange={handleChange} required>
            <option value="">Select storage</option>
            <option value="64GB">64GB</option>
            <option value="128GB">128GB</option>
            <option value="256GB">256GB</option>
            <option value="512GB">512GB</option>
            <option value="1TB">1TB</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Dimensions</label>
          <div className="row">
            <div className="col">
              <input type="number" className="form-control" placeholder="Length" name="length" value={formData.dimensions.length} onChange={handleDimensionChange} required />
            </div>
            <div className="col">
              <input type="number" className="form-control" placeholder="Width" name="width" value={formData.dimensions.width} onChange={handleDimensionChange} required />
            </div>
            <div className="col">
              <input type="number" className="form-control" placeholder="Height" name="height" value={formData.dimensions.height} onChange={handleDimensionChange} required />
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Add Mobile</button>
      </form>
    </div>
  );
};

export default AddMobile;
