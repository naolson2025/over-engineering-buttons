// import LilBlueButton from '../components/lil-blue-button';
import Form from 'next/form';
import { submitTicket } from './actions';
import { FormMessage, Message } from '../components/form-message';

export default async function Home({ searchParams }: { searchParams: Message }) {
  const message = await searchParams;

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="text-center text-4xl font-bold">
            Submit an IT Ticket
          </h1>
        </div>
        <Form className="mt-8 space-y-6" action={submitTicket}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Request Type</span>
            </label>
            <select defaultValue="" name="requestType" required className='select select-primary w-full'>
              <option value="" disabled>--Choose an Option--</option>
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
            {/* <LilBlueButton /> */}
            <button className="btn btn-primary" type="submit">Submit</button>
          </div>
          <FormMessage message={message} />
        </Form>
      </div>
    </div>
  );
}
