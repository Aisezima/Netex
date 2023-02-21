
import classes from './PasswordModal.module.css'
import keys from '../asssets/images/keys.png'
import Button from './Button'
const PasswordModal = () => {
    return(
        <div className={classes.modalCont}>
            <img  src={keys} alt="keys" />
            <h1>Пароль</h1>
            <p>Мы отправим Вам на почту ссылку на <br /> изменение пароля</p>
            <input placeholder='EMAIL' type="email" />
            <Button> Отправить ссылку</Button>
        
        
        </div>
    )
}

export default PasswordModal