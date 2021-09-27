import React from "react";

import {
  formContainer,
  formWrapper,
  closeButton,
  upperCloseSpan,
  bottomCloseSpan,
} from "./formModal.module.scss";

const FormModal = ({ closeClick }) => {
  return (
    <div className={formContainer}>
      <div className={formWrapper}>
        <div className={closeButton} onClick={closeClick}>
          <div className={upperCloseSpan}></div>
          <div className={bottomCloseSpan}> </div>
        </div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSd96gad7rrW9GmJJUaqxg2wxqP_6ulxw4i197gdEe4VKSSonw/viewform?embedded=true"
          width="640"
          height="991"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="Google form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default FormModal;
