import React from "react";

function RecentUsers() {
  const users = [
    {
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
    },
    {
      name: "Priya Verma",
      email: "priya@gmail.com",
    },
    {
      name: "Amit Kumar",
      email: "amit@gmail.com",
    },
    {
      name: "Sneha Reddy",
      email: "sneha@gmail.com",
    },
  ];

  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "16px",
        height: "350px",
      }}
    >
      <h5>Recent Users</h5>

      {users.map((user, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "12px 0",
            borderBottom: "1px solid #eee",
          }}
        >
          <div
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              background: "#ef4444",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
            }}
          >
            {user.name.charAt(0)}
          </div>

          <div>
            <strong>{user.name}</strong>
            <p
              style={{
                margin: 0,
                color: "#666",
              }}
            >
              {user.email}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentUsers;