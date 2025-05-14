import React from 'react';
export function Input({ className = '', ...props }) {
    return (
      <input
        {...props}
        className={`w-full p-3 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
      />
    );
  }