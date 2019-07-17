class GitHub{
    constructor(){
        this.Id_Client = 'fdc933a157593abe8717';
        this.Secret_Clien = '30bfc878819c644cb8ec3e3cf72661afe5bec7fb';
    }

    async getUser(user){
        
        const profileResponse = await fetch(`https://api.github.com/users/${user}?Id_Client=${this.Id_Client}&Secret_Client=${this.Secret_Clien}`);

        const profile = await profileResponse.json();
        return {
            profile
        }
    }
}