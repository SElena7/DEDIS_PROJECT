import React, { useState } from 'react';
import axios from 'axios';
import './Enrollment.scss';

function Enrollment() {
  
  const [formData, setFormData] = useState({
    childName: '',
    childSurname: '',
    birthDate: '',
    enrollmentYear: '',
    gender: '',
    address: '',
    postalCode: '',
    city: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Request payload:', {
      name: `${formData.childName} ${formData.childSurname}`,
      grade: formData.enrollmentYear,
      gender: formData.gender,
      home_address: formData.address,
      postcode: formData.postalCode,
      city: formData.city,
    });

    try {
      const response = await axios.post('http://localhost:8800/api/students/add', {
        name: `${formData.childName} ${formData.childSurname}`,
        grade: formData.enrollmentYear,
        gender: formData.gender,
        home_address: formData.address,
        postcode: formData.postalCode,
        city: formData.city,
      });

      alert(`Student added successfully: ${response.data.student.name}`);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    }
  };


  return (
    <div className="enrollment-container">
      <h1 className="enrollment-title">Informativni vpis v Montessori šolo Koper</h1>
      <p className="enrollment-description">
        Predvidoma bomo z Montessori šolo na Obali začeli v šolskem letu 2026/2027
      </p>

      <form className="enrollment-form"  onSubmit={handleSubmit}>
        {/* Ime otroka */}
        <div className="form-group">
          <label htmlFor="childName">Ime otroka</label>
          <input type="text" id="childName" name="childName" 
          value = {formData.childName} onChange={handleChange} required />
        </div>

        {/* Priimek otroka */}
        <div className="form-group">
          <label htmlFor="childSurname">Priimek otroka</label>
          <input type="text" id="childSurname" name="childSurname" 
          value = {formData.childSurname} onChange={handleChange} required />
        </div>

        {/* Datum rojstva */}
        <div className="form-group">
          <label htmlFor="birthDate">Datum rojstva</label>
          <input type="date" id="birthDate" name="birthDate" required />
        </div>

        {/* Otrok je v šolskem letu 2024/2025 vpisan v */}
        <div className="form-group">
        <label>Otrok je v šolskem letu 2024/2025 vpisan v:</label>
        <div className="radio-group">
          {["Vrtec", "1. razred", "2. razred", "3. razred", "4. razred", "5. razred", "6. razred", "7. razred", "8. razred", "9. razred"].map((year) => (
            <label key={year}>
              <input
                type="radio"
                name="enrollmentYear"
                value={year}
                checked={formData.enrollmentYear === year} // Bind the checked state
                onChange={handleChange} // Handle the change event
                required
              />
              {year}
            </label>
          ))}
        </div>
      </div>

        {/* Spol otroka */}
        <div className="form-group">
        <label>Spol otroka:</label>
        <div className="radio-group">
          {["Deček", "Deklica"].map((gender) => (
            <label key={gender}>
              <input
                type="radio"
                name="gender"
                value={gender}
                checked={formData.gender === gender} // Bind the checked state
                onChange={handleChange} // Handle the change event
                required
              />
              {gender}
            </label>
          ))}
        </div>
      </div>

        {/* Naslov */}
        <div className="form-group">
          <label htmlFor="address">Naslov</label>
          <input type="text" id="address" name="address" 
          value = {formData.address} onChange={handleChange} required />
        </div>

        {/* Poštna številka */}
        <div className="form-group">
          <label htmlFor="postalCode">Poštna številka</label>
          <input type="text" id="postalCode" name="postalCode" 
          value = {formData.postalCode} onChange={handleChange} required />
        </div>

        {/* Kraj */}
        <div className="form-group">
          <label htmlFor="city">Kraj</label>
          <input type="text" id="city" name="city"
          value = {formData.city} onChange={handleChange} required />
        </div>

        <button type="submit" className="submit-button">Pošlji</button>
      </form>
    </div>
  );
}

export default Enrollment;
