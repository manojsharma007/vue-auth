const empolyees = [
    {
        "id": 1,
        "first_name": "Sebastian",
        "last_name": "Eschweiler",
        "email": "sebastian@codingthesmartway.com"
      },
      {
        "id": 2,
        "first_name": "Steve",
        "last_name": "Palmer",
        "email": "steve@codingthesmartway.com"
      },
      {
        "id": 3,
        "first_name": "Ann",
        "last_name": "Smith",
        "email": "ann@codingthesmartway.com"
      },
      {
        "id": 4,
        "first_name": "john",
        "last_name": "johnlasth",
        "email": "john@codingthesmartway.com",
        
      }
    ];

module.exports = {
    getallemplyees,
    getempolyeesbyId
};


async function getallemplyees(req,res) {
  let result=[];
  for (let i = 0; i < empolyees.length; i++) {
    result.push({
       "id":empolyees[i].id,
        "first_name":empolyees[i].first_name,
        "last_name":empolyees[i].last_name,
        "email":empolyees[i].email
      })
  } 
     return result;         

    };
async function getempolyeesbyId(req,res) { 
    let result=[];
      if(req!=0) {
        const emp = empolyees.find(u => u.id == req);     
         
          result.push({            
             "id":emp.id,
              "first_name":emp.first_name,
              "last_name":emp.last_name,
              "email":emp.email
            })
       
        return result;    
      }
      else
      {
        for (let i = 0; i < empolyees.length; i++) {
          result.push({
             "id":empolyees[i].id,
              "first_name":empolyees[i].first_name,
              "last_name":empolyees[i].last_name,
              "email":empolyees[i].email
            })
        } 
       
       return  result;  
      }
    
             
 
     };