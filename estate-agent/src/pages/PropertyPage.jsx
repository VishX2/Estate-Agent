import { useParams, Link } from "react-router-dom";
import data from "../data/properties.json";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ImageGallery from "../components/ImageGallery";

export default function PropertyPage() {
  const { id } = useParams();
  const property = data.properties.find((p) => p.id === id);

  if (!property) {
    return <h2>Property not found</h2>;
  }

  // Build image list based on property id
  const baseImage = property.picture.replace("small", "");

const images = [
  `/${baseImage}`,
  `/${baseImage.replace("pic1", "pic2")}`,
  `/${baseImage.replace("pic1", "pic3")}`
];

  return (
    <div className="page">
      <Link to="/">← Back to Search</Link>

      <h1>{property.location}</h1>
      <p>£{property.price.toLocaleString()}</p>

      {/* IMAGE GALLERY */}
      <ImageGallery images={images} />

      {/* DETAILS TABS */}
      <Tabs>
        <TabList>
          <Tab>Description</Tab>
          <Tab>Floor Plan</Tab>
          <Tab>Location</Tab>
        </TabList>

        <TabPanel>
          <p>{property.description}</p>
        </TabPanel>

        <TabPanel>
            <img
                src={`/images/${property.id}floor.jpg`}
                alt="Floor plan"
                style={{ width: "100%", borderRadius: "8px" }}
            />
        </TabPanel>


        <TabPanel>
          <iframe
            title="map"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(
              property.location
            )}&output=embed`}
            width="100%"
            height="300"
            style={{ border: 0 }}
          />
        </TabPanel>
      </Tabs>
    </div>
  );
}
