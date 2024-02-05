import Button from "./Button"
import Input from "./Input"

const Tampilan=()=>{
    return(
        <>
        <div id="login-box">
            <div class="left">
                <h1>Sign up</h1>
        
                <Input place={'Username'       } type={'text'    }/>
                <Input place={'E-mail'         } type={'text'    }/>
                <Input place={'Password'       } type={'password'}/>
                <Input place={'Retype Password'} type={'password'}/>

                <input type={'submit'} value={'Sign me up'} />
                {/* <input type="submit" name="signup_submit" value="Sign me up" /> */}
            </div>
        
            <div class="right">
                <span class="loginwith">Sign in with<br />social network</span>
        
                <Button Nama={'Log in with facebook'} kelas={'social-signin facebook'}/>
                <Button Nama={'Log in with Twitter' } kelas={'social-signin twitter' }/>
                <Button Nama={'Log in with Google+' } kelas={'social-signin google'  }/>       
                {/* <button class="social-signin facebook">Log in with facebook</button>
                <button class="social-signin twitter">Log in with Twitter</button>
                <button class="social-signin google">Log in with Google+</button> */}
            </div>
        <div class="or">OR</div>
        </div>
        </>
    )
}

export default Tampilan