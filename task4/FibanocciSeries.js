
  fibanocciSeries=(num)=>{
        let n1=0 ,n2=1
        for( let i=2;i<num;i++){
            console.log(n1);
           nextnum=n1+n2
            n1=n2;
            n2=nextnum;
        }
        
    }

    const num=10;
   
     fibanocciSeries(num);
   
