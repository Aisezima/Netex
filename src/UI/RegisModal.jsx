import classes from './RegisModal.module.css'
import Button from '../UI/Button'
const RegisModal = () => {
    return(
        <div>
            <div className={classes.backdrop}/>       
            <h1>Регистрация</h1>
            <p>Ввеите свои данные для регистрации</p>
            
            <div className={classes.regisCont}>
            <label htmlFor="">Имя</label>
            <input type="text" /> <br />
            </div>
           
            <div className={classes.regisCont}>
            <label htmlFor="">Фамилия</label>
            <input type="text" /> <br />
            </div>
        
            <div className={classes.regisCont}>
            <label htmlFor="">Email</label>
            <input type="email" /><br />
            </div>
        
            <div className={classes.regisCont}>
            <label htmlFor="">Пароль</label>
            <input type="password" /><br />
            </div>
        
            <div className={classes.regisCont}>
            <label htmlFor="">Повторите пароль</label>
            <input type="password" />
            </div>
          
     
           <p>Нажимая на кнопку “Регистрация” я принимаю условия
             {/* Пользовательского соглашения */}
             </p>
             <Button> Зарегистрироваться</Button>

        </div>

    )
}

export default RegisModal
