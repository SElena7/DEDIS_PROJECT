import React from 'react';
import './Enrollment.scss';

function Enrollment() {
  return (
    <div className="enrollment-container">
      <h1 className="enrollment-title">Informativni vpis v Montessori šolo Koper</h1>
      <p className="enrollment-description">
        Predvidoma bomo z Montessori šolo na Obali začeli v šolskem letu 2026/2027
      </p>

      <form className="enrollment-form">
        {/* Ime otroka */}
        <div className="form-group">
          <label htmlFor="childName">Ime otroka</label>
          <input type="text" id="childName" name="childName" required />
        </div>

        {/* Priimek otroka */}
        <div className="form-group">
          <label htmlFor="childSurname">Priimek otroka</label>
          <input type="text" id="childSurname" name="childSurname" required />
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
            <label>
              <input type="radio" name="enrollmentYear" value="Vrtec" required />
              Vrtec
            </label>
            <label>
              <input type="radio" name="enrollmentYear" value="1.razred" />
              1. razred
            </label>
            <label>
              <input type="radio" name="enrollmentYear" value="2.razred" />
              2. razred
            </label>
            <label>
              <input type="radio" name="enrollmentYear" value="3.razred" />
              3. razred
            </label>
            <label>
              <input type="radio" name="enrollmentYear" value="4.razred" />
              4. razred
            </label>
            <label>
              <input type="radio" name="enrollmentYear" value="5.razred" />
              5. razred
            </label>
            <label>
              <input type="radio" name="enrollmentYear" value="6.razred" />
              6. razred
            </label>
            <label>
              <input type="radio" name="enrollmentYear" value="7.razred" />
              7. razred
            </label>
            <label>
              <input type="radio" name="enrollmentYear" value="8.razred" />
              8. razred
            </label>
            <label>
              <input type="radio" name="enrollmentYear" value="9.razred" />
              9. razred
            </label>
          </div>
        </div>

        {/* Spol otroka */}
        <div className="form-group">
          <label>Spol otroka:</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="gender" value="Deček" required />
              Deček
            </label>
            <label>
              <input type="radio" name="gender" value="Deklica" />
              Deklica
            </label>
          </div>
        </div>

        {/* Naslov */}
        <div className="form-group">
          <label htmlFor="address">Naslov</label>
          <input type="text" id="address" name="address" required />
        </div>

        {/* Poštna številka */}
        <div className="form-group">
          <label htmlFor="postalCode">Poštna številka</label>
          <input type="text" id="postalCode" name="postalCode" required />
        </div>

        {/* Kraj */}
        <div className="form-group">
          <label htmlFor="city">Kraj</label>
          <input type="text" id="city" name="city" required />
        </div>

        <button type="submit" className="submit-button">Pošlji</button>
      </form>
    </div>
  );
}

export default Enrollment;
