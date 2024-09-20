// 상태값
export const state = () => ({
  // SearchBar에 입력한 포켓몬 이름
  searchPokeName: '',

  // 검색 옵션
  searchOption: {
    offset: 0, // 검색 시 시작값
    limit: 20, // 검색 시 개수
  },

  // 검색한 포켓몬 정보
  pokeList: [],

  // // official-artwork 이미지 url과 포켓몬의 id를 저장하는 상태값
  // // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png
  // pokeOfficialArtworkImageList: [],

  // // showdown 이미지 url과 포켓몬의 id를 저장하는 상태값
  // // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif
  // pokeShowdownImageList: [],
});
