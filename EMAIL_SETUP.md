# Email Setup Instructions

To enable the contact form to send emails to `Koketgosa82@gmail.com`, you need to set up the following:

## 1. Create Environment Variables

Create a `.env.local` file in your project root with the following variables:

```
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
```

## 2. Gmail Setup

1. **Use a Gmail account** that you want to send emails from
2. **Enable 2-Factor Authentication** on your Gmail account
3. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this password as `EMAIL_PASS`

## 3. Alternative: Use EmailJS (No Backend Required)

If you prefer not to set up a backend, you can use EmailJS instead:

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Create an account and connect your Gmail
3. Get your service ID, template ID, and public key
4. Replace the contact form implementation with EmailJS

## 4. Test the Setup

Once configured, the contact form will:
- Send emails to `Koketgosa82@gmail.com`
- Include all form data (name, email, phone, subject, message)
- Show success/error messages to users

## Current Implementation

The contact form is now set up to:
- ✅ Send emails to `Koketgosa82@gmail.com`
- ✅ Include all form fields
- ✅ Show loading states
- ✅ Handle errors gracefully
- ✅ Reset form after successful submission
