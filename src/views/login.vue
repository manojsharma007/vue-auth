<template>
    <div class="jumbotron">
        <div class="container">
            <div class="row">
                <div class="col-sm-8 offset-sm-2">
                    <div>
                        <h2>Login</h2>
                        <form @submit.prevent="login">
                            <h3>{{errorMsg}}</h3>
                            <div class="form-group">
                                <label for="username">User Name</label>
                                <input type="text" v-model="user.username" id="username" name="username" class="form-control"  />
                                <div v-if="submitted && !$v.user.username.required" class="invalid-feedback">User Name is required</div>
                            </div>
                            <div class="form-group">
                                <label for="Password">Password</label>
                                <input type="text" v-model="user.password" id="password" name="password" class="form-control"/>
                                <div v-if="submitted && !$v.user.password.required" class="invalid-feedback">Password is required</div>
                            </div>
                          
                        
                            <div class="form-group">
                                <button class="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { required } from "vuelidate/lib/validators";
import axios from "axios";
    export default {
        name: "login",
        data() {
            return {
                user: {
                    username: "",
                    password: "",
               
                },
                submitted: false,
                errorMsg:""
            };
        },
        validations: {
            user: {
                username: { required },
                password: { required },
            
            }
        },
        methods: {
            login() {
                this.submitted = true;

                // stop here if form is invalid
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }               
                    let postData={"username":this.user.username,"password":this.user.password};
                    axios.post(process.env.VUE_APP_SERVERURL + '/login',postData)
                    .then((response) => {  
                        if(response.data.id){
                           
                           window.location.href = '/#/secure';
                           localStorage.setItem('Token', response.data.token)
                           this.errorMsg="";
                        }
                        else
                        {
                         this.errorMsg=response.data.msg;
                        }                      
                    
                 });          
                       
                    
               
            }
        }
    };
</script>
<style scoped>
    .jumbotron {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
    .form-group{
       margin: 15px 7px 13px 11px
    }
</style>