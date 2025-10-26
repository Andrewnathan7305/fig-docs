# FIG - HTTP Request Forwarding and Processing System

FIG is a sophisticated HTTP request forwarding and processing system that intercepts web traffic through a proxy, forwards requests to a processing backend, and returns modified responses. The system is built with high-performance concurrent processing capabilities and integrates with blockchain-based session management.

## 🏗️ Architecture Overview

The system consists of three main components:

1. **Proxy Layer** (`app/`) - Python-based mitmproxy addon for intercepting HTTP traffic
2. **Processing Backend** (`miner/`) - TypeScript/Node.js service for processing requests and blockchain integration
3. **WebSocket Bridge** (`app/ws-code.py`) - Python WebSocket server for communication between components

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Browser       │    │   mitmproxy      │    │   WebSocket     │
│                 │◄──►│   (app.py)       │◄──►│   Bridge        │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                │                        │
                                ▼                        ▼
                       ┌──────────────────┐    ┌─────────────────┐
                       │   HTTP Forwarder │    │   Backend       │
                       │   (Express.js)   │    │   (listener.ts) │
                       └──────────────────┘    └─────────────────┘
```

## 🚀 Features

- **High-Performance Concurrent Processing**: Supports up to 100 concurrent requests with intelligent queuing
- **Blockchain Integration**: Uses ERC-7824 Nitrolite protocol for secure session management
- **IPFS Storage Integration**: Large payloads are automatically stored in IPFS to reduce transport data
- **WebSocket Communication**: Real-time bidirectional communication between components
- **Request/Response Modification**: Full control over HTTP request and response processing
- **Connection Pooling**: Optimized HTTP client with connection reuse
- **Multi-threaded Architecture**: Cluster mode for maximum throughput
- **Binary Data Handling**: Automatic base64 encoding/decoding for binary content
- **Decentralized Storage**: Leverages Lighthouse IPFS for efficient data distribution

## 📁 Project Structure

```
fig/
├── app/                          # Proxy and WebSocket components
│   ├── app.py                   # mitmproxy addon (main proxy logic)
│   ├── ws-code.py              # WebSocket bridge server with IPFS integration
│   ├── ipfs_utils.py           # IPFS utilities for Lighthouse integration
│   ├── requirements.txt        # Python dependencies
│   ├── env.example             # Environment configuration template
│   └── forwarder.log           # Log file
├── miner/                       # Backend processing service
│   ├── listener.ts             # Main backend service
│   ├── utils/                  # Utility modules
│   │   ├── auth.ts            # Authentication utilities
│   │   ├── session.ts         # Session management
│   │   └── websocket.ts       # WebSocket service
│   ├── dist/                   # Compiled JavaScript output
│   ├── package.json           # Node.js dependencies
│   └── tsconfig.json          # TypeScript configuration
└── README.md                   # This file
```

## 🛠️ Installation

### Prerequisites

- Python 3.8+
- Node.js 18+
- mitmproxy
- curl (for request processing)
- Lighthouse API key (for IPFS storage)

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fig
   ```

2. **Install Python dependencies**
   ```bash
   cd app
   pip install -r requirements.txt
   ```

3. **Install Node.js dependencies**
   ```bash
   cd miner
   npm install
   ```

4. **Build TypeScript**
   ```bash
   npm run build
   ```

5. **Configure IPFS (Optional)**
   ```bash
   cd app
   cp env.example .env
   # Edit .env and add your Lighthouse API key
   ```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the `miner/` directory:

```env
PRIVATE_KEY=0x...  # Your Ethereum private key for blockchain authentication
```

Create a `.env` file in the `app/` directory for IPFS configuration:

```env
LIGHTHOUSE_API_KEY=your_lighthouse_api_key_here  # Get from https://files.lighthouse.storage/
IPFS_THRESHOLD=524288  # 512KB threshold for IPFS storage (optional)
IPFS_GATEWAY=https://gateway.lighthouse.storage/ipfs  # IPFS gateway URL (optional)
```

### WebSocket Configuration

The system uses the following WebSocket endpoints:
- **Backend to Blockchain**: `wss://clearnet.yellow.com/ws`
- **Proxy to Backend**: `ws://127.0.0.1:8765`

## 🚀 Usage

### 1. Start the WebSocket Bridge

```bash
cd app
python3 ws-code.py
```

This starts the WebSocket server on `ws://127.0.0.1:8765`.

### 2. Start the Backend Service

```bash
cd miner
npm start
```

This compiles TypeScript and starts the main processing service.

### 3. Start the Proxy

```bash
mitmproxy -s app/app.py
```

This starts the mitmproxy with the FIG addon loaded.

### 4. Configure Browser

Configure your browser to use the mitmproxy as an HTTP proxy (typically `127.0.0.1:8080`).

## 🌐 IPFS Integration

FIG automatically integrates with IPFS through Lighthouse to optimize large data transfers:

### How IPFS Integration Works

1. **Detection**: The system monitors payload sizes in WebSocket messages
2. **Threshold Check**: Payloads larger than 512KB are flagged for IPFS storage
3. **Upload**: Large data is uploaded to IPFS via Lighthouse API
4. **Reference**: Instead of transmitting the full payload, only the IPFS CID is sent
5. **Retrieval**: Recipients automatically resolve IPFS CIDs to retrieve the original data

### Benefits

- **Reduced Bandwidth**: Large responses are stored once in IPFS and referenced by CID
- **Faster Transfers**: Only small CIDs are transmitted over WebSocket
- **Decentralized Storage**: Data is stored in a distributed, resilient network
- **Caching**: IPFS provides automatic caching and content deduplication

### Configuration

Set your Lighthouse API key in the `app/.env` file:

```env
LIGHTHOUSE_API_KEY=your_api_key_here
```

Get your API key from [Lighthouse Files DApp](https://files.lighthouse.storage/).

### IPFS Message Format

When data is stored in IPFS, the message format changes:

```json
{
  "ipfs": true,
  "cid": "QmXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXx",
  "size": 1048576,
  "filename": "response.json"
}
```

The system automatically resolves these references back to the original data.

## 🔧 How It Works

### Request Flow

1. **Interception**: mitmproxy intercepts HTTP requests from the browser
2. **Serialization**: Request data is serialized into JSON format with headers, body, and metadata
3. **WebSocket Forwarding**: Request is sent via WebSocket to the backend service
4. **Processing**: Backend processes the request using curl for actual HTTP execution
5. **Blockchain Integration**: Results are submitted to blockchain session management
6. **Response**: Modified response is sent back through the WebSocket chain
7. **Browser Response**: mitmproxy returns the processed response to the browser

### Key Components

#### Proxy Layer (`app.py`)
- Intercepts all HTTP traffic
- Serializes requests into structured JSON
- Manages concurrent request processing (up to 50 concurrent)
- Handles WebSocket communication with backend
- Processes responses and returns them to browser

#### Backend Service (`listener.ts`)
- Authenticates with blockchain using ERC-7824 Nitrolite
- Processes forwarded HTTP requests using curl
- Manages app sessions and state updates
- Handles high-concurrency request processing (up to 100 concurrent)
- Implements connection pooling and performance optimizations

#### WebSocket Bridge (`ws-code.py`)
- Bridges communication between proxy and backend
- Handles message broadcasting
- Supports large message sizes (up to 100MB)
- Manages client connections
- **IPFS Integration**: Automatically stores large payloads (>512KB) in IPFS
- **Data Optimization**: Reduces transport data by transmitting IPFS CIDs instead of large content

## 🔒 Security Features

- **Blockchain Authentication**: Uses ERC-7824 Nitrolite protocol for secure authentication
- **Session Management**: Secure app session creation and management
- **ECDSA Signing**: All blockchain interactions are cryptographically signed
- **Private Key Security**: Private keys are handled securely in environment variables

## 📊 Performance

- **Concurrent Requests**: Up to 100 concurrent request processors
- **Connection Pooling**: Reuses HTTP connections for better performance
- **Memory Management**: Automatic cleanup of resources and processes
- **Queue Management**: Intelligent request queuing when at capacity
- **Binary Data Handling**: Efficient base64 encoding/decoding
- **IPFS Optimization**: Large payloads (>512KB) are stored in IPFS, reducing bandwidth usage
- **Decentralized Storage**: Leverages IPFS for efficient data distribution and caching

## 🐛 Troubleshooting

### Common Issues

1. **WebSocket Connection Failed**
   - Ensure the WebSocket bridge is running on port 8765
   - Check firewall settings

2. **Authentication Errors**
   - Verify `PRIVATE_KEY` is set in `.env` file
   - Ensure the private key has sufficient permissions

3. **Request Timeout**
   - Check network connectivity
   - Verify target URLs are accessible
   - Review timeout settings in configuration

4. **High Memory Usage**
   - Monitor concurrent request limits
   - Check for memory leaks in long-running processes

5. **IPFS Issues**
   - Verify `LIGHTHOUSE_API_KEY` is set correctly
   - Check network connectivity to Lighthouse gateway
   - Ensure API key has sufficient permissions
   - Monitor IPFS upload/download success rates in logs

### Logs

- **Proxy Logs**: Check mitmproxy console output
- **Backend Logs**: Monitor Node.js console output
- **WebSocket Logs**: Check `app/forwarder.log`
- **IPFS Logs**: Look for `[IPFS]` prefixed messages in WebSocket and proxy logs

## 🔧 Development

### Building

```bash
cd miner
npm run build
```

### Development Mode

```bash
cd miner
npm run dev
```

### Cleaning

```bash
cd miner
npm run clean
```

## 📝 API Reference

### Request Format

```json
{
  "url": "https://example.com/api",
  "method": "POST",
  "headers": {
    "Content-Type": ["application/json"],
    "Authorization": ["Bearer token"]
  },
  "raw_body": {
    "is_base64": false,
    "data": "{\"key\": \"value\"}"
  },
  "query": {
    "param": "value"
  }
}
```

### Response Format

```json
{
  "status": 200,
  "headers": {
    "Content-Type": ["application/json"]
  },
  "body": {
    "is_base64": false,
    "data": "{\"result\": \"success\"}"
  }
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

[Add your license information here]

## 🆘 Support

For issues and questions:
- Create an issue in the repository
- Check the troubleshooting section
- Review logs for error details

---

**Note**: This system is designed for development and testing purposes. Ensure proper security measures are in place when using in production environments.
