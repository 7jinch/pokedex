// 상태값
export const state = () => ({
  // SearchBar에 입력한 포켓몬 이름
  searchPokeName: '',

  // 검색 옵션
  searchOption: {
    offset: 0, // 검색 시 시작값
    limit: 10, // 검색 시 개수
  },

  // 검색한 포켓몬 정보
  pokeList: [],

  // 포켓몬 상세 정보
  pokeInfo: {
    id: null, // 포켓몬의 id
    name: null, // 포켓몬의 이름(한글)
    flavorText: null, // 포켓몬의 배경 정보(한글)
    genera: null, // 포켓몬의 분류(한글)
    weight: null, // 포켓몬의 몸무게
    height: null, // 포켓몬의 키
    officialArtworkImageUrl: null, // 포켓몬의 official artwork 이미지 url
    showdonwImageUrl: null, // 포켓몬의 showdown 이미지 url
    types: null, // 포켓몬의 타입
    moves: null, // 포켓몬의 스킬
  },

  // // official-artwork 이미지 url과 포켓몬의 id를 저장하는 상태값
  // // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png
  // pokeOfficialArtworkImageList: [],

  // // showdown 이미지 url과 포켓몬의 id를 저장하는 상태값
  // // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif
  // pokeShowdownImageList: [],
});
