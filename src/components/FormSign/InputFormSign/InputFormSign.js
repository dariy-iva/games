import React from "react";
import "./InputFormSign.css";

export default function InputFormSign({ value, onChange, config, error, pattern }) {
  const { label, type, minLength = "", maxLength = "", name, placeholder } = config;

  return (
    <label className="input__field">
      {label}
      <input
        type={type}
        className="input"
        name={name}
        required
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <span className="input__error">{error}</span>
    </label>
  );
}