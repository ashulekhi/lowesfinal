import { useParams } from "react-router-dom";

export default function Mobiledetails(){
    var params = useParams()
    var mobileid = params.mobileid
    var mobile =  {
        brand: "DummyBrand",
        model: "DummyModel",
        price: 500, // Assuming the price is $500
        screenSize: 6.5, // Assuming the screen size is 6.5 inches
        color: "Black",
        releaseDate: new Date("2023-01-01"), // Assuming release date is January 1, 2023
        features: ["Feature 1", "Feature 2", "Feature 3"],
        cameraResolution: 48, // Assuming camera resolution is 48 MP
        batteryCapacity: 5000, // Assuming battery capacity is 5000 mAh
        operatingSystem: "DummyOS",
        processor: "DummyProcessor",
        memory: "8GB",
        storage: "128GB",
        dimensions: {
          length: 150, // Assuming length is 150 mm
          width: 70, // Assuming width is 70 mm
          height: 7 // Assuming height is 7 mm
        },
        image: "/iphone.jpg" // Dummy image URL
      };
      
    return (
        <div className="container mt-5">
            <h1>Now we will fetch details of this id from api and will show it here  {mobileid}</h1>
          <div className="row">
            <div className="col-lg-6">
              <img src={mobile.image} alt={mobile.model} className="img-fluid w-100" />
            </div>
            <div className="col-lg-6">
              <h2>{mobile.brand} {mobile.model}</h2>
              <p><strong>Price:</strong> ${mobile.price}</p>
              <p><strong>Screen Size:</strong> {mobile.screenSize} inches</p>
              <p><strong>Color:</strong> {mobile.color}</p>
              <p><strong>Release Date:</strong> {new Date(mobile.releaseDate).toLocaleDateString()}</p>
              <p><strong>Features:</strong> {mobile.features.join(', ')}</p>
              <p><strong>Camera Resolution:</strong> {mobile.cameraResolution} MP</p>
              <p><strong>Battery Capacity:</strong> {mobile.batteryCapacity} mAh</p>
              <p><strong>Operating System:</strong> {mobile.operatingSystem}</p>
              <p><strong>Processor:</strong> {mobile.processor}</p>
              <p><strong>Memory:</strong> {mobile.memory}</p>
              <p><strong>Storage:</strong> {mobile.storage}</p>
              <p><strong>Dimensions:</strong> {mobile.dimensions.length} x {mobile.dimensions.width} x {mobile.dimensions.height} mm</p>
            </div>
          </div>
        </div>
      );
  
}