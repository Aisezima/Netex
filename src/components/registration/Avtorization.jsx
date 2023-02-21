import { useState } from 'react'
import backround from '../../asssets/images/BG.png'
import Button from '../../UI/Button'
import classes from './Avtorization.module.css'


// import { eye } from 'react-icons-kit/feather/eye'
// import { eyeOff } from 'react-icons-kit/feather/eyeOff'
// import Icon from 'react-icons-kit'
const Avtorization = () => {
      
    const [password, setPassword] = useState('password')
    const [passwordOff, setPasswordOff] = useState()
    const toggleHandle = () =>{
        if(password === 'password'){
            setPasswordOff()
            setPassword('text')
        }else{
            setPasswordOff()
            setPassword('password')
        }
    }
    return(
        <div>
        <h2 className={classes.title}>Авторизация</h2>
        <hr  className={classes.hr} />
        <img className={classes.backroundImg} src={backround} alt="backround" />
        <form>
            <h1> 
                Войти в аккаунт
            </h1>
            <p>
            Ввеите свои данные для авторизации
            </p>

                <div className={classes.container}>
                <label htmlFor="">EMAIL</label>
                 <input type="email" />
        
                   <br />
                </div>

            <div className={classes.container}>
            <label htmlFor="">Пароль</label>
            <input type="password" /> 
            {/* <span onClick={toggleHandle}> <Icon icon={passwordOff} size={25}/> </span> */}
            <br />
            </div>  
            <Button> Войти в Аккаунт</Button>

            <a className={classes.forgetPassword}  href="">Забыл(а) пароль</a>

            <div className={classes.links}>
                <a className={classes.notAccount} href="">Еще нет аккаунта?</a>
                <a className={classes.registration} href="">ЗАРЕГИСТРИРОВАТЬСЯ</a>
            </div>
            
        </form>
        </div>
    )
}


export default Avtorization