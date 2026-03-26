import './AgentCharacter.css'

const characters = {
  hiver: ({ color }) => (
    <svg viewBox="0 0 320 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="character-svg">
      {/* Background card */}
      <rect x="20" y="10" width="280" height="380" rx="32" fill={color} opacity="0.12" />
      <rect x="20" y="10" width="280" height="380" rx="32" stroke={color} strokeWidth="1" opacity="0.2" />

      {/* Shadow */}
      <ellipse cx="160" cy="385" rx="60" ry="12" fill="rgba(0,0,0,0.15)" />

      {/* Body / Blazer */}
      <path d="M105 270 Q105 240 125 228 L160 215 L195 228 Q215 240 215 270 L215 360 Q215 372 205 372 L115 372 Q105 372 105 360 Z" fill={color} />
      {/* Blazer highlights */}
      <path d="M105 270 Q105 240 125 228 L160 215 L160 372 L115 372 Q105 372 105 360 Z" fill="rgba(255,255,255,0.08)" />
      {/* Collar V */}
      <path d="M135 228 L160 260 L185 228" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Lapel stripes */}
      <line x1="140" y1="240" x2="155" y2="265" stroke="rgba(255,255,255,0.25)" strokeWidth="2" strokeLinecap="round" />
      <line x1="180" y1="240" x2="165" y2="265" stroke="rgba(255,255,255,0.25)" strokeWidth="2" strokeLinecap="round" />
      {/* Badge */}
      <rect x="175" y="280" width="22" height="26" rx="5" fill="rgba(255,255,255,0.15)" />
      <circle cx="186" cy="290" r="4" fill="rgba(255,255,255,0.4)" />

      {/* Neck */}
      <rect x="146" y="198" width="28" height="28" rx="10" fill="#D4956A" />

      {/* Head - larger, more stylized */}
      <ellipse cx="160" cy="150" rx="62" ry="68" fill="#E8AD7A" />

      {/* Hair - modern styled up */}
      <path d="M98 145 Q95 80 160 65 Q225 80 222 145 Q222 105 205 90 Q180 70 160 70 Q140 70 115 90 Q98 105 98 145 Z" fill="#1a1a2e" />
      {/* Hair volume on top */}
      <path d="M110 100 Q120 50 160 42 Q200 50 210 100 Q200 65 160 60 Q120 65 110 100 Z" fill="#1a1a2e" />
      {/* Side hair */}
      <path d="M98 145 Q92 125 96 108" stroke="#1a1a2e" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M222 145 Q228 125 224 108" stroke="#1a1a2e" strokeWidth="8" strokeLinecap="round" fill="none" />

      {/* Ears */}
      <ellipse cx="99" cy="158" rx="10" ry="14" fill="#D4956A" />
      <ellipse cx="221" cy="158" rx="10" ry="14" fill="#D4956A" />

      {/* Eyes - big round stylized */}
      <ellipse cx="138" cy="155" rx="12" ry="13" fill="white" />
      <ellipse cx="182" cy="155" rx="12" ry="13" fill="white" />
      <ellipse cx="140" cy="157" rx="7" ry="8" fill="#1a1a2e" />
      <ellipse cx="184" cy="157" rx="7" ry="8" fill="#1a1a2e" />
      {/* Eye shine */}
      <circle cx="143" cy="154" r="3" fill="white" />
      <circle cx="187" cy="154" r="3" fill="white" />
      <circle cx="137" cy="160" r="1.5" fill="white" opacity="0.6" />
      <circle cx="181" cy="160" r="1.5" fill="white" opacity="0.6" />

      {/* Eyebrows - expressive */}
      <path d="M123 138 Q138 130 150 136" stroke="#1a1a2e" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M170 136 Q182 130 197 138" stroke="#1a1a2e" strokeWidth="3.5" strokeLinecap="round" fill="none" />

      {/* Round glasses */}
      <circle cx="138" cy="155" r="18" stroke={color} strokeWidth="3" fill="none" />
      <circle cx="182" cy="155" r="18" stroke={color} strokeWidth="3" fill="none" />
      <path d="M156 155 Q160 150 164 155" stroke={color} strokeWidth="2.5" fill="none" />
      <line x1="120" y1="152" x2="100" y2="155" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="200" y1="152" x2="220" y2="155" stroke={color} strokeWidth="2.5" strokeLinecap="round" />

      {/* Nose */}
      <path d="M158 168 Q160 178 164 178" stroke="#C4856A" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Smile - confident */}
      <path d="M142 190 Q160 204 178 190" stroke="#B8705A" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* Arms */}
      <path d="M105 275 Q78 295 72 325 Q70 340 82 348" stroke={color} strokeWidth="20" strokeLinecap="round" fill="none" />
      <path d="M215 275 Q242 290 248 310 Q252 325 240 335" stroke={color} strokeWidth="20" strokeLinecap="round" fill="none" />
      {/* Arm stripe details */}
      <line x1="90" y1="295" x2="82" y2="310" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" />
      <line x1="93" y1="298" x2="85" y2="313" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" />

      {/* Hands */}
      <circle cx="82" cy="350" r="14" fill="#E8AD7A" />
      <circle cx="240" cy="337" r="14" fill="#E8AD7A" />

      {/* Waving fingers on right hand */}
      <path d="M248 328 Q256 320 254 328" stroke="#E8AD7A" strokeWidth="5" strokeLinecap="round" fill="none" />
    </svg>
  ),

  apple: ({ color }) => (
    <svg viewBox="0 0 320 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="character-svg">
      {/* Background card */}
      <rect x="20" y="10" width="280" height="380" rx="32" fill={color} opacity="0.12" />
      <rect x="20" y="10" width="280" height="380" rx="32" stroke={color} strokeWidth="1" opacity="0.2" />

      <ellipse cx="160" cy="385" rx="60" ry="12" fill="rgba(0,0,0,0.15)" />

      {/* Body / Turtleneck */}
      <path d="M108 268 Q108 242 128 230 L160 218 L192 230 Q212 242 212 268 L212 360 Q212 372 202 372 L118 372 Q108 372 108 360 Z" fill="#E8E8F0" />
      {/* Jacket over turtleneck */}
      <path d="M95 275 Q95 250 115 238 L130 230 L130 372 L105 372 Q95 372 95 360 Z" fill={color} />
      <path d="M225 275 Q225 250 205 238 L190 230 L190 372 L215 372 Q225 372 225 360 Z" fill={color} />
      {/* Stripe details on jacket */}
      <line x1="102" y1="280" x2="102" y2="310" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="107" y1="280" x2="107" y2="310" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="218" y1="280" x2="218" y2="310" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="213" y1="280" x2="213" y2="310" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5" strokeLinecap="round" />

      {/* Neck */}
      <rect x="146" y="200" width="28" height="26" rx="10" fill="#C47A4A" />

      {/* Head */}
      <ellipse cx="160" cy="148" rx="64" ry="70" fill="#D49060" />

      {/* Afro hair - big volume */}
      <circle cx="160" cy="115" r="75" fill="#1a1a2e" />
      {/* Hair cutout for face */}
      <ellipse cx="160" cy="155" rx="58" ry="55" fill="#D49060" />
      {/* Hair top volume */}
      <ellipse cx="160" cy="75" rx="55" ry="38" fill="#1a1a2e" />

      {/* Ears */}
      <ellipse cx="103" cy="160" rx="10" ry="14" fill="#C47A4A" />
      <ellipse cx="217" cy="160" rx="10" ry="14" fill="#C47A4A" />

      {/* Eyes */}
      <ellipse cx="138" cy="158" rx="11" ry="12" fill="white" />
      <ellipse cx="182" cy="158" rx="11" ry="12" fill="white" />
      <ellipse cx="140" cy="160" rx="6.5" ry="7.5" fill="#1a1a2e" />
      <ellipse cx="184" cy="160" rx="6.5" ry="7.5" fill="#1a1a2e" />
      <circle cx="143" cy="157" r="2.5" fill="white" />
      <circle cx="187" cy="157" r="2.5" fill="white" />

      {/* Eyebrows */}
      <path d="M125 143 Q138 136 150 141" stroke="#1a1a2e" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M170 141 Q182 136 195 143" stroke="#1a1a2e" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* Round tinted sunglasses */}
      <circle cx="138" cy="158" r="20" stroke={color} strokeWidth="3.5" fill={color} fillOpacity="0.15" />
      <circle cx="182" cy="158" r="20" stroke={color} strokeWidth="3.5" fill={color} fillOpacity="0.15" />
      <path d="M158 156 Q160 152 162 156" stroke={color} strokeWidth="2.5" fill="none" />
      <line x1="118" y1="154" x2="104" y2="157" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="202" y1="154" x2="216" y2="157" stroke={color} strokeWidth="2.5" strokeLinecap="round" />

      {/* Nose */}
      <path d="M158 170 Q160 180 164 180" stroke="#B87050" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Smile */}
      <path d="M145 192 Q160 205 175 192" stroke="#A86048" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* Arms */}
      <path d="M95 280 Q68 300 65 330 Q63 348 76 355" stroke={color} strokeWidth="20" strokeLinecap="round" fill="none" />
      <path d="M225 280 Q248 295 255 320 Q258 338 245 345" stroke={color} strokeWidth="20" strokeLinecap="round" fill="none" />

      {/* Hands */}
      <circle cx="76" cy="357" r="14" fill="#D49060" />
      <circle cx="245" cy="347" r="14" fill="#D49060" />
    </svg>
  ),

  intercom: ({ color }) => (
    <svg viewBox="0 0 320 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="character-svg">
      {/* Background card */}
      <rect x="20" y="10" width="280" height="380" rx="32" fill={color} opacity="0.12" />
      <rect x="20" y="10" width="280" height="380" rx="32" stroke={color} strokeWidth="1" opacity="0.2" />

      <ellipse cx="160" cy="385" rx="60" ry="12" fill="rgba(0,0,0,0.15)" />

      {/* Body / Hoodie style */}
      <path d="M100 265 Q100 238 122 226 L160 213 L198 226 Q220 238 220 265 L220 360 Q220 372 210 372 L110 372 Q100 372 100 360 Z" fill={color} />
      {/* Hoodie front panel */}
      <path d="M140 226 L140 372 L180 372 L180 226 Z" fill="rgba(255,255,255,0.06)" />
      {/* Hoodie pocket */}
      <path d="M130 310 Q130 300 140 300 L180 300 Q190 300 190 310 L190 330 Q190 340 180 340 L140 340 Q130 340 130 330 Z" fill="rgba(0,0,0,0.1)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      {/* Hood strings */}
      <line x1="148" y1="235" x2="148" y2="270" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />
      <line x1="172" y1="235" x2="172" y2="270" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="148" cy="272" r="3" fill="rgba(255,255,255,0.3)" />
      <circle cx="172" cy="272" r="3" fill="rgba(255,255,255,0.3)" />

      {/* Neck */}
      <rect x="146" y="196" width="28" height="26" rx="10" fill="#F5D0B0" />

      {/* Head */}
      <ellipse cx="160" cy="145" rx="62" ry="68" fill="#FADDCA" />

      {/* Hair - short modern with side part */}
      <path d="M98 140 Q96 78 160 68 Q224 78 222 140 Q220 108 200 92 Q178 76 160 76 Q142 76 120 92 Q100 108 98 140 Z" fill="#8B4513" />
      {/* Hair swoop */}
      <path d="M115 95 Q135 62 175 68 Q155 65 140 78 Q125 88 115 95 Z" fill="#7A3B10" />
      {/* Side part line */}
      <path d="M130 80 Q132 90 128 105" stroke="#6B3410" strokeWidth="2" fill="none" />

      {/* Ears */}
      <ellipse cx="99" cy="155" rx="10" ry="14" fill="#F0C8A8" />
      <ellipse cx="221" cy="155" rx="10" ry="14" fill="#F0C8A8" />

      {/* Headphones */}
      <path d="M92 140 Q90 100 160 90 Q230 100 228 140" stroke="#333" strokeWidth="6" fill="none" strokeLinecap="round" />
      {/* Headphone pads */}
      <rect x="80" y="138" width="22" height="35" rx="8" fill={color} />
      <rect x="218" y="138" width="22" height="35" rx="8" fill={color} />
      <rect x="83" y="142" width="16" height="27" rx="6" fill="rgba(0,0,0,0.2)" />
      <rect x="221" y="142" width="16" height="27" rx="6" fill="rgba(0,0,0,0.2)" />

      {/* Eyes */}
      <ellipse cx="140" cy="155" rx="11" ry="12" fill="white" />
      <ellipse cx="180" cy="155" rx="11" ry="12" fill="white" />
      <ellipse cx="142" cy="157" rx="6.5" ry="7.5" fill="#1a1a2e" />
      <ellipse cx="182" cy="157" rx="6.5" ry="7.5" fill="#1a1a2e" />
      <circle cx="145" cy="154" r="2.5" fill="white" />
      <circle cx="185" cy="154" r="2.5" fill="white" />

      {/* Eyebrows */}
      <path d="M128 140 Q140 134 152 138" stroke="#6B3410" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M168 138 Q180 134 192 140" stroke="#6B3410" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* Rectangular glasses */}
      <rect x="125" y="145" width="30" height="22" rx="4" stroke={color} strokeWidth="2.5" fill="none" />
      <rect x="165" y="145" width="30" height="22" rx="4" stroke={color} strokeWidth="2.5" fill="none" />
      <line x1="155" y1="155" x2="165" y2="155" stroke={color} strokeWidth="2" />

      {/* Nose */}
      <path d="M158 168 Q160 177 163 177" stroke="#D4A088" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Smile */}
      <path d="M145 188 Q160 200 175 188" stroke="#C4887A" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* Arms */}
      <path d="M100 270 Q74 290 70 320 Q68 340 80 348" stroke={color} strokeWidth="20" strokeLinecap="round" fill="none" />
      <path d="M220 270 Q246 290 250 320 Q252 340 240 348" stroke={color} strokeWidth="20" strokeLinecap="round" fill="none" />

      {/* Hands */}
      <circle cx="80" cy="350" r="14" fill="#FADDCA" />
      <circle cx="240" cy="350" r="14" fill="#FADDCA" />
    </svg>
  ),

  zendesk: ({ color }) => (
    <svg viewBox="0 0 320 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="character-svg">
      {/* Background card */}
      <rect x="20" y="10" width="280" height="380" rx="32" fill={color} opacity="0.12" />
      <rect x="20" y="10" width="280" height="380" rx="32" stroke={color} strokeWidth="1" opacity="0.2" />

      <ellipse cx="160" cy="385" rx="60" ry="12" fill="rgba(0,0,0,0.15)" />

      {/* Body / Smart shirt + vest */}
      <path d="M105 268 Q105 242 125 230 L160 218 L195 230 Q215 242 215 268 L215 360 Q215 372 205 372 L115 372 Q105 372 105 360 Z" fill="#E0E0E8" />
      {/* Vest */}
      <path d="M105 268 Q105 242 125 230 L145 222 L145 372 L115 372 Q105 372 105 360 Z" fill={color} />
      <path d="M215 268 Q215 242 195 230 L175 222 L175 372 L205 372 Q215 372 215 360 Z" fill={color} />
      {/* Vest buttons */}
      <circle cx="160" cy="280" r="3.5" fill="rgba(0,0,0,0.2)" />
      <circle cx="160" cy="310" r="3.5" fill="rgba(0,0,0,0.2)" />
      <circle cx="160" cy="340" r="3.5" fill="rgba(0,0,0,0.2)" />
      {/* Tie */}
      <path d="M155 232 L160 240 L165 232" fill={color} />
      <path d="M156 240 L160 310 L164 240" fill={color} opacity="0.7" />

      {/* Neck */}
      <rect x="146" y="200" width="28" height="26" rx="10" fill="#F0C0A0" />

      {/* Head */}
      <ellipse cx="160" cy="148" rx="62" ry="68" fill="#F5D0B0" />

      {/* Hair - neat professional with beret/hat */}
      <path d="M100 142 Q98 85 160 72 Q222 85 220 142 Q218 110 202 95 Q180 78 160 78 Q140 78 118 95 Q102 110 100 142 Z" fill="#2D2D3D" />
      {/* Beret */}
      <ellipse cx="160" cy="78" rx="65" ry="22" fill={color} />
      <ellipse cx="160" cy="75" rx="58" ry="18" fill={color} />
      <circle cx="160" cy="58" r="6" fill={color} />
      {/* Beret shadow */}
      <path d="M100 80 Q130 90 160 88 Q190 90 220 80" stroke="rgba(0,0,0,0.15)" strokeWidth="2" fill="none" />

      {/* Ears */}
      <ellipse cx="99" cy="158" rx="10" ry="14" fill="#E8B898" />
      <ellipse cx="221" cy="158" rx="10" ry="14" fill="#E8B898" />

      {/* Eyes */}
      <ellipse cx="138" cy="155" rx="12" ry="13" fill="white" />
      <ellipse cx="182" cy="155" rx="12" ry="13" fill="white" />
      <ellipse cx="140" cy="157" rx="7" ry="8" fill="#1a1a2e" />
      <ellipse cx="184" cy="157" rx="7" ry="8" fill="#1a1a2e" />
      <circle cx="143" cy="154" r="2.5" fill="white" />
      <circle cx="187" cy="154" r="2.5" fill="white" />

      {/* Eyebrows */}
      <path d="M124 140 Q138 133 150 138" stroke="#2D2D3D" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M170 138 Q182 133 196 140" stroke="#2D2D3D" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* Cat-eye / angular glasses */}
      <path d="M118 148 L118 165 Q118 172 125 172 L152 172 Q158 172 158 165 L158 150 Q158 143 152 143 L125 143 Q118 143 118 148 Z" stroke={color} strokeWidth="2.5" fill="none" />
      <path d="M162 148 L162 165 Q162 172 168 172 L195 172 Q202 172 202 165 L202 150 Q202 143 195 143 L168 143 Q162 143 162 148 Z" stroke={color} strokeWidth="2.5" fill="none" />
      {/* Cat-eye wings */}
      <path d="M118 145 L110 140" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M202 145 L210 140" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="158" y1="156" x2="162" y2="156" stroke={color} strokeWidth="2" />

      {/* Nose */}
      <path d="M158 170 Q160 180 164 180" stroke="#D4A088" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Smile */}
      <path d="M142 192 Q160 204 178 192" stroke="#C4887A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Dimple */}
      <path d="M178 190 Q180 192 179 194" stroke="#C4887A" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Arms */}
      <path d="M105 275 Q78 295 74 325 Q72 345 84 352" stroke={color} strokeWidth="20" strokeLinecap="round" fill="none" />
      <path d="M215 275 Q242 295 246 325 Q248 345 236 352" stroke={color} strokeWidth="20" strokeLinecap="round" fill="none" />

      {/* Hands */}
      <circle cx="84" cy="354" r="14" fill="#F5D0B0" />
      <circle cx="236" cy="354" r="14" fill="#F5D0B0" />

      {/* Clipboard in left hand */}
      <rect x="68" y="340" width="28" height="36" rx="3" fill="#F5F5F5" stroke="#ddd" strokeWidth="1" />
      <line x1="74" y1="350" x2="90" y2="350" stroke="#ccc" strokeWidth="2" strokeLinecap="round" />
      <line x1="74" y1="356" x2="86" y2="356" stroke="#ccc" strokeWidth="2" strokeLinecap="round" />
      <line x1="74" y1="362" x2="88" y2="362" stroke="#ccc" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
}

function AgentCharacter({ color = '#ff6b2b', name = 'Agent', agentId = 'hiver' }) {
  const CharSvg = characters[agentId] || characters.hiver

  return (
    <div className="agent-character" style={{ '--char-color': color }}>
      <CharSvg color={color} />
      <div className="character-status">
        <div className="status-dot" />
        <span>Online & Ready</span>
      </div>
    </div>
  )
}

export default AgentCharacter
