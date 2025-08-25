# ⚡ Zapier Clone

A full-stack automation platform inspired by [Zapier](https://zapier.devlocstudio.in/).  
Create "Zaps" to connect apps, trigger workflows, and automate tasks — all from a sleek Next.js dashboard.

## 📋 Table of Contents

- [✨ Features](#-features)
- [📸 Demo](#-demo)
- [🗂 Database Schema](#-database-schema-erd)
- [🛠 Tech Stack](#-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [📁 Project Structure](#-project-structure)
- [🔧 Configuration](#-configuration)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ Features

- **Create & Manage Zaps** – Trigger actions based on events  
- **Folder Organization** – Group Zaps into folders and projects  
- **Inline Rename** – Rename Zaps or folders without page reload  
- **History & Versioning** – Track changes over time  
- **Reusable Templates** – Create and share automation templates  
- **Real-time UI** – Built with Recoil state management  
- **Authentication** – Secure login with NextAuth  
- **Prisma ORM** – Type-safe database access  
- **Beautiful UI** – Tailwind CSS components & Lucide icons  

---

## 📸 Demo

<p align="center">
  <img src="./public/dashboard.png" alt="Dashboard Screenshot" width="800"/>
</p>

<p align="center">
  <img src="./public/home.png" alt="Home Page Screenshot" width="800"/>
</p>

<p align="center">
  <img src="./public/zapcreate.png" alt="Zap Creation Screenshot" width="800"/>
</p>

<p align="center">
  <video src="./public/REC-20250807153129.mp4" width="800" controls autoplay muted loop>
    Your browser does not support the video tag.
  </video>
</p>

---

## 🗂 Database Schema (ERD)

<p align="center">
  <img src="./public/ERD.svg" alt="Database ERD" width="900"/>
</p>

---

## 🛠 Tech Stack

**Frontend**  
- [Next.js](https://nextjs.org/) (App Router)  
- [Recoil](https://recoiljs.org/) for state management  
- [Tailwind CSS](https://tailwindcss.com/) for styling  
- [Lucide Icons](https://lucide.dev/) for crisp SVG icons  

**Backend**  
- Node.js + Express  
- Prisma ORM  
- PostgreSQL  
- REST API + Axios calls  
- NextAuth for authentication  

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/aryanrandomnohere/zapier.git
cd zapier
npm install
```

### 2️⃣ Setup Environment Variables

Create `.env` files for each application. Here are the required environment variables:

#### **Frontend App (`apps/frontend/.env`)**
```bash
# Environment
NODE_ENV="development"

# NextAuth Configuration
NEXTAUTH_SECRET="your-nextauth-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# Database
DATABASE_URL="postgresql://postgres:mysecretpassword@localhost:5432/postgres"

# Frontend URLs
NEXT_PUBLIC_FRONTEND_URL="http://localhost:3000"
NEXT_PUBLIC_BACKEND_URL="http://localhost:3001"
NEXT_PUBLIC_HOOK_URL="http://localhost:3002"

# Google OAuth
GOOGLE_CLIENTID="your-google-client-id"
GOOGLE_SECRET="your-google-client-secret"

# SMTP Configuration
SMTP_HOST="smtp-relay.brevo.com"
SMTP_PORT=587
SMTP_USERNAME="your-smtp-username"
SMTP_SECRET="your-smtp-password"
```

#### **Backend App (`apps/backend/.env`)**
```bash
# Database
DATABASE_URL="postgresql://postgres:mysecretpassword@localhost:5432/postgres"

# Environment
NODE_ENV="development"

# SMTP Configuration
SMTP_HOST="smtp-relay.brevo.com"
SMTP_PORT=587
SMTP_USERNAME="your-smtp-username"
SMTP_SECRET="your-smtp-password"

# Google OAuth
GOOGLE_CLIENTID="your-google-client-id"
GOOGLE_SECRET="your-google-client-secret"
```

#### **Worker App (`apps/worker/.env`)**
```bash
# Database
DATABASE_URL="postgresql://postgres:mysecretpassword@localhost:5432/postgres"

# Kafka Configuration
KAFKA_BROKER_URL="localhost:9092"
KAFKA_SSL_KEY_PATH="./certificates/private.key"
KAFKA_SSL_CERT_PATH="./certificates/certificate.crt"
KAFKA_SSL_CA_PATH="./certificates/ca_certificate.crt"
KAFKA_CLIENT_ID="zapier-worker"

# SMTP Configuration
SMTP_HOST="smtp-relay.brevo.com"
SMTP_PORT=587
SMTP_USERNAME="your-smtp-username"
SMTP_SECRET="your-smtp-password"
```

#### **Processor App (`apps/processor/.env`)**
```bash
# Database
DATABASE_URL="postgresql://postgres:mysecretpassword@localhost:5432/postgres"

# Kafka Configuration
KAFKA_BROKER_URL="localhost:9092"
KAFKA_SSL_KEY_PATH="./certificates/private.key"
KAFKA_SSL_CERT_PATH="./certificates/certificate.crt"
KAFKA_SSL_CA_PATH="./certificates/ca_certificate.crt"
KAFKA_CLIENT_ID="zap-processor"
```

> **Note**: For production deployment, update the URLs and use secure passwords. See commented production values in the actual `.env.example` files.

### 3️⃣ Setup Database

```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# (Optional) Seed the database
npx prisma db seed
```

### 4️⃣ Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

---

## 📁 Project Structure

```
zapier/
├── apps/                   # Monorepo applications
│   ├── backend/           # Express.js API server
│   ├── frontend/          # Next.js dashboard application
│   ├── worker/            # Background job processing
│   ├── processor/         # Zap execution engine
│   └── hooks/             # Webhook handlers
├── packages/              # Shared packages
│   ├── prisma/           # Database schema & migrations
│   │   ├── schema.prisma
│   │   └── migrations/
│   ├── types/            # Shared TypeScript definitions
│   └── apps/             # Action services & integrations
├── public/               # Static assets
└── docs/                 # Documentation files
```

---

## 🔧 Configuration

### Database Setup
1. Install PostgreSQL locally or use a cloud provider
2. Update `DATABASE_URL` in your `.env` file
3. Run `npx prisma migrate dev` to apply schema changes

### Authentication
This project uses NextAuth.js. Configure your preferred providers in `app/api/auth/[...nextauth]/route.ts`.

### Environment Variables
All required environment variables are documented in `.env.example`. Copy and configure them according to your setup.

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/aryanrandomnohere">Aryan</a>
</p>