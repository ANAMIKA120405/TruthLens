export function toneForPrediction(prediction = '') {
  if (prediction.includes('Fake')) {
    return {
      icon: 'fake',
      text: 'text-rose-300',
      softText: 'text-rose-100',
      bg: 'bg-rose-500/10',
      border: 'border-rose-500/30',
      ring: 'from-rose-500/95 to-rose-400/80',
      track: 'bg-rose-500/20',
    };
  }

  if (prediction.includes('Real')) {
    return {
      icon: 'real',
      text: 'text-emerald-300',
      softText: 'text-emerald-100',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/30',
      ring: 'from-emerald-500/95 to-cyan-400/80',
      track: 'bg-emerald-500/20',
    };
  }

  return {
    icon: 'neutral',
    text: 'text-amber-200',
    softText: 'text-amber-50',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    ring: 'from-amber-500/95 to-yellow-400/80',
    track: 'bg-amber-500/20',
  };
}

export function formatSignedNumber(value) {
  if (value > 0) return `+${value}`;
  return `${value}`;
}
