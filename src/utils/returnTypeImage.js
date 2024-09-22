export const returnTypeImage = (types) => {
  // console.log(types);
  const type = Object.values(types)[0];
  // console.log(type);
  switch (type) {
    case '노말':
      return '/types/normal.svg';
    case '불꽃':
      return '/types/fire.svg';
    case '물':
      return '/types/water.svg';
    case '풀':
      return '/types/grass.svg';
    case '전기':
      return '/types/electric.svg';
    case '얼음':
      return '/types/ice.svg';
    case '격투':
      return '/types/fighting.svg';
    case '독':
      return '/types/poison.svg';
    case '땅':
      return '/types/ground.svg';
    case '비행':
      return '/types/flying.svg';
    case '에스퍼':
      return '/types/psychic.svg';
    case '벌레':
      return '/types/bug.svg';
    case '바위':
      return '/types/rock.svg';
    case '고스트':
      return '/types/ghost.svg';
    case '드래곤':
      return '/types/dragon.svg';
    case '악':
      return '/types/dark.svg';
    case '페어리':
      return '/types/fairy.svg';
    case '스틸':
      return '/types/steel.svg';
    default:
      return '/types/question-mark.png';
  }
};
