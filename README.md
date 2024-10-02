
# Your Next Saas - Open Sourced Nextjs Saas boilerplate

Boost your speed while building your next sass with our open sourced boilerplate. Spend your time in building those new features without worrying about setting up Payments, Authentication, Mailing, Blogs, Admin access and SEO.




## Tech Stack

**Client:** Nextjs , Reactjs , Typescript, Next-auth , Social Authentication ,

**Server:** Nextjs , Typescript

**Database:** Supabase , PostgreSQL

**Analytics:** Plausible , Vercel

**Payments:** LemonSqueezy

**Ui Library:**  TailwindCSS , Daisy-ui

**Hosting:** Vercel

**Future Additions:** Stripe , MongoDb , Resend/Mailchimp 




## Demo

Boilerplate demo - https://yournextsass-demo.vercel.app/


## Components You Get (Customizable)

- Navbar 
- Hero Section 
- Features Section 
- Pricing Section 
- Testimonials 
- Footer
- Contact Us Form
- Buttons
- Loader
- Admin Dashboard
- Authenticated user Dashboard
- Middleware for protected routes 
## Initiate

Start with npm / bun / yarn

```bash
bunx create-next-app --example https://github.com/arpittiwari24/YourNextSaas.online
```

```bash
npx create-next-app --example https://github.com/arpittiwari24/YourNextSaas.online
```

```bash
yarn create-next-app --example https://github.com/arpittiwari24/YourNextSaas.online
```

```bash
cd my-project
```
    
## Run Locally

Clone the project

```bash
  git clone https://github.com/arpittiwari24/YourNextSaas.online
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
  bun install
  yarn install
```

Start the server

```bash
  npm run dev
  bun dev
  yarn dev
```

## Environment Variables (For Developers Contributing) 
**Variable Descriptions:**

**NEXTAUTH_URL:** This is typically the URL of your Next.js application. You can usually find it in your project's configuration or deployment settings.

**NEXTAUTH_SECRET:** This is a secret key used for authentication and should be generated randomly and kept confidential.

**SUPABASE_ANON_KEY:** This is an anonymous public key for accessing Supabase, which can be found in your Supabase project settings.

**NEXT_PUBLIC_SUPABASE_URL:** This is the public URL of your Supabase project, which can also be found in your project settings.

**NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY:** This is a service role key for accessing Supabase services, which can be found in your Supabase project settings.

**GOOGLE_CLIENT_ID:** This is the client ID for your Google OAuth application, which can be obtained from the Google Cloud Console.

**GOOGLE_CLIENT_SECRET:** This is the client secret for your Google OAuth application, which can also be obtained from the Google Cloud Console.

**LEMONSQUEEZY_STORE_ID:** This is the ID of your Lemon Squeezy store, which can be found in your Lemon Squeezy account settings.

**LEMONQUEEZY_API_KEY:** This is the API key for your Lemon Squeezy store, which can also be found in your Lemon Squeezy account settings.

**LEMON_SQUEEZY_WEBHOOK_SIGNATURE:** This is a signature used for verifying Lemon Squeezy webhooks, which can be generated in your Lemon Squeezy account settings.

**MONGO_URI:** This is the connection URI for your MongoDB database, which can be obtained from your MongoDB hosting provider or local database setup.

**RESEND_API_KEY:** This is the API key for your Resend email service, which can be found in your Resend account settings.


### Specific Instructions:

**1. NEXTAUTH_URL:**
If your project is deployed, the URL will be the public-facing URL of your application.
If your project is running locally, use http://localhost:3000 or the port you're using for development.

**2. NEXTAUTH_SECRET:**
Generate a random string using a secure random number generator or a tool like openssl or pwgen.

**3. SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, and NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY:**
Log in to your Supabase project and navigate to the project settings.
Look for the API keys section and find the relevant keys.

**4. GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET:**
Create a Google Cloud Platform project and enable the Google Sign-In API.
Create OAuth credentials and note down the client ID and client secret.

**5. LEMONSQUEEZY_STORE_ID, LEMONQUEEZY_API_KEY, and LEMON_SQUEEZY_WEBHOOK_SIGNATURE:**
Log in to your Lemon Squeezy account and navigate to the settings.
Find the relevant information in the API section and webhook settings.

**6. MONGO_URI:**
If you're using a MongoDB hosting provider, they will provide you with the connection URI.
If you're running MongoDB locally, you can find the URI in your MongoDB configuration.

**7. RESEND_API_KEY:**
Log in to your Resend account and navigate to the API keys section.
Find the API key you want to use.

Once you have all the values, carefully add them to your .env file, ensuring that sensitive information like API keys and secrets is kept confidential and not shared publicly.

## Contributing

Pull requests, bug reports, feature addition and all other forms of contribution are welcomed and highly encouraged!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

