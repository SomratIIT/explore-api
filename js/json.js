const user= {id:1 ,name:'R H Somrat',job:'Developer'}

// console.log(user);
const newthing = JSON.stringify(user);
//  console.log(newthing);


 /* 
 { id: 1, name: 'R H Somrat', job: 'Developer' } JS
{"id":1,"name":"R H Somrat","job":"Developer"} JSON
*/

const shop ={
    owner:'Alia',
    address: {
        street:'Kochukhet',
        city: 'ranbir',
        country: 'BD'
    },
    products : ['laptop','Smart Watch','Tab','Monitor'],
    revenue : 45000,
    isOpen : true,
    isNew : false
}
 //console.log(shop);
 const shopJSON = JSON.stringify(shop);
 console.log(shopJSON);
 const tryJSON = JSON.parse(shopJSON);
 console.log(typeof(tryJSON));