const { connectDataBase,insertDocument,getAllDocuments } = require("@/helpers/db-utils");
import { getToken } from 'next-auth/jwt';

async function handler(req,res){

    let client;
    let bookReviewData;
    const secret = process.env.NEXT_AUTH_TOKEN;
    const token = await getToken({ req, secret });
    
    if (!token) {
        return res.status(401).json({ message: 'Not authenticated' });
      }
    if(req.method === 'PUT'){
     
           
        const bookId = req.query.bookIdbasedReview;
        const userName = 'Anurag';
        const bookReview = req.body.bookReview;
        const requestObject = {
            date : new Date().toISOString(),
            id : bookId,
            name : userName,
            review : bookReview
        }

        try{
            client = await connectDataBase();
            if(!client){
                res.status(500).json({message:"client is undefined"})
                client.close();
            }
        
        }catch(error){
            
            res.status(500).json({message:'exception while connecting with the Database',error:error});
            client.close();
            return
        }

        try{
          //Insertion
            await insertDocument(client,"bookReview",requestObject);
           
        }catch(error){
            res.status(500).json({message:'Insert into DB failed !',error:error});
            client.close();
            return;
        }
        res.status(201).json({message : 'Success !', review : requestObject})
        client.close();
    }
    if(req.method === 'GET'){        
      
        try{
            client = await connectDataBase();
         
        }catch(error){
          
            res.status(500).json({message:'error occurred while connecting with your DB',error:error});
            client.close();
            return
        }

        try{
          //Insertion
          bookReviewData = await getAllDocuments(client,"bookReview",{_id:-1});
           
        }catch(error){
            res.status(500).json({message:'Fetch from DB failed !',error:error});
            client.close();
            return;
        }
        res.status(201).json({message : 'Success !', review : bookReviewData})
        client.close();
    }
}

export default handler;