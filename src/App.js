import React, { useState } from 'react';
import './style.css';

export default function App() {
  let [info, setInfo] = useState(null);
  let start = async () => {
    let device = await navigator.usb.requestDevice({
      filters: [],
    });
    console.log(device);
    setInfo({
      'Product Name': device.productName,
      'Manufacturer Name': device.manufacturerName,
      'Vendor ID': device.vendorId,
    });
  };
  return (
    <div>
      <h1 style={{ textDecoration: 'underline' }}>Web USB Info</h1>
      <p>Check for the info of your connected USB devices on the web !</p>
      <br />
      <h3>Click [Start] to select device</h3>
      <p>
        {info ? (
          <code>{JSON.stringify(info, null, '\t')}</code>
        ) : (
          'Device not selected'
        )}
      </p>
      <button
        onClick={(e) => {
          start();
        }}
      >
        {' '}
        Start
      </button>
    </div>
  );
}
