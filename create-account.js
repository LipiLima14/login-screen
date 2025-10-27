const FORM = document.querySelector('#form')
const FIRST_NAME = document.querySelector('#first-name')
const LAST_NAME = document.querySelector('#last-name')
const EMAIL = document.querySelector('#email')
const PASSWORD = document.querySelector('#password')
const GENDER_MAS = document.querySelector('.gender-box #mas') 
const GENDER_FEM = document.querySelector('.gender-box #fem') 

let account = {}
      
FORM.addEventListener('submit', () => {
    account.firstName = FIRST_NAME.value
    account.lastName = LAST_NAME.value
    account.email = EMAIL.value
    account.password = PASSWORD.value
    if (GENDER_MAS.checked) account.gender = 'maculino'
    if (GENDER_FEM.checked) account.gender = 'feminino'

    localStorage.setItem('account', JSON.stringify(account))

    FIRST_NAME.value = ''
    LAST_NAME.value = ''
    EMAIL.value = ''
    PASSWORD.value = ''
    GENDER_MAS.checked = false
    GENDER_FEM.checked = false
})

check_account()
