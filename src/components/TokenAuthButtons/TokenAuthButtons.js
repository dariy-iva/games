import React from "react";
import "./TokenAuthButtons.css";

export default function TokenAuthButtons({onLogin}) {

  const socialLinkConfig = [
    {text: 'Log in with Apple', label: 'apple', link: 'https://appleid.apple.com/',},
    {text: 'Log in with Google', label: 'google', link: 'https://myaccount.google.com',},
    {text: 'Connect with Facebook', label: 'fb', link: 'https://www.facebook.com/',}];

  const [allButtonIsShow, setAllButtonIsShow] = React.useState(false);

  function handleShowAllButtonClick() {
    setAllButtonIsShow(true);
  }

  function handleLoginWithTokenAuthentication(e) {
    const link = socialLinkConfig.find(item => item.label === e.target.id).link;
    window.open(link);
    onLogin();
  }

  return (
    <>
      <span className="token-auth__line">or</span>
      <div className="token-auth__buttons">
        {socialLinkConfig.map((item, index) => (
          <button
            className={`token-auth__button token-auth__button_content_${item.label} login__text ${!allButtonIsShow && index > 0 ? 'token-auth__button_hidden' : ''}`}
            type="button" key={item.label} id={item.label} onClick={handleLoginWithTokenAuthentication}>{item.text}
          </button>
        ))}
        {!allButtonIsShow && (
          <span className="token-auth__other link-hover"
                onClick={handleShowAllButtonClick}>Show all</span>)}
      </div>
    </>
  );
}