'use client'

import { useState, useEffect } from 'react'

export default function TerminalWindow() {
  const [currentLine, setCurrentLine] = useState(0)
  
  const terminalLines = [
    { type: 'command', text: 'mitmproxy -s app.py', delay: 1000 },
    { type: 'output', text: 'Proxy server running on 127.0.0.1:8080', delay: 1500 },
    { type: 'command', text: 'python ws-code.py', delay: 2000 },
    { type: 'output', text: 'WebSocket bridge active on ws://127.0.0.1:8765', delay: 1500 },
    { type: 'command', text: 'npm start', delay: 2000 },
    { type: 'output', text: 'Backend service running on port 3001', delay: 1500 },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % (terminalLines.length + 1))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="terminal-window w-full max-w-lg">
      <div className="terminal-header">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-gray-300 text-sm font-mono">fig@system:~$</div>
      </div>
      
      <div className="terminal-content min-h-[300px]">
        {terminalLines.slice(0, currentLine).map((line, index) => (
          <div key={index} className="terminal-line">
            {line.type === 'command' && (
              <>
                <span className="prompt">$</span>
                <span className="command ml-2">{line.text}</span>
              </>
            )}
            {line.type === 'output' && (
              <span className="output">{line.text}</span>
            )}
          </div>
        ))}
        
        {currentLine < terminalLines.length && (
          <div className="terminal-line">
            <span className="prompt">$</span>
            <span className="command ml-2 animate-pulse">
              {terminalLines[currentLine]?.text.substring(0, Math.floor((Date.now() / 100) % terminalLines[currentLine]?.text.length))}
            </span>
          </div>
        )}
        
        {currentLine >= terminalLines.length && (
          <div className="terminal-line">
            <span className="cursor">_</span>
          </div>
        )}
      </div>
    </div>
  )
}
