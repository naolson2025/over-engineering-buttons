'use client';

import { useState } from 'react';
import { submitTicket } from '../app/actions';
import SubmitButton from './submit-button';

const ITTicketForm = () => {
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleSubmit = async (formData: FormData) => {
    const result = await submitTicket(formData);
    setSubmissionResult(result);
  };

  return (
    <div className="max-w-md w-full space-y-8">
      <div>
        <h1 className="text-center text-4xl font-bold">Submit an IT Ticket</h1>
      </div>
      <form className="mt-8 space-y-6" action={handleSubmit}>
        {submissionResult?.success && (
          <div className="alert alert-info shadow-lg">
            {submissionResult.message}
          </div>
        )}
        {submissionResult?.success === false && (
          <div className="alert alert-error shadow-lg">
            {submissionResult.message}
          </div>
        )}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Request Type</span>
          </label>
          <select
            defaultValue=""
            name="requestType"
            required
            className="select select-primary w-full"
          >
            <option value="" disabled>
              --Choose an Option--
            </option>
            <option value="password-reset">Password Reset</option>
            <option value="need-access">Need Access</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            className="textarea textarea-primary textarea-bordered h-24 w-full"
            placeholder="Describe your issue"
            name="description"
            required
          />
        </div>
        <div className="flex justify-end">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
};

export default ITTicketForm;
