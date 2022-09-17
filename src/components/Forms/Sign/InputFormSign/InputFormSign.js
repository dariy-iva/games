import React from "react";
import "./InputFormSign.css";
import {useLocation} from "react-router-dom";
import {pathsConfig} from "../../../../utils/constants/pathList";

export default function InputFormSign(props) {
  const {value, onChange, config, error, pattern, notLable = false, autocComplete = 'on'} = props;
  const {label, type, minLength = null, maxLength = null, name, placeholder, inputMode = null} = config;
  const location = useLocation();
  const isPasswordRecoveryPage = location.pathname === pathsConfig.resetPassword;

  return (
      <label className="input__field">
        {label}
        <input
          type={type}
          className={`input ${notLable ? 'input_not-label' : ''}`}
          name={name}
          required
          minLength={minLength}
          maxLength={maxLength}
          pattern={pattern}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          inputMode={inputMode}
          autoComplete={autocComplete}
        />
        <span className="input__error">{error}</span>
        {isPasswordRecoveryPage && (
          <span className="input__tooltip">Enter the email address associated with your account.</span>
        )}
      </label>
  );
}