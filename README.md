This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


<!-- 

##### "tweakcn" is site that i can choose color-system for my shadcn project

--------------------------------------------------

##### Add cursor pointer to buttons by default - this is coming from tailwind docs - write in "globals.css"

@layer base {
  button:not(:disabled),
  [role="button"]:not(:disabled) {
    cursor: pointer;
  }
}

--------------------------------------------------

###### to apply dark mode of color-system only >>> goto "layout.tsx" and write "dark" as attribute for "body" tag 

--------------------------------------------------

###### using icons easly from "npm install lucide-react" 

--------------------------------------------------

###### to solve the problem of images that is used in nextjs , goto "next.config.ts" and write the code
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https", // http or https
        hostname: "images.unsplash.com", // name of site of images
      },
    ], }, }; 

--------------------------------------------------

###### Create Prisma

=== npm i prisma --save-dev      // for development
=== npm i @prisma/client@6.16.2  // for production
=== npx prisma init

=== in "schema.prisma" file of "prisma" folder write my schema and tables

=== "npx prisma generate"         // to generate client

=== "npx prisma db push"          // to create tables in database

=== i delete "output" attribute from "schema.prisma" file
=== i delete folder "prisma.config.ts"

--------------------------------------------------

###### when user signIn or signUp with clerk >>> saving this data in neon database  

=== 2 methodes to apply that >>> "webHooks" which is the better way , "userSync server action" that i used in this app

=== i create "prisma.ts" in 
    the purpose of this file and code is to create instance of prisma to interact with it
    i search in google "nextjs prisma best practice" and copy code and paste in this file

=== i create a folder "actions" in "lib" folder then create "user.ts" file
    the purpose of this file is to create server actions where i can implement syncUser to create user in database

=== i create "UserSync.ts" file in "components" folder where i call userSync function

=== in "layout.tsx" file i wrapped the chidren with "UserSync" component 
    to run automatically when app start to run to apply "userSync" concept

--------------------------------------------------

###### TanStack Query

=== npm i @tanstack/react-query
=== in "components" folder create "providers" folder then create "TanStackProvider.tsx" file
=== search on google "tanstack query nextjs router" then from docs of tanStack from initial setup
    copy code and paste in "TanStackProvider.tsx" file
=== in "layout.tsx" file i wrapped the all children with "TanStackProvider" component

--------------------------------------------------

####### Vapi AI

=== goto vapi site
=== create "NEXT_PUBLIC_VAPI_API_KEY" and "NEXT_PUBLIC_VAPI_ASSISTANT_ID" and write them in ".env" file
 to "web calls" especially client-side and create assistant and get assistant id
=== to install vapi >>> "npm i @vapi-ai/web"
=== in lib folder create "vapi.ts" file to create instance of vapi


--------------------------------------------------

####### Resend

=== "npm i @react-email/components" "npm i resend" "@react-email/render"
=== create instance of resend by creating "resend.ts" file in "lib" folder and paste code from resend site
=== create "RESEND_API_KEY" in ".env" file
=== create end-point by creating "api" folder in this name in "app" folder
    then create "send-appoint-email" folder in "api" folder
    then create "route.ts" in this name
=== in develop case i can only recieve email on gmail that i loggin with it in resend site

--------------------------------------------------

######### multi Theme

=== npm install next-themes
=== create "theme-provider.tsx" file in "providers" folder
=== search on google "shadcn nextjs themes" then from docs copy code and paste in "theme-provider.tsx" file
=== Wrap layout with <ThemeProvider>
=== Create "ToogleSwitch" component
=== import { useTheme } from "next-themes"
    const { setTheme } = useTheme()
    onClick={() => setTheme("light")

--------------------------------------------------

######### deploy

=== because i use prisma, i should write in "package.json" file
    "build": "prisma generate && next build --turbopack",

=== 


generate this image but in this color #00df02 and its gradients




 -->