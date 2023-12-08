import React, { useState } from 'react';
import axios from 'axios';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

const AppManagement = () => {
  const [app1Enabled, setApp1Enabled] = useState(true);
  const [app2Enabled, setApp2Enabled] = useState(false);
  const [description, setDescription] = useState('');

  const handleAppToggle = async (app, isEnabled) => {
    try {
      const endpoint = `/${app}`;
      const response = await axios.post(endpoint, { enabled: isEnabled });
      if (app === 'app1') {
        setApp1Enabled(response.data.enabled);
      } else {
        setApp2Enabled(response.data.enabled);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSaveDescription = async () => {
    try {
      await axios.post('/app_desc', { desc:description });
      alert('Description saved successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>App Management</h1>
      <ToggleButtonGroup type="checkbox">
        <ToggleButton
          className="me-3"
          variant="outline-primary"
          checked={app1Enabled}
          onClick={() => handleAppToggle('app1', !app1Enabled)}
        >
          App 1
        </ToggleButton>
        <ToggleButton
          variant="outline-primary"
          checked={app2Enabled}
          onClick={() => handleAppToggle('app2', !app2Enabled)}
        >
          App 2
        </ToggleButton>
      </ToggleButtonGroup>
      <br />
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description:
        </label>
        <textarea
          id="description"
          value={description}
          onChange={handleDescriptionChange}
          className="form-control"
        />
      </div>
      <button type="button" className="btn btn-primary" onClick={handleSaveDescription}>
        Save Description
      </button>
    </div>
  );
};

export default AppManagement;
