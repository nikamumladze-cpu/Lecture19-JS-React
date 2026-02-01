import React from "react";

const InputField = ({ label, name, register, error, type = "text" }) => {
  return (
    <div className="input-group">
      <label className="input-label">{label}</label>
      <input
        type={type}
        {...register(name)}
        className={`input-field ${error ? "input-error" : ""}`}
      />
      {error && <p className="error-message">{error.message}</p>}
    </div>
  );
};

export default InputField;
