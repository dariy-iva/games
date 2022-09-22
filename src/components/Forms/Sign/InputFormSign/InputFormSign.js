import React from "react";
import "./InputFormSign.css";
import {useLocation} from "react-router-dom";
import {pathsConfig} from "../../../../utils/constants/pathList";

export default function InputFormSign(props) {
  const {value, onChange, config, error, notLabel = false, ...otherAttr} = props;
  const {label, type, name, placeholder} = config;
  const location = useLocation();
  const isPasswordRecoveryPage = location.pathname === pathsConfig.resetPassword;

  return (
    <label className="input__field">
      {label}
      <input
        type={type}
        className={`input ${notLabel ? 'input_not-label' : ''}`}
        name={name}
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...otherAttr}
      />
      <span className="input__error">{error}</span>
      {isPasswordRecoveryPage && (
        <span className="input__tooltip">Enter the email address associated with your account.</span>
      )}
    </label>
  );
}