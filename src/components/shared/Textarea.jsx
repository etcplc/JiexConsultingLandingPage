import React from 'react';

export function Textarea({ className = '', ...props }) {
  return (
    <textarea
      {...props}
      className={`w-full p-3 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
    />
  );
}