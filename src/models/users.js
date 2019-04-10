
export default {
  state: 'users',
  subscriptions: {
    setup({ dispatch, history }) {
    },
  },
  reducers: {
    update(state, { payload }) {
      return `${payload}_users`;
    },
  },
  effects: {
    *fetch({ type, payload }, { put, call, select }) {
    },
  },
}
