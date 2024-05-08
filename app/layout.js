import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AlpsLiving - Best Ladies PG near Christ College, Yeshwanthpur campus",
  description:
  "Discover the ultimate girls PG experience near Christ College, Yeshwanthpur with Alps Living. Our secure and comfortable accommodation offers the perfect blend of convenience and community. Elevate your college life with spacious rooms, supportive environment and much more. Book your stay now!",
  alternates: {
    canonical: "https://www.alpsliving.in/",
  },
  openGraph: {
    title: "AlpsLiving - Best Ladies PG near Christ College, Yeshwanthpur campus",
    description:
    "Discover the ultimate girls PG experience near Christ College, Yeshwanthpur with Alps Living. Our secure and comfortable accommodation offers the perfect blend of convenience and community. Elevate your college life with spacious rooms, supportive environment and much more. Book your stay now!",
    url: "https://www.alpsliving.in/",
    type: "website",
    images: [
      {
        url: "https://i.postimg.cc/K8Xr1fyb/Opengraph-1.jpg",
        width: 1200,
        height: 630,
        alt: "Alpsliving BG pic",
      },
    ],
    authors: ["Alpliving"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
