import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Modal, Button } from 'react-bootstrap';

const StoreList = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState('');
  const [selectedStoreId, setSelectedStoreId] = useState(null);

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

  const handleOpenModal = (storeId) => {
    setModalText('');
    setSelectedStoreId(storeId);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);
  const handleTextChange = (event) => setModalText(event.target.value);
  const handleModalSubmit = async () => {
    try {
      const response = await axios.post(
        'http://localhost:4001/notifyStore', // Replace with your API endpoint
        {
          storeId: selectedStoreId,
          text: modalText,
        },
      );
      // Handle successful response and clear the input field
      console.log('Data submitted successfully:', response);
      setModalText('');
      handleCloseModal();
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Stores</h1>
      <Button variant="success" size="sm" onClick={() => handleOpenModal("")}>
                  Notify All Store
                </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Store Image</th>
            <th>Store Name</th>
            <th>Address</th>
            <th>Category</th>
            <th>Rating</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {stores.map((store, index) => (
            <tr key={store.StoreId}>
              <td>{index + 1}</td>
              <td>
                <img src={store.StoreUrl} alt={store.StoreName} style={{ borderRadius: '50%', width: '50px', height: '50px' }} />
              </td>
              <td>{store.StoreName}</td>
              <td>{store.address}</td>
              <td>{store.category}</td>
              <td>{store.rating}</td>
              <td>
                <Button variant="success" size="sm" onClick={() => handleOpenModal(store.StoreId)}>
                  Notify Store
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" value={modalText} onChange={handleTextChange} placeholder="Enter text..." />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleModalSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default StoreList;
