import React, { useState } from "react";

export const ImageUpload = ({ x }) => {
  const [imagePreviews, setImagePreviews] = useState(Array(x).fill(null));

  const handleFileInputChange = (event, index) => {
    const file = event.target.files[0];

    if (file) {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const updatedPreviews = [...imagePreviews];
          updatedPreviews[index] = reader.result;
          setImagePreviews(updatedPreviews);
        };
      } else {
        alert("Please select an image file.");
      }
    }
  };

  const handleDropzoneDrop = (event, index) => {
    event.preventDefault();
    event.stopPropagation();

    const files = event.dataTransfer.files;
    if (files.length > 0) {
      handleFileInputChange({ target: { files: [files[0]] } }, index);
    }
  };

  const handleDropzoneDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div>
      {imagePreviews.map((preview, index) => (
        <div
          key={index}
          className="flex items-center justify-center w-full mb-4"
          onDrop={(event) => handleDropzoneDrop(event, index)}
          onDragOver={handleDropzoneDragOver}
        >
          <label
            htmlFor={`dropzone-file-${index}`}
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
            )}
          </label>
          <input
            id={`dropzone-file-${index}`}
            type="file"
            className="hidden"
            onChange={(event) => handleFileInputChange(event, index)}
          />
        </div>
      ))}
    </div>
  );
};

