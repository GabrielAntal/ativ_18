const axios = require('axios').default;


(async ()=>{
    await  axios.post('http://localhost:3000/books', {
        ID: 3,
        name: 'My Boook',
        author: 'Me and only me'
    })
        .then((res) => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err.response.data);
        });
})()


(async ()=>{
    await axios.get('http://localhost:3000/books')
        .then((response) => {
            response.log(response.data);
        })
          await  axios.get('http://localhost:3000/books/'+res[0].params.ID)
            .then((res)=>{
                response.log(res.data);
            })
            
            await    axios.get('http://localhost:3000/books/'+res[1].data.ID)
                .then((res)=>{
                    console.log(res.data);
                })
        
})()


(async ()=>{
        await axios.post('http://localhost:3000/books',{
            ID: 17,
            name: 'Silmarillion',
            author: 'J.R.R Tolkien'
        })  .then((response) => {
            console.log(response.data);
        })
        .catch(err => {
            console.log(err.response.data);
        });
})()





(async ()=>{
    await axios.get('http://localhost:3000/log')
    .then((response)=>{
        console.log(response.data);
    })
})()

