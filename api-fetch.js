// Async/await format
         const response = await fetch('url',{
          methods:'GET',
        });
        if( response.status === 200 ){
           const data = await response.json();
         }
        

        // Promise / then format
        fetch('url,{
          methods:'GET',
        })
        .then( response =>{
          return response.json()
        })
        .then( data => {
          this.localbody = data;
        });
