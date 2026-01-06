import { useParams, Link } from "react-router-dom";
import data from "../data/properties.json";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function PropertyPage() {
  const { id } = useParams();
  const property = data.properties.find((p) => p.id === id);

  if (!property) {
    return <h2>Property not found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">← Back to Search</Link>

      <h1>{property.location}</h1>

      <img
        src={property.picture}
        alt={property.location}
        style={{ width: "400px", marginBottom: "16px" }}
      />

      <p><strong>Price:</strong> £{property.price.toLocaleString()}</p>
      <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
      <p><strong>Type:</strong> {property.type}</p>
      <p><strong>Tenure:</strong> {property.tenure}</p>

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
            src={property.picture}
            alt="Floor Plan"
            style={{ width: "100%" }}
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
