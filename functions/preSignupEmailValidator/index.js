/**
 * Pre-signup Lambda trigger for Cognito User Pool
 * Validates that email addresses end with @onlyoffice.com
 */
exports.handler = async (event, context) => {
  // Get the email from the event
  const email = event.request.userAttributes.email;
  
  // Check if the email ends with @onlyoffice.com
  if (!email.endsWith('@onlyoffice.com')) {
    // If not, throw an error to prevent signup
    throw new Error('Email domain not allowed. Only @onlyoffice.com email addresses are permitted to register.');
  }
  
  // Return the event object to allow the signup to proceed
  return event;
};
