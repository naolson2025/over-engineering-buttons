'use server';

export async function submitTicket(formData: FormData) {
  const requestType = formData.get('requestType');
  const description = formData.get('description');

  // Simulate saving to a database or API call
  try {
    console.log('Submitting ticket:', { requestType, description });

    // await new Promise((resolve) => setTimeout(resolve, 1000));

    if (requestType && description) {
      return { success: true, message: 'Ticket submitted successfully!' };
    } else {
      return { success: false, message: 'Ticket submission failed. Please try again.' };
    }
  } catch (error) {
    console.error('Error submitting ticket:', error);
    return { success: false, message: 'An error occurred. Please try again later.' };
  }
}