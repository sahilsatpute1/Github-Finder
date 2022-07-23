//Init github class
const github = new Github;

//init ui
const ui = new UI;


//Search input
const searchUser = document.getElementById('searchUser')

//Search input event listener
searchUser.addEventListener('keyup', (e) => {
    //Get the text
    const userText = e.target.value;
    
    if(userText !== '') {
        // console.log(userText);
        //make http call
        github.getUser(userText).then(data => {
            if(data.profile.message === 'Not Found') {
                //Show Alert
                ui.showAlert('User not Found', 'alert alert-danger')
            } else {
                //Show Profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    } else{
        //Clear profile as we have no input of user name 
        ui.clearProfile();    
    }
})