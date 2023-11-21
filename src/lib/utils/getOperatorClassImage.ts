import caster from '$lib/assets/classes/class_Caster.png';
import tank from '$lib/assets/classes/class_Defender.png';
import medic from '$lib/assets/classes/class_Medic.png';
import pioneer from '$lib/assets/classes/class_Vanguard.png';
import sniper from '$lib/assets/classes/class_Sniper.png';
import special from '$lib/assets/classes/class_Specialist.png';
import support from '$lib/assets/classes/class_Supporter.png';
import warrior from '$lib/assets/classes/class_Guard.png';

export default function getOperatorClassImage(className: string): string {
  switch (className.toLowerCase()) {
    case 'defender': {
      return tank
    }
    case 'tank': {
      return tank
    }
    case 'caster': {
      return caster
    }
    case 'medic': {
      return medic
    }
    case 'vanguard': {
      return pioneer
    }
    case 'pioneer': {
      return pioneer
    }
    case 'sniper': {
      return sniper
    }
    case 'specialist': {
      return special
    }
    case 'special': {
      return special
    }
    case 'supporter': {
      return support
    }
    case 'support': {
      return support
    }
    case 'guard': {
      return warrior
    }
    case 'warrior': {
      return warrior
    }
    default: {
      return ''
    }
  }
}