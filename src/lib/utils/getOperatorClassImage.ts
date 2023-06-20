import caster from '$lib/assets/classes/class_CASTER.png';
import tank from '$lib/assets/classes/class_TANK.png';
import medic from '$lib/assets/classes/class_MEDIC.png';
import pioneer from '$lib/assets/classes/class_PIONEER.png';
import sniper from '$lib/assets/classes/class_SNIPER.png';
import special from '$lib/assets/classes/class_SPECIAL.png';
import support from '$lib/assets/classes/class_SUPPORT.png';
import warrior from '$lib/assets/classes/class_WARRIOR.png';

export default function getOperatorClassImage(className: string): string {
  switch (className.toLowerCase()) {
    case 'tank': {
      return tank
    }
    case 'caster': {
      return caster
    }
    case 'medic': {
      return medic
    }
    case 'pioneer': {
      return pioneer
    }
    case 'sniper': {
      return sniper
    }
    case 'special': {
      return special
    }
    case 'support': {
      return support
    }
    case 'warrior': {
      return warrior
    }
    default: {
      return ''
    }
  }
}