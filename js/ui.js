class UI{
    constructor(){
        this.Profile = document.getElementById('profile'); 
    }

    showProfil(user) {
        this.Profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-3" src="${user.avatar_url}"/>
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-3">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos : ${user.public_repos} </span>
                        <span class="badge badge badge-secondary">Public Gists : ${user.public_gists} </span>
                        <span class="badge badge-success">Followers : ${user.followers} </span>
                        <span class="badge badge-info">Following : ${user.following} </span>
                        
                        <br><br>

                        <ul class="list-group">
                            <li class="list-group-item">Company : ${user.company}</li>
                            <li class="list-group-item">Website/Blog : ${user.blog}</li>
                            <li class="list-group-item">Location : ${user.location}</li>
                            <li class="list-group-item">reated since : ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3"> Latest Repos </h3>
            <div id="repos"></div>
            `; 
    }

    //show alert message 
    showAlert(message,className){

        this.clearAlert();  
        //create div
        const div = document.createElement('div');
        //add class
        div.className = className;
        //add text
        div.appendChild(document.createTextNode(message));
        //container class
        const container = document.querySelector('.searchContainer');
        //search class
        const search = document.querySelector('.search');
        //insert alert
        container.insertBefore(div,search);

        //timeout after 3 sec
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    //clear alert 
    clearAlert(){
        const alert = document.querySelector('.alert');
        if(alert){
            alert.remove();
        }
    }

    //clear a profile
    clearProfile(){
        this.Profile.innerHTML = '';
    }
}