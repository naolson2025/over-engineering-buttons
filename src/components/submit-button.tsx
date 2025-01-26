import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button className="btn btn-primary" type="submit" disabled={pending}>
      {pending && <span className="loading loading-spinner loading-sm"></span>}
      Submit
    </button>
  );
};

export default SubmitButton;