import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';

const VerifyStore = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await axios.get('http://localhost:4001/getStores'); // Replace with your API endpoint
        setStores(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchStores();
  }, []);

  const handleVerifyStore = async (storeId) => {
    try {
      const response = await axios.post('http://localhost:4001/verifyStore', { storeId : storeId}); // Send storeId as payload
  
      // Check for successful status code (e.g., 200 or 204)
      if (response.status === 200) {
        // Update store verified flag in state
        const updatedStores = stores.map((store) => {
          if (store.id === storeId) {
            return { ...store, verified: true };
          }
          return store;
        });
        setStores(updatedStores);
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (stores.length === 0) {
    return (
      <div>
        <h1>No stores found.</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Verify Stores</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Store Image</th>
            <th>Store Name</th>
            <th>Address</th>
            <th>Category</th>
            <th>Rating</th>
            <th>Verify</th>
          </tr>
        </thead>
        <tbody>
          {stores.filter((store) => !store.verified)
          .map((store, index) => (
            <tr key={store.id}>
              <td>{index + 1}</td>
              <td>
                <img src={store.StoreUrl} alt={store.StoreName} style={{ borderRadius: '50%', width: '50px', height: '50px' }} />
              </td>
              <td>{store.StoreName}</td>
              <td>{store.address}</td>
              <td>{store.category}</td>
              <td>{store.rating}</td>
              <td>
                {!store.verified && (
                  <Button variant="primary" size="sm" onClick={() => handleVerifyStore(store.StoreId)}>
                    Verify Store
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default VerifyStore;
