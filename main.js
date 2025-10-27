const TITTLE = document.querySelector('.user-name')
const ACCOUNT = localStorage.getItem('account')
const OBJECT_ACCOUNT = JSON.parse(ACCOUNT) 
if (!ACCOUNT) window.location.replace('index.html')

TITTLE.textContent = OBJECT_ACCOUNT.firstName
document.writeln(ACCOUNT)
