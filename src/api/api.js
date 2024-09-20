import axios from 'axios';

const config = {
  url: 'https://pokeapi.co/api/v2/pokemon',
};

// 포켓몬 리스트 요청하기
export const fetchPokeList = (offset, limit) =>
  // console.log(`${config.url}?offset=${offset}&limit=${limit}`);
  axios.get(`${config.url}?offset=${offset}&limit=${limit}`);

// 포켓몬 official-artwork 이미지 요청하기
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png
export const fetchOfficialArtworkImage = (id) => {};

// 포켓몬 showdown 이미지 요청하기
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif
export const fetchShowdownImage = (id) => {};

// 포켓몬 상세 정보 요청하기
export const fetchPokeInfo = (id) => axios.get(`${config.url}/${id}`);
