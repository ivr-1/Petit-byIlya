import OrderClient from "./orderclient";

export const metadata = {
  metadataBase: new URL('https://petit.byIlya.com'),
  title: 'Order',
  description: 'Place your order online',
  openGraph: {
    title: "Order - Le Petit Croissant",
    description: "Order your favorite dishes online.",
    images: [
      {
        url: '/og-order.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
};


function Order() {
    return (
      <OrderClient />
    )
}

export default Order