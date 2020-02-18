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