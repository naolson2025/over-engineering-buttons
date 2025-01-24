import StickFigureButton from '../components/stick-figure-button';

export default function Home() {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="text-center text-4xl font-bold">
            Submit an IT Ticket
          </h1>
        </div>
        <div className="mt-8 space-y-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Request Type</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full"
              name="requestType"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              className="textarea textarea-primary textarea-bordered h-24 w-full"
              placeholder="Describe your issue"
              name="description"
            />
          </div>
          <div className="flex justify-end">
            <StickFigureButton />
          </div>
        </div>
      </div>
    </div>
  );
}
