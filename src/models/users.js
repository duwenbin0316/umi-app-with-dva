import axios from 'axios'

export default {
  state: {
    user: '11'
  },
  subscriptions: {
    setup({ dispatch, history }) {
    },
  },
  reducers: {
    update(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    },
  },
  effects: {
    *fetch({ type, payload }, { put, call, select }) {
      const userInfo = yield axios.post('/user', payload)

      yield put({
        type: 'update',
        payload: userInfo.data
      })
    },
  },
}
