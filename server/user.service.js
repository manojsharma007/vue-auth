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
     
     return empolyees;         

    };
async function getempolyeesbyId(req,res) {
  //console.log("dfdf"+req);
    const emp = empolyees.find(u => u.id == req);
    console.log(emp)
    
      if (emp) {
        return emp; 
      
      }
      else
      {
          return empolyees;
      }
          
             
 
     };