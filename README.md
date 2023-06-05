## Airbnb clone

The clone of the popular renting and booking platform - Airbnb.

### Functionality:

- Authorization and authentication (Email, Google, GitHub)
- Search and filters for renting accommodation
- Reservation for chosen dates
- Cancelling the reservation (available to the guest and to the owner of the property)
- Displaying your trips and reservations
- Adding to favorites
- Posting your own accommodation for rent
- Displaying your properties

## Deploy

https://rent-app-elian-cheng.vercel.app/

## Install instructions:

```bash
1. git clone https://github.com/elian-cheng/airbnb-clone.git
2. cd airbnb-clone
3. add all necessary variables to .env file
4. npm i
5. npm run dev
```

### .env:

```bash
DATABASE_URL=
NEXTAUTH_SECRET=

GITHUB_ID=
GITHUB_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
```

### Used technologies

- React
- TypeScript
- Query-string
- Zustand
- Next.js #13
- Next-auth
- Prisma
- Tailwind CSS
- Eslint, Prettier, Husky
- Axios
- React-hook-form
- Cloudinary
- Google and GitHub auth
