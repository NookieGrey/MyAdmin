import React from 'react';

import {SimplePage} from "../../../widgets/layout/public/simplePage/SimplePage";

export function EmailSent() {
  return (
    <SimplePage
      title="Your password reset email has been sent"
      text="You should receive an password reset link in an email sent to your registered MyAdmin email address shortly. Please follow the instructions in the email to reset the password for your account"
    />
  );
}