
export async function getTrendingBooksData(bookId){
    let finalFetchedBooks;
    
    let response =await fetch(process.env.FIREBASE_URL);
    let booksData = await response.json();
    let fetchedBooks = booksData.filter((ele)=>ele.id == bookId)
    if(fetchedBooks[0]){
        finalFetchedBooks = fetchedBooks[0]
    }
    else{
        return {}
    }
    return finalFetchedBooks;
   
}

export async function getBookReview(bookId){
    let finalFetchedBookReview = [];
    let response =await fetch(`/api/review/${bookId}`);
    let booksReviews = await response.json();
   
    let fetchedBookReview = booksReviews.review.filter((ele)=>ele.id == bookId)
    if(fetchedBookReview.length > 0 ){
        finalFetchedBookReview = fetchedBookReview;
    }
    else{
        return finalFetchedBookReview;
    }
    return finalFetchedBookReview;
   
}
