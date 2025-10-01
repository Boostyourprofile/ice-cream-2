// src/appkit.js — AppKit + Wagmi (hard-coded Project ID)
import { createAppKit } from '@reown/appkit'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mantle } from '@reown/appkit/networks'

// Your Reown/WalletConnect Cloud Project ID
const projectId = 'b1b4be2183b2cb322d11e2b0c098a425'

const networks = [mantle]
const wagmiAdapter = new WagmiAdapter({ projectId, networks })

// Export wagmi config for providers
export const wagmiConfig = wagmiAdapter.wagmiConfig

// Create AppKit instance
export const appKit = createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata: {
    name: 'NeonVault',
    description: 'Creative wallet-gated site',
    // Match current origin so dev (localhost) and prod both work
    url: typeof window !== 'undefined' ? window.location.origin : 'http://localhost:5173',
    icons: ['https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f4b0.svg']
  },
  features: { analytics: true }
})
