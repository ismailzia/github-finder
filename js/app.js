//init github class
const github = new GitHub;
//iinit UI class
const ui = new UI;

const userSearch = document.getElementById('searchUser');

//add event listenner
userSearch.addEventListener('keyup',(e)=>{

    const userText = e.target.value;
    if(userText !=='' ){
        github.getUser(userText)
            .then(data => {
            if(data.profile.message === 'Not Found'){
                //Show alert 
                ui.showAlert('User Not Found','alert alert-danger');
                
            }else{
                //show profile
                ui.showProfil(data.profile);
            }
        })
    }else{
        //clear profile
        ui.clearProfile();

    }
})