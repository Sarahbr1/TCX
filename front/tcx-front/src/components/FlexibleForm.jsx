import React, { useState } from "react";
import TextFields from "./TextFields";

function FlexibleForm({ textFields }) {
  //setting the form of our data
  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  //handling errors
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  const renderTextFields = () => {
    const fields = [];
    for (let i = 0; i < Object.keys(textFields).length; i++) {
      const fieldName = `field${i + 1}`;
      fields.push(
        <>
          <TextFields
            key={fieldName}
            label={textFields[i].label}
            type={textFields[i].type}
            onChange={(e) => handleInputChange(fieldName, e.target.value)}
          />
        </>
      );
    }
    return fields;
  };

  return (
    <form onSubmit={handleFormSubmit} className="max-w-md mx-auto">
      <div className="flex items-center justify-center h-580">
        <div className=" h-auto mx-auto p-6 bg-white shadow-md rounded-md flex flex-col justify-between gap-8">
          {renderTextFields()}
        </div>
      </div>

      {/* {includeButton && (
        <Button label={buttonText || 'Submit'} type="submit" className="mt-4" />
      )} */}
    </form>
  );
}

export default FlexibleForm;
