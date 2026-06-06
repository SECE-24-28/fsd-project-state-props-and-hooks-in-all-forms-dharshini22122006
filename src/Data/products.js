import shirt from "../Assets/Images/men_6.jpeg";
import dress from "../Assets/Images/women_6.jpeg";
import hoodie from "../Assets/Images/kid_1.png";
import mhoodie from "../Assets/Images/men_h.webp";
import wtopb from "../Assets/Images/women_7.jpg";
import mshirtw from "../Assets/Images/men_12.avif";
import kidsum from "../Assets/Images/kid_3.avif";
import kidspink from "../Assets/Images/kid_4.avif";
const products = [
  {
    id: 1,
    name: "Mens Casual Shirt",
    price: 1299,
    oldPrice: 2599,
    discount: "50% OFF",
    rating: 120,
    image: shirt,
  },
  {
    id: 2,
    name: "Women Floral Dress",
    price: 1499,
    oldPrice: 2999,
    discount: "50% OFF",
    rating: 98,
    image: dress,
  },
  {
    id: 3,
    name: "Men Hoodie",
    price: 999,
    oldPrice: 1999,
    discount: "50% OFF",
    rating: 76,
    image:mhoodie,
  
  },
  {
    id: 4,
    name: "Women Black Top",
    price: 699,
    oldPrice: 1399,
    discount: "50% OFF",
    rating: 110,
    image: wtopb,
  },
  {
    id: 5,
    name: "Kids Hoodie",
    price: 799,
    oldPrice: 1599,
    discount: "50% OFF",
    rating: 95,
    image:hoodie,
  },
  {
    id: 6,
    name: "White Shirt",
    price: 1599,
    oldPrice: 3199,
    discount: "50% OFF",
    rating: 89,
    image: mshirtw,
  },
  {
    id: 7,
    name: "Kids Floral Summer Set",
    price: 899,
    oldPrice: 1799,
    discount: "50% OFF",
    rating: 135,
    image:kidsum,
  },
  {
    id: 8,
    name: "Kids Fashion Set",
    price: 799,
    oldPrice: 1599,
    discount: "50% OFF",
    rating: 95,
    image: kidspink,
  },
];

export default products;