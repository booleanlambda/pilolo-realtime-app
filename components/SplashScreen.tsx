export default function SplashScreen() {
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 10,
      background: 'linear-gradient(135deg, #18e7bb 10%, #44aaff 90%)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      color: '#fff'
    }}>
      <h1 style={{ fontSize: 48, fontWeight: 800, letterSpacing: 2 }}>
        Pilolo Map
      </h1>
      <p style={{ fontSize: 20 }}>Loading the adventure...</p>
    </div>
  )
}
