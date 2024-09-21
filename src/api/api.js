import axios from 'axios';

const config = {
  pokeInfoUrl: 'https://pokeapi.co/api/v2/pokemon',
  pokeInfoNameFlavorTextUrl: 'https://pokeapi.co/api/v2/pokemon-species',
  officialArtworkImageUrl:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork',
  showdownImageUrl:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown',
};

// 포켓몬 리스트 요청하기
export const fetchPokeList = (offset, limit) =>
  // console.log(`${config.pokeInfoUrl}?offset=${offset}&limit=${limit}`);
  axios.get(`${config.pokeInfoUrl}?offset=${offset}&limit=${limit}`);

// 포켓몬 official-artwork 이미지 요청하기
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png
export const fetchOfficialArtworkImage = (id) =>
  `${config.officialArtworkImageUrl}/${id}.png`;

// 포켓몬 showdown 이미지 요청하기
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif
export const fetchShowdownImage = (id) =>
  `${config.showdownImageUrl}/${id}.gif`;

// 포켓몬 상세 정보 요청하기
export const fetchPokeInfo1 = (id) => axios.get(`${config.pokeInfoUrl}/${id}`);
export const fetchPokeInfo2 = (id) =>
  axios.get(`${config.pokeInfoNameFlavorTextUrl}/${id}`);
