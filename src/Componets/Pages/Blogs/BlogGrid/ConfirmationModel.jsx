import React from 'react';

const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg w-1/3">
        <h2 className="text-lg font-semibold">{message}</h2>
        <div className="flex justify-end mt-4">
          <button
            onClick={onCancel}
            className="bg-gray-300 text-black px-4 py-2 rounded-md mr-2"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
