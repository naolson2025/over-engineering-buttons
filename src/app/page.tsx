import ITTicketForm from "../components/it-ticket-form";

export default async function Home() {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <ITTicketForm />
    </div>
  );
}
