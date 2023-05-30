import * as React from 'react';
import { FieldErrors } from 'react-hook-form';
import { UseMutationResult } from 'react-query';

import s from './CommonForm.module.scss';
import SubmitButton from 'components/submitbutton/SubmitButton';
import ExceptionHandler from 'components/exceptionhandler/ExceptionHandler';
import { FormData } from '@/interfaces/interfaces';

interface FormProps {
  error: FieldErrors<FormData>;
  response: UseMutationResult<any, unknown, FormData, unknown>;
  children: React.ReactNode;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

const CommonForm = ({ onSubmit, children, response, error }: FormProps) => {
  const message = response?.data?.msg;
  //console.log(message)
  return (
    <form onSubmit={onSubmit} className={s.common_form}>
      {children}
      <div className={s.common_form__buttons}>
        <SubmitButton loading={response?.isLoading} />
        <div className={error?.name ? s.hidden : s.visible}>
          {response?.data ? <ExceptionHandler response={message} /> : null}
        </div>
      </div>
    </form>
  );
};
export default CommonForm;
