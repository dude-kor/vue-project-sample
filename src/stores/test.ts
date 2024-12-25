// @ts-check
import axios from 'axios'
import { defineStore, acceptHMRUpdate } from 'pinia'

/**
 * Simulate a login
 */
function apiTest() {
  const response: any = axios.get('http://localhost:8080/controller/test')
  return response.data
  //   ({
  //     mehtod: 'get',
  //     url: 'http://localhost:8080/controller/test',
  //   }).then(function (response) {
  //     const { data } = response;
  //     result = data;
  //   })
  //   return result;
}

export const useTestStore = defineStore({
  id: 'test',

  state: () => ({
    result: ''
  }),

  actions: {
    async test() {
      const response = await apiTest()
      const { data }: any = response
      this.$patch({
        result: data
      })
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTestStore, import.meta.hot))
}
