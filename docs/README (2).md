# Fig Browser
Privacy preserving network of p2p browsing


<img width="3112" height="1326" alt="Mermaid Chart - Create complex, visual diagrams with text -2025-10-26-144101" src="https://github.com/user-attachments/assets/1196b0ef-f14d-435c-97fc-812dc42d8479" />

## 🌟 Why This Matters

### Current Privacy Solutions Are Flawed

- **VPNs**: Visible to both ISP and VPN company - your data is still exposed
- **Tor**: Can be monitored by exit and entry nodes - not truly private
- **Traditional Browsers**: All data flows through centralized servers and tracks users for ads and telemetry and analytics

### Our Solution: True Privacy Through Technology

Our privacy-preserving browser eliminates these vulnerabilities through:
- **TEE-based Mining Nodes**: Trusted Execution Environment ensures no one can see browsing data
- **End-to-End Encryption**: Public/private key encryption for complete data protection
- **Yellow Network State Channels**: Efficient, secure user interaction with minimal transfers
- **Decentralized Storage**: IPFS + Lighthouse for large content without centralization

---

## 🚀 Key Features

### 🔐 Enhanced Security Architecture

- **TEE Mining Nodes**: Run on Trusted Execution Environment (TEE) hardware
- **Zero-Knowledge Browsing**: No one can see any text or content about your browsing
- **End-to-End Encryption**: Public/private key encryption for all data transmission
- **Decentralized Processing**: No centralized servers to compromise

### 🌐 Yellow Network Integration

- **State Channels**: Efficient user interaction with minimal blockchain transfers
- **Self-Hosted Node**: `wss://yellow.crevn.xyz/ws` (custom deployed node)
- **Reduced Transaction Costs**: Pay-per-use model with minimal fees
- **Real-time Communication**: WebSocket-based secure messaging

### 💰 DataCoin Payment System

- **Pay-Per-Use Model**: Buy DataCoins as credits, spend per request
- **Token Details**:
  - **Address**: `0x8840667f456f4D44B9C654A81E6368B0ca60658E`
  - **Chain ID**: `11155111` (Sepolia Testnet)
  - **Symbol**: `FIG`
  - **Decimals**: `6`

### 📦 Decentralized Storage

- **IPFS Integration**: InterPlanetary File System for large content
- **Lighthouse Protocol**: Enhanced storage and transmission capabilities
- **Large Content Support**: Handle very large browsing content efficiently
- **Distributed Architecture**: No single point of failure

---

## 🏗️ Technical Architecture

### System Flow

```
Browser (A) → Local Proxy → Yellow RPC Nodes → Miner (TEE) → IPFS
     ↑                                                      ↓
     └─────────── Encrypted Response ←──────────────────────┘
```

### Components

1. **Browser (A)**: User interface for browsing
2. **Local Proxy**: Request counting and forwarding
3. **Yellow RPC Nodes**: WebSocket communication layer
4. **Miner**: TEE-based encryption and storage
5. **IPFS**: Decentralized content storage

### Security Layers

- **Request Encryption**: All requests encrypted before transmission
- **TEE Processing**: Mining nodes run in secure hardware environment
- **State Channel Security**: Yellow Network ensures secure user interactions
- **End-to-End Privacy**: Complete data protection from source to destination

---

## 🛡️ Security Advantages

### vs VPNs
- ❌ **VPNs**: ISP sees you're using VPN, VPN company sees all your data
- ✅ **Our Solution**: No visibility to any third party, complete anonymity

### vs Tor
- ❌ **Tor**: Entry and exit nodes can monitor traffic
- ✅ **Our Solution**: TEE-based processing prevents any monitoring

### vs Traditional Browsers
- ❌ **Traditional**: All data flows through centralized servers
- ✅ **Our Solution**: Decentralized, encrypted, privacy-preserving architecture

---

## 💡 Innovation Highlights

### Yellow Network State Channels
- **Efficient Transactions**: Minimal blockchain transfers for user interactions
- **Cost-Effective**: Reduced transaction fees through state channels
- **Real-time Communication**: WebSocket-based secure messaging
- **Scalable Architecture**: Handle high-volume browsing requests

### TEE-Based Mining
- **Hardware Security**: Trusted Execution Environment prevents data access
- **Zero-Knowledge Processing**: Even miners cannot see browsing content
- **Tamper-Proof**: Hardware-level security guarantees
- **Privacy by Design**: Built-in privacy protection at the hardware level

### DataCoin Economy
- **Micro-Payments**: Pay only for what you use
- **Credit System**: Buy DataCoins, spend per request
- **Transparent Pricing**: Clear cost structure for browsing services
- **Decentralized Economy**: No central authority controlling payments

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Wallet connection (MetaMask, WalletConnect)
- DataCoin tokens for payment

### Installation
```bash
npm install
npm run dev
```

### Configuration
- Set up Yellow Network connection: `wss://yellow.crevn.xyz/ws`
- Configure DataCoin token: `0x8840667f456f4D44B9C654A81E6368B0ca60658E`
- Connect wallet for authentication

---

## 🎯 Hackathon Impact

### Security Market Innovation
- **Addresses Critical Vulnerabilities**: Solves real privacy problems in current solutions
- **Hardware-Level Security**: TEE integration provides unprecedented privacy
- **Decentralized Architecture**: Eliminates single points of failure
- **Economic Innovation**: DataCoin creates sustainable privacy economy

### Yellow Network Integration
- **State Channel Efficiency**: Reduces transaction costs and complexity
- **Real-time Communication**: WebSocket-based secure messaging
- **Scalable Solution**: Handles high-volume browsing requests
- **User-Friendly**: Seamless integration with existing web infrastructure

### Market Potential
- **Growing Privacy Concerns**: Increasing demand for true privacy solutions
- **VPN Market Disruption**: $44B+ market with significant vulnerabilities
- **Enterprise Adoption**: TEE-based security appeals to enterprise users
- **Global Scalability**: Decentralized architecture supports worldwide usage

---

## 🔧 Technical Specifications

### Encryption
- **Algorithm**: Public/private key encryption
- **Key Management**: Secure key generation and storage
- **End-to-End**: Complete data protection from source to destination

### Network
- **Protocol**: WebSocket over Yellow Network
- **State Channels**: Efficient user interaction
- **Decentralized**: No central authority or single point of failure

### Storage
- **IPFS**: InterPlanetary File System for large content
- **Lighthouse**: Enhanced storage and transmission
- **Distributed**: Content stored across multiple nodes

### Payment
- **Token**: DataCoin (FIG) on Sepolia
- **Model**: Pay-per-use with credit system
- **Integration**: Seamless wallet connection

---

## 🌍 Vision

To create a truly private, secure, and decentralized browsing experience that eliminates the vulnerabilities present in current privacy solutions while building a sustainable economy around privacy-preserving technology.

---

## 📞 Contact

For questions about this privacy-preserving browser or the hackathon submission, please reach out to our team.

---

**Built with ❤️ for Security Market Innovation**
