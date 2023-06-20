import male from '$lib/assets/male.svg';
import female from '$lib/assets/female.svg';

export default function getGenderIcon(gender: string | null): string {
  if (!gender) return ''

  switch (gender.toLowerCase()) {
    case 'male': {
      return male
    }
    case 'female': {
      return female
    }
    default: {
      return ''
    }
  }
}