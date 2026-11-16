import React, { useState } from 'react';
import './SearchPanel.css';

function SearchPanel() {

  const [formData, setFormData] = useState({
    startLocation: '',
    endLocation: '',
    travelDate: '',
    returnDate: '',
    transport: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Wyszukiwanie tras z danymi:', formData);
  }


  return (
    <section className="search-panel">
      <h2 className="search-panel__title">Zaplanuj podróż</h2>
      <form className="search-panel__form" onSubmit={handleSubmit}>
        <div className="search-panel__input-group">
          <label htmlFor="startLocation">Skąd?</label>
          <input
            type="text"
            id="startLocation"
            name="startLocation"
            value={formData.startLocation}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="search-panel__input-group">
          <label htmlFor="endLocation">Dokąd?</label>
          <input
            type="text"
            id="endLocation"
            name="endLocation"
            value={formData.endLocation}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="search-panel__input-group">
          <label htmlFor="travelDate">Data wyjazdu:</label>
          <input
            type="date"
            id="travelDate"
            name="travelDate"
            value={formData.travelDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="search-panel__input-group">
          <label htmlFor="returnDate">Data powrotu:</label>
          <input
            type="date"
            id="returnDate"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleInputChange}
            min={formData.travelDate}
          />
        </div>
        <div className="search-panel__input-group">
          <label htmlFor="transport">Środek transportu:</label>
          <select
            id="transport"
            name="transport"
            value={formData.transport}
            onChange={handleInputChange}
            required
          >
            <option value="">Wybierz</option>
            <option value="all">Wszystkie</option>
            <option value="car">Samochód</option>
            <option value="train">Pociąg</option>
            <option value="bus">Autobus</option>
          </select>
        </div>
        <button type="submit" className="search-panel__submit-btn">
          Szukaj
        </button>
      </form>
    </section>
  );
}

export default SearchPanel;