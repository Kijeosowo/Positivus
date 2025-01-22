import React from 'react';
import './ServiceComponent.css';

function ServiceComponent({ id, title, body }) {
  return (
    <div>
      <details className="details-container">
        <summary>
          <p className="details-id">{id}</p>
          <h5 className="details-title">{title}</h5>
        </summary>
        <p className="details-body">{body}</p>
      </details>
    </div>
  );
}

export default ServiceComponent;
