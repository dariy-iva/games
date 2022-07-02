import React from "react";
import "./InputFormSign.css";
import {useLocation} from "react-router-dom";
import {pathsConfig} from "../../../utils/constants/pathList";

export default function InputFormSign({value, onChange, config, error, pattern}) {
  const {label, type, minLength = null, maxLength = null, name, placeholder} = config;
  const location = useLocation();
  const isPasswordRecoveryPage = location.pathname === pathsConfig.resetPassword;

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
        {isPasswordRecoveryPage && (
          <span className="input__tooltip">Enter the email address associated with your account.</span>
        )}
      </label>
  );
}