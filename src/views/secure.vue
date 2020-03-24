<template>
    <div id="secure">
        <h1>Secure Area</h1>
     Welcome : {{name}}
            
      
  
     <div class="jumbotron">
     <select  v-model="selected" id="deptList"  @change="onChange(selected)" >
       <option value=0>Select All</option>
        <option v-for="item in empolyeesNameDropdown"  :key="item.id" 
            :value="item.id">
            
            {{item.first_name}}
        </option>    
    
  
    </select>
    <table>
  <tr>
    <th>FirstName</th>
    <th>LasrName</th>
    <th>Email</th>
  </tr>
  <tr v-for="item in empolyees"  :key="item.id">
      
    <td>{{item.first_name}}</td>
    <td>{{item.last_name}}</td>
    <td>{{item.email}}</td>
  </tr>
 
 
</table>  
    </div>
    </div>
</template>

<script>
 import axios from "axios";
    export default {
        name: 'Secure',
        data() {
            return {
                token:"",
                name:"",
                empolyees:[],
                selected:"",
                empolyeesNameDropdown:''
            };
        },
        mounted(){
            
          this.token=localStorage.getItem('Token');
          if(this.token){
            const instance = axios.create({
            baseURL: process.env.VUE_APP_SERVERURL+'/',
            headers: {'Authorization': 'Bearer '+this.token}
            });
            instance.get('protected')
            .then(response => {
                //console.log(response);
                this.name= response.data.data.firstname;
            })

                    axios.get(process.env.VUE_APP_SERVERURL + '/getallempolyees')
                    .then((data) => { 
                        this.empolyees=data.data;
                      this.empolyeesNameDropdown=data.data;                  
                    
                 });  

          }
          else
          {
               window.location.href = '/#/login ';
          }
          

        },
        methods:{
            onChange(id) {
                axios.get(process.env.VUE_APP_SERVERURL + '/getempolyeesbyId/'+id)
                    .then((response) => {                    
                      this.empolyees=[];
                      this.empolyees=response.data; 
                       });
                
              }
        }

    }
</script>

<style scoped>
    #secure {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
    table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>