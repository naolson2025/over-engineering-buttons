export type Message =
  | { success: string }
  | { error: string }
  | { message: string };

export function FormMessage({ message }: { message: Message }) {
  return (
    <div className="flex flex-col gap-2 w-full max-w-md text-sm">
      {'success' in message && (
        <div role="alert" className="alert alert-success shadow-lg">
          {message.success}
        </div>
      )}
      {'error' in message && (
        <div className="alert alert-error shadow-lg" role="alert">
          {message.error}
        </div>
      )}
      {'message' in message && (
        <div role="alert" className="alert alert-info shadow-lg">
          {message.message}
        </div>
      )}
    </div>
  );
}
