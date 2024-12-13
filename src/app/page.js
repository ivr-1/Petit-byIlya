import HomeClient from "./home/homeclient";

export const metadata = {
  metadataBase: new URL('https://petit.byIlya.com'),
  title: {
    default: 'Le Petit Croissant',
  },
  description: 'Welcome to Le Petit Croissant, savor the taste of France.',
  openGraph: {
    title: "Le Petit Croissant",
    description: "Savor the taste of France at Le Petit Croissant.",
    images: [
      {
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
};


export default function Home() {
  return (
    <HomeClient />
  );
}
