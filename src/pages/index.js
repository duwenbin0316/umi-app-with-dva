import Link from 'umi/link'
import { connect } from 'dva'
import { Button } from 'antd'
import styles from './index.css'

const indexPage = function(props) {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            Getting Started
          </a>
        </li>
        <li>
          <Link to="/users">users</Link>
        </li>
      </ul>
      <div>{JSON.stringify(props.users)}</div>
      <Button type="primary" onClick={() => props.update('fsfs')}>update</Button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { ...state }
}

const mapDispatchToProps = (dispatch) => {
  return {
    update(payload) {
      dispatch({
        type: 'users/update',
        payload
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(indexPage)
