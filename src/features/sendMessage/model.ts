import avatar from '../../../public/images/svg/avatar.svg'
import postal_envelope from '../../../public/images/svg/postal_envelope.svg'


export const defaultInputProps = {
    flexDirection: 'column' as 'column' | 'row',
    width: 260,
    height: 50,
    required: true,
}

export const nameInputProps = {
    type: 'text',
    labelRus: 'Ваше имя',
    placeholder: 'Алексей',
    imageSrc: avatar,
    label: 'Name',
    pattern: /^[а-яА-ЯёЁa-zA-Z]+$/i,
}


export const emailInputProps = {
    type: 'email',
    labelRus: 'Ваша электронная почта',
    placeholder: 'Введите',
    imageSrc: postal_envelope,
    label: 'Email',
}

export const textareaInputProps = {
    type: 'textarea',
    labelRus: 'Ваше сообщение',
    placeholder: 'Сообщение',
    imageSrc: null,
    label: 'Message',
    width: 548,
    height: 200,
}


export const sendButtonProps = {
    text: 'Отправить',
    width: 200,
    colorScheme: 'violet' as 'yellow' | 'violet' | 'yellowBlack',
    onClick: null,
    type: 'submit' as 'button' | 'reset' | 'submit'

}

export const closeButtonProps = {
    text: 'Закрыть окно',
    width: 161,
    colorScheme: 'yellow' as 'yellow' | 'violet' | 'yellowBlack',
    type: 'reset' as 'button' | 'reset' | 'submit'
}

 