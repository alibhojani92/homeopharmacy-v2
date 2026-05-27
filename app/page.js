export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#b7dfda",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      textAlign: "center",
      padding: "20px"
    }}>
      
      <img
        src="/logo.webp"
        alt="Shri Sainath Homoeopathic Pharmacy"
        style={{
          width: "180px",
          marginBottom: "20px"
        }}
      />

      <h1 style={{
        fontSize: "32px",
        color: "#116466",
        marginBottom: "10px",
        fontWeight: "bold"
      }}>
        SHRI SAINATH
      </h1>

      <h2 style={{
        fontSize: "20px",
        color: "#2c7a7b",
        marginBottom: "20px"
      }}>
        HOMOEOPATHIC PHARMACY
      </h2>

      <p style={{
        color: "#245b5d",
        fontSize: "16px"
      }}>
        Trusted Homoeopathic Medicines
      </p>

    </main>
  );
}
