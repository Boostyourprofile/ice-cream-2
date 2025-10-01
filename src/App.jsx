import React from 'react'
import { appKit } from './appkit'
import { useAccount } from 'wagmi'

function truncate(addr) {
  if (!addr) return ''
  return addr.slice(0, 6) + '...' + addr.slice(-4)
}

export default function App() {
  const { address, status, isConnected } = useAccount()

  return (
    <div className="container">
      {/* NAV */}
      <nav className="nav">
        <div className="brand">
          <img className="brand-icon" src="/favicon.svg" alt="" />
          <span className="brand-title">NeonVault</span>
        </div>
        <div>
          {!isConnected ? (
            <button className="btn btn-primary" onClick={() => appKit.open()}>
              Connect Wallet
            </button>
          ) : (
            <button className="btn" onClick={() => appKit.open()}>
              {truncate(address)} • Wallet
            </button>
          )}
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div>
          <h1>Gate premium features behind your wallet.</h1>
          {/* <p>
            Secure access with WalletConnect AppKit. One click to verify ownership across EVM wallets.
            Built with Vite + React + Wagmi.
          </p> */}
          {!isConnected ? (
            <button className="btn btn-primary" onClick={() => appKit.open()}>
              Connect to Continue
            </button>
          ) : (
            <button className="btn" onClick={() => appKit.open()}>
              View Wallet
            </button>
          )}
          <div className="kpis">
            <div className="kpi"><h3>Status</h3><p>{status}</p></div>
            <div className="kpi"><h3>Access</h3><p>{isConnected ? 'Granted' : 'Locked'}</p></div>
            <div className="kpi"><h3>Address</h3><p>{isConnected ? truncate(address) : '—'}</p></div>
          </div>
        </div>
        <div className="hero-card">
          <div className="card">
            <h3>Why connect?</h3>
            <p>Enable token‑gated pages, mints, points, airdrops, allowlists, and more.</p>
          </div>
          <div className="grid" style={{ marginTop: 12 }}>
            <div className="card"><h3>WalletConnect</h3><p>Trusted multi‑wallet standard.</p></div>
            <div className="card"><h3>Wagmi</h3><p>React hooks for on‑chain state.</p></div>
            <div className="card"><h3>Vite</h3><p>Blazing fast dev & builds.</p></div>
          </div>
        </div>
      </section>

      {/* GATED CONTENT */}
      <section className={isConnected ? '' : 'locked'}>
        <div className="grid">
          <div className="card">
            <h3>Member Drops</h3>
            <p>Exclusive rewards appear here once your wallet is verified.</p>
          </div>
          <div className="card">
            <h3>Allowlist</h3>
            <p>Check if your address is eligible for the next mint.</p>
          </div>
          <div className="card">
            <h3>Early Access</h3>
            <p>Try upcoming features before public release.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        NeonVault • Built with AppKit + Wagmi • {new Date().getFullYear()}
      </footer>
    </div>
  )
}
