class Katze {
  constructor(username) {
    this.username = username
    this.clean()
  }
  clean() {
    this.username.value = ''
  }

  take_username() {
    let username_typed
    username_typed = this.username.value
    localStorage.user = username_typed
  }

  hide_cardbox() {
    cardtakeoff.setAttribute('id', 'card-hide')
  }

  show_chatbox() {
    chatputin.setAttribute('id', 'chatspace-show')
  }

  take_Message_chat() {
    let get_messageTyped
    get_messageTyped = messageTyped.value
  }

  add_to_chat() {
    // boxMess.createElement(nametagAdd)
    // nametagAdd.createTextNode(show_user)
    // boxMess.appendChild(nametagAdd)
  }
}

const cardtakeoff = document.querySelector('[card-show]')
const chatputin = document.querySelector('[chat-put]')

const Button_user = document.querySelector('[click-go-one]')
const Button_send = document.querySelector('[click-go-two]')

const username = document.getElementById('username')
const messageTyped = document.getElementById('type-message')

const boxMess = document.querySelector('[box-message]')
const nametagAdd = document.querySelector('[name-one]')
const messageAdd = document.getElementsByClassName('message')
const add_to_chat = document.getElementsByClassName('chat')

const katze = new Katze(username)

Button_user.addEventListener('click', () => {
  katze.take_username()
  katze.hide_cardbox()
  katze.show_chatbox()
})

Button_send.addEventListener('click', () => {
  katze.take_Message_chat()
  katze.add_to_chat()
})
