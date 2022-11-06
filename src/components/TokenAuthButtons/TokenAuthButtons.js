import React from "react";
import "./TokenAuthButtons.css";
import {vendorLinks} from "../../utils/constants/vendorLinks";

export default function TokenAuthButtons({onLogin}) {
  const {apple, google, fb} = vendorLinks;

  const socialLinkConfig = [
    {text: 'Log in with Apple', label: apple.label, link: apple.link,},
    {text: 'Log in with Google', label: google.label, link: google.link,},
    {text: 'Connect with Facebook', label: fb.label, link: fb.link,}];

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
            className={`token-auth__button token-auth__button_content_${item.label} login__text 
            ${!allButtonIsShow && index > 0 ? 'token-auth__button_hidden' : ''}`}
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