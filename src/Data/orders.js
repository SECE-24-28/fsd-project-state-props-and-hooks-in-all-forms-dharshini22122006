// src/Data/orders.js
const orders = [
  {
    _id: "order-001",
    createdAt: "2026-05-20T10:30:00Z",
    total: 1999,
    status: "Delivered",
    items: [
      {
        id: 1,
        name: "Classic White T‑Shirt",
        price: 499,
        quantity: 2,
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    _id: "order-002",
    createdAt: "2026-06-01T14:45:00Z",
    total: 2599,
    status: "Shipped",
    items: [
      {
        id: 4,
        name: "Floral Summer Dress",
        price: 2599,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1520974735190-951d5009650c?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
];

export default orders;
