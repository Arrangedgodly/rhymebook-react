export class Api {
  constructor() {
    this.url = 'https://api.datamuse.com/words';
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getRhyme(word, engine, topic, max) {
    return fetch(`${this.url}?rel_rhy=${word}&${engine}=${topic}&max=${max}`)
      .then(this._checkResponse)
  }

  getSoundAlike(word, engine, topic, max) {
    return fetch(`${this.url}?rel_nry=${word}&${engine}=${topic}&max=${max}`)
      .then(this._checkResponse)
  }

  getRelatedAdjectives(word, engine, topic, max) {
    return fetch(`${this.url}?rel_jja=${word}&${engine}=${topic}&max=${max}`)
      .then(this._checkResponse)
  }

  getRelatedNouns(word, engine, topic, max) {
    return fetch(`${this.url}?rel_jjb=${word}&${engine}=${topic}&max=${max}`)
      .then(this._checkResponse)
  }

  getRelatedWords(word, engine, topic, max) {
    return fetch(`${this.url}?rel_trg=${word}&${engine}=${topic}&max=${max}`)
      .then(this._checkResponse)
  }

  getSynonyms(word, engine, topic, max) {
    return fetch(`${this.url}?rel_syn=${word}&${engine}=${topic}&max=${max}`)
      .then(this._checkResponse)
  }

  getAntonyms(word, engine, topic, max) {
    return fetch(`${this.url}?rel_ant=${word}&${engine}=${topic}&max=${max}`)
      .then(this._checkResponse)
  }

  getFrequentFollowers(word, engine, topic, max) {
    return fetch(`${this.url}?rel_bga=${word}&${engine}=${topic}&max=${max}`)
      .then(this._checkResponse)
  }
}