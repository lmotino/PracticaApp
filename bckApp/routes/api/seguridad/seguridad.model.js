var userModel = {};

var userCollection = [];
var userTemplate = {
    userEmail:"",
    userPswd:"",
    userCompleteName:"",
    userID:'',
    userDateCreated:null
}

userModel.getAll = ()=>{
    return userCollection;
}

userModel.getById = (id)=>{
    var filteredUsers = userCollection.filter(
        (o, i)=>{
            return o.userID === id;
        }
    );
    if(filteredUsers.length){
        return filteredUsers[0];
    }else{
        return null
    }
}

userCollection.push(
    Object.assign(
        {}, 
        userTemplate,
        {
            userEmail:"lmotinoaguas@gmail.com",
            userPswd:"noti1234",
            userCompleteName:"Luis",
            userID: 1,
            userDateCreated:new Date().getTime()
        }
    )
);

userModel.addNew = ( {useremail, userpswd, usernames} )=>{
    var newUser = Object.assign(
        {}, 
        userTemplate,
        {
            userEmail: useremail,
            userPswd:userpswd,
            userCompleteName:usernames,
            userDateCreated:new Date().getTime()
        }
    );
    newUser.userID = userCollection.length + 1;

    userCollection.push(newUser);
    return newUser;
};

userModel.update =(id,{ userpswd, usernames})=>{
    var updatingUser = userCollection.filter(
        (o, i)=>{
            return o.userID === id;
        }
    );
    if(updatingUser && updatingUser.length>0){
        updatingUser = updatingUser[0];
    } else {
        return null;
    }
    var updateUser = {};
    var newUpdatedCollection = userCollection.map(
        (o, i)=>{
            if(o.userID === id){
                updateUser = Object.assign({},
                    o,
                    { userPswd:userpswd, userCompleteName:usernames}
                );
                return updateUser;                
            }else{
                return o;
            }
        }
    )
    userCollection = newUpdatedCollection;
    return updateUser;
};

userCollection.push(
    Object.assign(
        {}, 
        userTemplate,
        {
            userEmail:"lchino17@gmail.com",
            userPswd:"12345",
            userCompleteName:"Chino",
            userID: 2,
            userDateCreated:new Date().getTime()
        }
    )
);


module.exports = userModel;