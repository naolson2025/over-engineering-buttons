'use server';

import { encodedRedirect } from "../lib/utils";

export async function submitTicket(formData: FormData) {
  const requestType = formData.get('requestType');
  const description = formData.get('description');

  console.log(requestType, description);

  console.log('Submitting ticket...');

  return encodedRedirect('success', '/', 'Ticket submitted successfully!');
}