export default function HeroArt({ alt }: { alt: string }) {
  return (
    <svg viewBox="0 0 640 420" role="img" aria-label={alt} className="h-auto w-full" preserveAspectRatio="xMidYMid slice">
      <rect width="640" height="420" fill="#131209" />
      <circle cx="540" cy="70" r="34" fill="#E8D9A0" />
      <rect x="80" y="150" width="480" height="170" fill="#1F1F1F" />
      <rect x="110" y="110" width="200" height="40" fill="#272727" />
      <rect x="110" y="180" width="90" height="140" fill="#C9A227" />
      <rect x="230" y="180" width="60" height="140" fill="#E8D9A0" />
      <rect x="320" y="180" width="60" height="140" fill="#E8D9A0" />
      <rect x="410" y="180" width="120" height="140" fill="#313131" />
      <rect x="80" y="320" width="480" height="14" fill="#C9A227" />
      <rect x="60" y="334" width="520" height="60" fill="#2A4A5E" />
      <rect x="90" y="348" width="120" height="8" fill="#7FB3C8" />
      <rect x="90" y="362" width="80" height="8" fill="#7FB3C8" />
      <path d="M600 340 q-30 -60 -70 -70 q40 10 30 40 q-20 -30 -50 -25 q30 15 25 55 z" fill="#2E6B4F" />
      <rect x="596" y="340" width="8" height="54" fill="#5C4632" />
    </svg>
  )
}
