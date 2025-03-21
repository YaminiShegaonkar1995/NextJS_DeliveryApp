const {username, password} = process.env;
export const connectionStr = "mongodb+srv://"+username+":"+password+"@cluster0.fkw6k.mongodb.net/restroDB?retryWrites=true&w=majority&appName=Cluster0";
