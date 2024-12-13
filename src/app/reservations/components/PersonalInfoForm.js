import React from 'react';

function PersonalInfoForm({ name, email, updateReservationState }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateReservationState({ [name]: value });
  };

  return (
    <div className="personal-info">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          required
        />
      </div>
    </div>
      );
}

export default PersonalInfoForm;