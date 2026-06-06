import React from "react";

function TopProducts() {
  const products = [
    {
      name: "Mens Casual Shirt",
      sold: 520,
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300",
      width: "85%",
    },
    {
      name: "Party Wear Gown",
      sold: 430,
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300",
      width: "72%",
    },
    {
      name: "Stylish Crop Top",
      sold: 410,
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=300",
      width: "68%",
    },
    {
      name: "Kids Hoodie",
      sold: 380,
      image:
        "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=300",
      width: "62%",
    },
  ];

  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "20px",
        height: "350px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <h5 style={{ margin: 0 }}>Top Selling Products</h5>

        <span
          style={{
            color: "#e00000",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          View All
        </span>
      </div>

      {products.map((product, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "18px",
          }}
        >
          <img
            src={product.image}
            alt=""
            style={{
              width: "45px",
              height: "45px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />

          <div
            style={{
              flex: 1,
              marginLeft: "15px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "6px",
              }}
            >
              <span>{product.name}</span>

              <span
                style={{
                  color: "#666",
                  fontSize: "14px",
                }}
              >
                {product.sold} Sold
              </span>
            </div>

            <div
              style={{
                width: "100%",
                height: "6px",
                background: "#eee",
                borderRadius: "20px",
              }}
            >
              <div
                style={{
                  width: product.width,
                  height: "100%",
                  background: "#e53935",
                  borderRadius: "20px",
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TopProducts;