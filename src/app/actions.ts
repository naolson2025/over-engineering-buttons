'use server';

export async function submitTicket(formData: FormData) {
  const requestType = formData.get('requestType');
  const description = formData.get('description');
  
  console.log(description);
  console.log(requestType);
  console.log('Submitting ticket...');
}