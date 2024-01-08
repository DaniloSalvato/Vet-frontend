import imgBackGround from "../../assets/background.jpg";
import styles from "./styles.module.css";
import { FaUser, FaLock } from "react-icons/fa";

function Login() {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.backgroundLeft}>
          <img src={imgBackGround} alt="" />
        </div>
        <div className={styles.backgroundRight}>
          <div className={styles.container}>
            <form method="post" action="">
              <h1>Login</h1>
              <div className={styles.inputBox}>
                <input type="text" placeholder="Username" required />
                <FaUser className={styles.icon} />
              </div>

              <div className={styles.inputBox}>
                <input type="password" placeholder="Password" required />
                <FaLock className={styles.icon} />
              </div>

              <div className={styles.rememberForgotMain}>
                <div className={styles.remember}>
                  <label>
                    <input type="checkbox" />
                    Remember me
                  </label>
                </div>
                <div className={styles.forgot}>
                  <a href="#">Forgot password?</a>
                </div>
              </div>

              <button type="submit"> Login</button>

              <div className={styles.registerLink}>
                <p>
                  Don't have an account? <a href="#">Register</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
