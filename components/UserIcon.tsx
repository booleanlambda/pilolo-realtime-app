export default function UserIcon() {
  return (
    <div style={{
      position: 'absolute', top: 24, right: 24, zIndex: 3,
      background: '#f7f7f7', borderRadius: '50%', padding: 8,
      boxShadow: '0 2px 8px #0001'
    }}>
      <svg width="36" height="36" viewBox="0 0 36 36">
        <circle cx="18" cy="12" r="7" fill="#a2b2c2" />
        <ellipse cx="18" cy="27" rx="11" ry="7" fill="#e4e9f0" />
      </svg>
    </div>
  )
}
