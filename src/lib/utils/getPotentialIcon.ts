import potential1 from '$lib/assets/potential1.png'
import potential2 from '$lib/assets/potential2.png'
import potential3 from '$lib/assets/potential3.png'
import potential4 from '$lib/assets/potential4.png'
import potential5 from '$lib/assets/potential5.png'
import potential6 from '$lib/assets/potential6.png'

export default function getPotentialIcon(phaseNum: number | string): string {
  switch (Number(phaseNum)) {
    case 1: {
      return potential1
    }
    case 2: {
      return potential2
    }
    case 3: {
      return potential3
    }
    case 4: {
      return potential4
    }
    case 5: {
      return potential5
    }
    case 6: {
      return potential6
    }
    default: {
      return ''
    }
  }
}