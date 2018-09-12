import { connect } from "react-redux";
import { actions, selectors, conponents } from "app-core";

const { login } = actions
const { getUser } = selectors
const { Component } = conponents

const s2p = state => {
  const user = getUser(state)
  return { user }
}

const d2p = dispatch => ({
  handleLogin: (email, password) =>
    dispatch(login(email, password)),
})

const Container = connect(s2p, d2p)(Component);

export default Container;
