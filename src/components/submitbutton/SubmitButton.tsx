import * as React from "react";
import { Spinner } from "@chakra-ui/react";
import s from "./Submitbutton.module.scss";
import ResetButton from "./ResetButton";

interface Button {
  loading: boolean | undefined;
}

function SubmitButton(props: Button) {
  const { loading } = props;
  
  return (
    <div className={s.buttonContainer}>
      <button className={s.submitButton}>
        {loading ? (
          <span>
            <Spinner />
          </span>
        ) : (
          <span>Enviar</span>
        )}
      </button>
      <ResetButton />
    </div>
  );
}

export default SubmitButton;
