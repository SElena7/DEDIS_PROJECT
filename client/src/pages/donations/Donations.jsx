import React from 'react';
import './Donations.scss';

function Donations() {
  return (
    <div className="donations-container">
      <h1 className="donations-title">Donations</h1>
      <p className="donations-text">
        We appreciate your support! Your donations will help us continue our work and
        improve our school. Every contribution, no matter how small, makes a difference.
      </p>
      <div className="donation-methods">
        <h3>Support Us:</h3>
        <div className="donation-method">
          <h4>Bank Account</h4>
          <p>Account Name: Fake Organization</p>
          <p>Account Number: 123-456-789</p>
        </div>
        <div className="donation-method">
          <h4>PayPal</h4>
          <p>Email: fakeorganization@paypal.com</p>
        </div>
        <div className="donation-method">
          <h4>Flik</h4>
          <p>Username: @FakeOrganization</p>
        </div>
      </div>
    </div>
  );
}

export default Donations;
