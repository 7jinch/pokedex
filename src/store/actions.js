import { fetchPokeList, fetchPokeInfo } from '../api/api.js';

// 상태를 변경하는 액션
export const actions = {
  // 포켓몬 이름 상태값 변경하기
  updateSearchPokeName(searchPokeName) {
    this.searchPokeName = searchPokeName;
  },

  // 포켓몬 리스트 요청하기
  async getPokeList() {
    let pokeList = [];
    await fetchPokeList(this.searchOption.offset, this.searchOption.limit)
      .then(({ data }) => {
        // console.log(data.results);
        pokeList = data.results.map((poke) => {
          return {
            id: poke.url.split('/')[6],
            name: poke.name,
            officialArtworkImageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
              poke.url.split('/')[6]
            }.png`,
            showdonwImageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${
              poke.url.split('/')[6]
            }.gif`,
            DetailInfoUrl: poke.url,
          };
        });
        this.storePokeList(pokeList);
        this.searchOption.offset += this.searchOption.limit;
      })
      .catch((error) => console.log(error));
  },

  // 포켓몬 상세 정보 요청하기

  // 포켓몬 리스트 정보를 상태값에 저장하기
  storePokeList(listData) {
    // 기본 정보
    this.pokeList = [...this.pokeList, ...listData];

    // // 이미지 정보: official-artwork
    // this.pokeOfficialArtworkImageList = this.pokeList.map((poke) => {
    //   return {
    //     id: poke.id,
    //     imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`,
    //   };
    // });

    // // 이미지 정보: showdown
    // this.pokeShowdownImageList = this.pokeList.map((poke) => {
    //   return {
    //     id: poke.id,
    //     imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${poke.id}.gif`,
    //   };
    // });
  },

  // 포켓몬 리스트 정보 초기화하기
  clearPokeList() {
    this.pokeList = [];
    this.pokeOfficialArtworkImageList = [];
    this.pokeShowdownImageList = [];
  },

  // 포켓몬 검색 옵션 초기화하기
  initSearchOption() {
    this.searchOption.offset = 0;
  },
};
