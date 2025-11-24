// Componentes de animales para los hábitos

export const DogDrinking = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Perro tomando agua - cuerpo */}
    <ellipse cx="50" cy="70" rx="28" ry="18" fill="#D4A574" stroke="#8B6F47" strokeWidth="2"/>
    <ellipse cx="50" cy="55" rx="22" ry="18" fill="#D4A574" stroke="#8B6F47" strokeWidth="2"/>
    {/* Manchas oscuras */}
    <ellipse cx="45" cy="60" rx="6" ry="8" fill="#8B6F47"/>
    <ellipse cx="55" cy="65" rx="5" ry="7" fill="#8B6F47"/>
    <ellipse cx="50" cy="75" rx="4" ry="5" fill="#8B6F47"/>
    {/* Orejas */}
    <ellipse cx="40" cy="50" rx="8" ry="12" fill="#8B6F47" stroke="#8B6F47" strokeWidth="2"/>
    <ellipse cx="60" cy="50" rx="8" ry="12" fill="#8B6F47" stroke="#8B6F47" strokeWidth="2"/>
    {/* Ojos */}
    <circle cx="45" cy="52" r="4" fill="#4A90E2"/>
    <circle cx="55" cy="52" r="4" fill="#4A90E2"/>
    <circle cx="45" cy="52" r="2" fill="#2C2C2C"/>
    <circle cx="55" cy="52" r="2" fill="#2C2C2C"/>
    <circle cx="46" cy="51" r="1" fill="#FFFFFF"/>
    <circle cx="56" cy="51" r="1" fill="#FFFFFF"/>
    {/* Nariz */}
    <ellipse cx="50" cy="58" rx="3" ry="2.5" fill="#2C2C2C"/>
    {/* Lengua */}
    <path d="M 50 60 Q 48 68 50 72 Q 52 68 50 60" fill="#FF69B4" stroke="#FF1493" strokeWidth="1"/>
    {/* Pozo de agua */}
    <ellipse cx="50" cy="82" rx="22" ry="10" fill="#87CEEB" opacity="0.8"/>
    <ellipse cx="50" cy="80" rx="18" ry="8" fill="#4A90E2" opacity="0.9"/>
    {/* Gotas de agua */}
    <ellipse cx="45" cy="75" rx="2" ry="3" fill="#87CEEB" opacity="0.9"/>
    <ellipse cx="55" cy="73" rx="1.5" ry="2.5" fill="#87CEEB" opacity="0.9"/>
  </svg>
)

export const PandaLifting = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Panda levantando pesas - cabeza */}
    <circle cx="50" cy="45" r="18" fill="#FFFFFF" stroke="#2C2C2C" strokeWidth="2"/>
    {/* Parches de ojos */}
    <ellipse cx="42" cy="42" rx="9" ry="10" fill="#2C2C2C"/>
    <ellipse cx="58" cy="42" rx="9" ry="10" fill="#2C2C2C"/>
    {/* Ojos */}
    <circle cx="42" cy="42" r="3" fill="#FFFFFF"/>
    <circle cx="58" cy="42" r="3" fill="#FFFFFF"/>
    {/* Nariz */}
    <ellipse cx="50" cy="50" rx="2.5" ry="2" fill="#2C2C2C"/>
    {/* Boca */}
    <path d="M 50 52 Q 48 55 46 54" stroke="#2C2C2C" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    {/* Cinta en la cabeza */}
    <rect x="35" y="35" width="30" height="6" rx="3" fill="#4169E1"/>
    {/* Pesas - izquierda */}
    <rect x="18" y="48" width="10" height="18" rx="2" fill="#4169E1" stroke="#2C2C2C" strokeWidth="1"/>
    <rect x="16" y="46" width="14" height="5" rx="1" fill="#C0C0C0" stroke="#2C2C2C" strokeWidth="1"/>
    {/* Pesas - derecha */}
    <rect x="72" y="48" width="10" height="18" rx="2" fill="#4169E1" stroke="#2C2C2C" strokeWidth="1"/>
    <rect x="70" y="46" width="14" height="5" rx="1" fill="#C0C0C0" stroke="#2C2C2C" strokeWidth="1"/>
    {/* Barra */}
    <rect x="28" y="50" width="44" height="3" rx="1" fill="#C0C0C0" stroke="#2C2C2C" strokeWidth="1"/>
    {/* Cuerpo */}
    <ellipse cx="50" cy="72" rx="14" ry="18" fill="#FFFFFF" stroke="#2C2C2C" strokeWidth="2"/>
    <ellipse cx="50" cy="78" rx="7" ry="9" fill="#2C2C2C"/>
    {/* Brazos */}
    <ellipse cx="35" cy="60" rx="6" ry="10" fill="#FFFFFF" stroke="#2C2C2C" strokeWidth="2"/>
    <ellipse cx="65" cy="60" rx="6" ry="10" fill="#FFFFFF" stroke="#2C2C2C" strokeWidth="2"/>
  </svg>
)

export const MonkeyMeditating = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Mono meditando - cabeza */}
    <circle cx="50" cy="38" r="16" fill="#D4A574" stroke="#8B6F47" strokeWidth="2"/>
    {/* Cara más clara */}
    <ellipse cx="50" cy="40" rx="12" ry="10" fill="#F4D4A3"/>
    {/* Ojos cerrados */}
    <path d="M 44 38 Q 45 36 46 38" stroke="#8B6F47" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M 54 38 Q 55 36 56 38" stroke="#8B6F47" strokeWidth="2" fill="none" strokeLinecap="round"/>
    {/* Cejas */}
    <path d="M 42 35 Q 44 33 46 35" stroke="#8B6F47" strokeWidth="1.5" fill="none"/>
    <path d="M 54 35 Q 56 33 58 35" stroke="#8B6F47" strokeWidth="1.5" fill="none"/>
    {/* Nariz */}
    <ellipse cx="50" cy="42" rx="2" ry="1.5" fill="#8B6F47"/>
    {/* Boca serena */}
    <ellipse cx="50" cy="45" rx="3" ry="1.5" fill="#8B6F47"/>
    {/* Mejillas */}
    <circle cx="42" cy="43" r="2" fill="#FFB6C1" opacity="0.6"/>
    <circle cx="58" cy="43" r="2" fill="#FFB6C1" opacity="0.6"/>
    {/* Cuerpo en posición de loto */}
    <ellipse cx="50" cy="68" rx="18" ry="22" fill="#D4A574" stroke="#8B6F47" strokeWidth="2"/>
    {/* Piernas en loto */}
    <ellipse cx="40" cy="75" rx="8" ry="12" fill="#D4A574" stroke="#8B6F47" strokeWidth="2"/>
    <ellipse cx="60" cy="75" rx="8" ry="12" fill="#D4A574" stroke="#8B6F47" strokeWidth="2"/>
    {/* Brazos en mudra - posición de meditación */}
    <ellipse cx="32" cy="58" rx="7" ry="10" fill="#D4A574" stroke="#8B6F47" strokeWidth="2"/>
    <ellipse cx="68" cy="58" rx="7" ry="10" fill="#D4A574" stroke="#8B6F47" strokeWidth="2"/>
    {/* Manos en mudra */}
    <circle cx="32" cy="52" r="3" fill="#D4A574" stroke="#8B6F47" strokeWidth="1"/>
    <circle cx="68" cy="52" r="3" fill="#D4A574" stroke="#8B6F47" strokeWidth="1"/>
    {/* Corazón flotante */}
    <path d="M 50 25 Q 45 20 50 15 Q 55 20 50 25" fill="#FF69B4" stroke="#C71585" strokeWidth="1.5"/>
    <path d="M 50 25 Q 48 22 50 20 Q 52 22 50 25" fill="#FF1493"/>
  </svg>
)

export const KoalaSleeping = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Koala durmiendo - cabeza */}
    <circle cx="50" cy="42" r="18" fill="#B0C4DE" stroke="#708090" strokeWidth="2"/>
    {/* Ojos cerrados */}
    <path d="M 44 40 Q 45 38 46 40" stroke="#708090" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M 54 40 Q 55 38 56 40" stroke="#708090" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    {/* Nariz */}
    <ellipse cx="50" cy="46" rx="2.5" ry="2" fill="#708090"/>
    {/* Boca pequeña */}
    <ellipse cx="50" cy="48" rx="2" ry="1" fill="#708090"/>
    {/* Mejillas */}
    <circle cx="42" cy="44" r="2" fill="#FFB6C1" opacity="0.7"/>
    <circle cx="58" cy="44" r="2" fill="#FFB6C1" opacity="0.7"/>
    {/* Orejas */}
    <ellipse cx="38" cy="32" rx="7" ry="9" fill="#B0C4DE" stroke="#708090" strokeWidth="2"/>
    <ellipse cx="62" cy="32" rx="7" ry="9" fill="#B0C4DE" stroke="#708090" strokeWidth="2"/>
    <ellipse cx="38" cy="32" rx="3.5" ry="4.5" fill="#FFB6C1"/>
    <ellipse cx="62" cy="32" rx="3.5" ry="4.5" fill="#FFB6C1"/>
    {/* Cuerpo */}
    <ellipse cx="50" cy="68" rx="16" ry="20" fill="#B0C4DE" stroke="#708090" strokeWidth="2"/>
    {/* Zzz - más visibles */}
    <text x="68" y="32" fontSize="14" fill="#FFFFFF" fontWeight="bold" opacity="0.9" fontFamily="Arial">Z</text>
    <text x="74" y="26" fontSize="12" fill="#FFFFFF" fontWeight="bold" opacity="0.7" fontFamily="Arial">z</text>
    <text x="80" y="20" fontSize="10" fill="#FFFFFF" fontWeight="bold" opacity="0.5" fontFamily="Arial">z</text>
  </svg>
)

// Versión grande del koala
export const KoalaSleepingLarge = ({ size = 120 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Koala durmiendo grande - cabeza */}
    <circle cx="50" cy="42" r="22" fill="#B0C4DE" stroke="#708090" strokeWidth="2.5"/>
    {/* Ojos cerrados */}
    <path d="M 42 40 Q 44 36 46 40" stroke="#708090" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <path d="M 54 40 Q 56 36 58 40" stroke="#708090" strokeWidth="3" fill="none" strokeLinecap="round"/>
    {/* Nariz */}
    <ellipse cx="50" cy="46" rx="3" ry="2.5" fill="#708090"/>
    {/* Boca pequeña */}
    <ellipse cx="50" cy="49" rx="2.5" ry="1.2" fill="#708090"/>
    {/* Mejillas */}
    <circle cx="40" cy="44" r="2.5" fill="#FFB6C1" opacity="0.8"/>
    <circle cx="60" cy="44" r="2.5" fill="#FFB6C1" opacity="0.8"/>
    {/* Orejas grandes */}
    <ellipse cx="36" cy="30" rx="8" ry="11" fill="#B0C4DE" stroke="#708090" strokeWidth="2.5"/>
    <ellipse cx="64" cy="30" rx="8" ry="11" fill="#B0C4DE" stroke="#708090" strokeWidth="2.5"/>
    <ellipse cx="36" cy="30" rx="4" ry="5.5" fill="#FFB6C1"/>
    <ellipse cx="64" cy="30" rx="4" ry="5.5" fill="#FFB6C1"/>
    {/* Cuerpo */}
    <ellipse cx="50" cy="70" rx="18" ry="22" fill="#B0C4DE" stroke="#708090" strokeWidth="2.5"/>
    {/* Zzz más grandes y visibles */}
    <text x="70" y="30" fontSize="18" fill="#FFFFFF" fontWeight="bold" opacity="0.95" fontFamily="Arial">Z</text>
    <text x="78" y="22" fontSize="16" fill="#FFFFFF" fontWeight="bold" opacity="0.8" fontFamily="Arial">z</text>
    <text x="85" y="15" fontSize="14" fill="#FFFFFF" fontWeight="bold" opacity="0.6" fontFamily="Arial">z</text>
  </svg>
)

