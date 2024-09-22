import {
  fetchPokeList,
  fetchPokeInfo1,
  fetchPokeInfo2,
  fetchOfficialArtworkImage,
  fetchShowdownImage,
  fetchEvolution,
} from '../api/api.js';
import { translateTypeToKorean } from '../utils/translateTypeToKorean.js';

// 상태를 변경하는 액션
export const actions = {
  // 페이지 이동하기
  movePage(router, url, id = null) {
    switch (url) {
      case 'list':
        router.push('/list');
        break;
      case 'like':
        router.push('/like');
        break;
      case 'my-poke':
        router.push('/my-poke');
        break;
      case 'detail':
        router.push(`/${id}`);
        break;
      case 'prev':
        router.push(`${id - 1}`);
        break;
      case 'next':
        router.push(`${id + 1}`);
        break;
    }
  },

  // 포켓몬 이름 상태값 변경하기
  updateSearchPokeName(searchPokeName) {
    this.searchPokeName = searchPokeName;
  },

  // 포켓몬 리스트 요청하기
  async getPokeList() {
    this.loadData = true; // 데이터 로딩 여부
    this.fetchError = false; // 에러 여부
    let pokeList = [];

    await fetchPokeList(this.searchOption.offset, this.searchOption.limit)
      .then(({ data }) => {
        // console.log(data.results);
        pokeList = data.results.map((poke) => {
          return {
            id: poke.url.split('/')[6], // 포켓몬 id
            name: poke.name, // 포켓몬 이름(영문)
            // 포켓몬 official artwork 이미지 url
            officialArtworkImageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
              poke.url.split('/')[6]
            }.png`,
            // 포켓몬 showdonw 이미지 url
            showdonwImageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${
              poke.url.split('/')[6]
            }.gif`,
            // detailInfoUrl: poke.url, // 상세 정보 url
          };
        });

        this.storePokeList(pokeList);
        this.searchOption.offset += this.searchOption.limit;
        // this.loadData = false; // 데이터 로딩 완료
      })
      .catch((error) => {
        this.fetchError = true; // 에러
        console.log(error);
      });

    for (const poke of this.pokeList) {
      await fetchPokeInfo1(poke.id)
        .then(({ data }) => {
          // 타입
          const types = data.types.map((type) =>
            translateTypeToKorean(type.type.name)
          );
          poke.types = types;
          // this.loadData = false; // 데이터 로딩 완료
        })
        .catch((error) => {
          this.fetchError = true; // 에러
          console.log(error);
        });

      await fetchPokeInfo2(poke.id)
        .then(({ data }) => {
          // 포켓몬 이름(한글)
          const name = data.names.find(
            (name) => name.language.name === 'ko'
          ).name;
          poke.name = name;
          this.loadData = false; // 데이터 로딩 완료
        })
        .catch((error) => {
          this.fetchError = true; // 에러
          console.log(error);
        });
    }
  },

  // 포켓몬 상세 정보 요청하기
  async getPokeInfo(id) {
    this.loadData = true; // 데이터 로딩 여부
    this.fetchError = false; // 에러 여부

    await fetchPokeInfo1(id)
      .then(({ data }) => {
        // console.log(data);
        this.pokeInfo.id = String(data.id).padStart(4, '0'); // 문자열의 길이가 4보다 짧으면 앞쪽을 '0'으로 채움
        this.pokeInfo.weight = `${data.weight / 10}`; // kg 단위로 변경
        this.pokeInfo.height = `${data.height / 10}`; // m 단위로 변경
        this.pokeInfo.showdonwImageUrl = fetchShowdownImage(id);
        this.pokeInfo.officialArtworkImageUrl = fetchOfficialArtworkImage(id);
        // 타입
        this.pokeInfo.types = data.types.map((type) =>
          translateTypeToKorean(type.type.name)
        );
        this.pokeInfo.moves = data.moves;
        // this.loadData = false; // 데이터 로딩 완료
      })
      .catch((error) => {
        this.fetchError = true; // 에러
        console.log(error);
      });

    await fetchPokeInfo2(id)
      .then(({ data }) => {
        // console.log(data.genera);
        // 포켓몬 이름(한글)
        const name = data.names.find(
          (name) => name.language.name === 'ko'
        ).name;
        this.pokeInfo.name = name;

        // 포켓몬 배경 설명(한글)
        const flavorText = data.flavor_text_entries.find(
          (flavorText) => flavorText.language.name === 'ko'
        ).flavor_text;
        this.pokeInfo.flavorText = flavorText;

        // 포켓몬 분류
        const genera = data.genera.find((g) => g.language.name === 'ko').genus;
        this.pokeInfo.genera = genera;
        this.loadData = false; // 데이터 로딩 완료
      })
      .catch((error) => {
        this.fetchError = true; // 에러
        console.log(error);
      });

    // 진화 정보
    await fetchEvolution(id)
      .then(({ data }) => {
        //console.log(data);
        this.loadData = false; // 데이터 로딩 완료
      })
      .catch((error) => {
        this.fetchError = true; // 에러
        console.log(error);
      });
  },

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
