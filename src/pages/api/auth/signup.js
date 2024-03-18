import { hashPassword } from "@/helpers/auth";
import { connectDataBase} from "@/helpers/db-utils";
import { MongoClient } from 'mongodb';

async function handler(req, res) {
    
    let client;
  
    if (req.method == "POST") {
       
        
        const data = req.body
        const { email, password } = data;
        if (!email || !email.includes("@") || !password || password.trim().length < 7) {
            res.status(422).json({ messaage: 'input invalid invalid email or password' })
            return;
        }
        try {
            client = await MongoClient.connect(process.env.MONGO_DB_URL)
                console.log(client,"this is form api")
                if(client){
                    res.status(200).json({msg:"Client exists",cl:client})
                }else{
                    res.status(500).json({message:"client doesnt exists",cli:client})
                }
    return client;
          
        } catch (error) {
           
            res.status(500).json({ message: 'error occurred while connecting with db', error: client });

            return
        }

        try {
            const db = client.db("trendingBookLibrary");
            const hashedPassword = await hashPassword(password);
            await db.collection("users").insertOne({
                email: email,
                password: hashedPassword
            })

            client.close();
        } catch (error) {
            res.status(500).json({ message: 'Insert into DB failed !', error: error });
            client.close();
            return;
        }

        res.status(201).json({ message: "You are successfully Signed in !" })
    } else {
        res.status(500).json({ message: 'Wrong request type !' });
    }
}

export default handler;