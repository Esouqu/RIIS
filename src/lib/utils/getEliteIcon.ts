import elite0 from '$lib/assets/elite0.png'
import elite1 from '$lib/assets/elite1.png'
import elite2 from '$lib/assets/elite2.png'

export default function getEliteIcon(phaseNum: number | string): string {
  switch (Number(phaseNum)) {
    case 0: {
      return elite0
    }
    case 1: {
      return elite1
    }
    case 2: {
      return elite2
    }
    default: {
      return ''
    }
  }
}