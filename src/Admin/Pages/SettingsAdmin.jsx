import React, { useState } from "react";
import AdminLayout from "../Layout/AdminLayout";
import "../Admin.css";

function SettingsAdmin() {
  const [saved, setSaved] = useState(false);
  const [settings, setSettings] = useState({
    storeName: "Fab Fit",
    storeEmail: "admin@fabfit.com",
    storePhone: "+91 98765 43210",
    currency: "INR",
    taxRate: 18,
    freeShippingAbove: 999,
    defaultShipping: 99,
    maintenanceMode: false,
    allowReviews: true,
    emailNotifications: true,
    orderConfirmation: true,
    lowStockAlert: true,
    lowStockThreshold: 10,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    setSaved(false);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const SectionCard = ({ title, children }) => (
    <div style={{ background: "#fff", borderRadius: 18, padding: 28, boxShadow: "0 2px 10px rgba(0,0,0,.05)", marginBottom: 20 }}>
      <h3 style={{ fontWeight: 700, fontSize: 18, color: "#1a1a2e", marginBottom: 20, paddingBottom: 14, borderBottom: "2px solid #f0f0f0" }}>{title}</h3>
      {children}
    </div>
  );

  const Field = ({ label, name, type = "text", placeholder = "" }) => (
    <div style={{ marginBottom: 18 }}>
      <label style={{ fontSize: 13, fontWeight: 600, color: "#555", display: "block", marginBottom: 6 }}>{label}</label>
      <input
        name={name}
        type={type}
        value={settings[name]}
        onChange={handleChange}
        placeholder={placeholder}
        style={{ width: "100%", padding: "11px 14px", borderRadius: 10, border: "1px solid #e0e0e0", fontSize: 14, outline: "none" }}
      />
    </div>
  );

  const Toggle = ({ label, name, desc }) => (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 0", borderBottom: "1px solid #f5f5f5" }}>
      <div>
        <div style={{ fontWeight: 600, fontSize: 15 }}>{label}</div>
        {desc && <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>{desc}</div>}
      </div>
      <button
        onClick={() => setSettings((prev) => ({ ...prev, [name]: !prev[name] }))}
        style={{
          width: 52, height: 28, borderRadius: 14,
          background: settings[name] ? "#c40000" : "#e0e0e0",
          border: "none", cursor: "pointer", position: "relative", transition: "background .3s",
        }}
      >
        <div style={{
          position: "absolute", top: 4, left: settings[name] ? 26 : 4,
          width: 20, height: 20, borderRadius: "50%", background: "#fff",
          transition: "left .3s", boxShadow: "0 2px 4px rgba(0,0,0,.2)"
        }} />
      </button>
    </div>
  );

  return (
    <AdminLayout>
      <div style={{ paddingBottom: 30 }}>
        {/* Title */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <div>
            <h2 style={{ fontSize: 32, fontWeight: 700, color: "#1a1a2e" }}>Settings</h2>
            <p style={{ color: "#888", marginTop: 4 }}>Configure your store preferences</p>
          </div>
          <button
            onClick={handleSave}
            style={{
              padding: "12px 28px", borderRadius: 12,
              background: saved ? "#16a34a" : "#c40000",
              color: "#fff", border: "none", fontWeight: 700,
              fontSize: 15, cursor: "pointer",
              boxShadow: `0 4px 15px ${saved ? "rgba(22,163,74,.3)" : "rgba(196,0,0,.3)"}`,
              transition: "all .3s"
            }}
          >
            {saved ? "✓ Saved!" : "Save Changes"}
          </button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {/* Left Column */}
          <div>
            <SectionCard title="🏪 Store Information">
              <Field label="Store Name" name="storeName" />
              <Field label="Contact Email" name="storeEmail" type="email" />
              <Field label="Contact Phone" name="storePhone" />
              <div style={{ marginBottom: 18 }}>
                <label style={{ fontSize: 13, fontWeight: 600, color: "#555", display: "block", marginBottom: 6 }}>Currency</label>
                <select name="currency" value={settings.currency} onChange={handleChange}
                  style={{ width: "100%", padding: "11px 14px", borderRadius: 10, border: "1px solid #e0e0e0", fontSize: 14, outline: "none", background: "#fff" }}>
                  <option value="INR">₹ INR – Indian Rupee</option>
                  <option value="USD">$ USD – US Dollar</option>
                  <option value="EUR">€ EUR – Euro</option>
                  <option value="GBP">£ GBP – British Pound</option>
                </select>
              </div>
            </SectionCard>

            <SectionCard title="💰 Pricing & Taxes">
              <Field label="GST / Tax Rate (%)" name="taxRate" type="number" />
              <Field label="Default Shipping (₹)" name="defaultShipping" type="number" />
              <Field label="Free Shipping Above (₹)" name="freeShippingAbove" type="number" />
            </SectionCard>
          </div>

          {/* Right Column */}
          <div>
            <SectionCard title="🔔 Notifications">
              <Toggle label="Email Notifications" name="emailNotifications" desc="Receive email for admin events" />
              <Toggle label="Order Confirmations" name="orderConfirmation" desc="Send order confirmation to customers" />
              <Toggle label="Low Stock Alerts" name="lowStockAlert" desc="Get notified when stock runs low" />
              <Field label="Low Stock Threshold (units)" name="lowStockThreshold" type="number" />
            </SectionCard>

            <SectionCard title="⚙️ Store Features">
              <Toggle label="Customer Reviews" name="allowReviews" desc="Allow customers to submit product reviews" />
              <Toggle label="Maintenance Mode" name="maintenanceMode" desc="Put the store in maintenance mode" />
            </SectionCard>

            {/* Danger Zone */}
            <div style={{ background: "#fff5f5", borderRadius: 18, padding: 28, border: "1px solid #fecaca" }}>
              <h3 style={{ fontWeight: 700, fontSize: 18, color: "#dc2626", marginBottom: 16 }}>⚠️ Danger Zone</h3>
              <p style={{ color: "#888", fontSize: 14, marginBottom: 16 }}>These actions are irreversible. Proceed with caution.</p>
              <button style={{ padding: "10px 20px", borderRadius: 10, background: "transparent", border: "1px solid #dc2626", color: "#dc2626", fontWeight: 700, cursor: "pointer", marginRight: 12 }}>
                Clear All Orders
              </button>
              <button style={{ padding: "10px 20px", borderRadius: 10, background: "#dc2626", border: "none", color: "#fff", fontWeight: 700, cursor: "pointer" }}>
                Reset Store Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default SettingsAdmin;
