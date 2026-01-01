import Showcase from '@/app/collections/ShowCase';
import Footer from '../_components/Footer';

export default function ProductPage() {
  const products = [
    { id: 1, name: "TIRAMISU PUDDING", weight: "", price: 12.00, img: "/tiramisu.jpg" },
    { id: 2, name: "COLD BAKLAVA", weight: "4 Pcs", price: 10.00, img: "/coldbaklava.jpg" },
    { id: 3, name: "COLD LATTE", weight: "", price: 9.50, img: "/coldlatte.jpg" },
    { id: 4, name: "TURKISH DELIGHT", weight: "100 GR.", price: 8.00, img: "/turkishdelight.jpg" },
  ];
  
  return (
    <>
      <Showcase products={products} />
      <Footer />
    </>
  );
}