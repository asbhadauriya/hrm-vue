<template>
  <div>
    <router-view />
    <div class="user-detail my-4" v-if="!$store.getters.getshow_doc">
      <div class="container-fluid">
        <div class="user">
          <div class="row">
            <div class="col-md-12">
              <div class="d-flex justify-content-between align-items-center">
                    <div class="user-head mb-3">
                <h2 class="m-0 mt-5 px-3">Candidate Detail:</h2>
              </div>
              <div class="upload-btn mt-5">
                <router-link to="" @click="uploaddoc" class="text-decoration-none py-2 px-4 ">Upload Document</router-link>
              </div>
                </div>
              <div class="outer-box my-3">
                <div class="inner-box ">
                  <div class="row">
                    <div class="col-md-4 profile">
                      <div class="profile-1 p-3">
                        <div class="user-head pt-3">
                          <h2 class="m-0 mb-3">Basic Information:</h2>
                        </div>

                        <div
                          class="basic-content d-flex align-items-center mb-4 gap-3"
                        >
                          <div class="name">
                            <h5 class="m-0">Name:</h5>
                          </div>
                          <div class="name-info">
                            <p class="m-0">{{ candata.name }}</p>
                          </div>
                        </div>
                        <div
                          class="basic-content d-flex align-items-center mb-4 gap-3"
                        >
                          <div class="name">
                            <h5 class="m-0">Gender:</h5>
                          </div>
                          <div class="name-info">
                            <p class="m-0">{{ candata.gender }}</p>
                          </div>
                        </div>
                        <div
                          class="basic-content d-flex align-items-center mb-4 gap-3"
                        >
                          <div class="name">
                            <h5 class="m-0">Marital status:</h5>
                          </div>
                          <div class="name-info">
                            <p class="m-0">{{ candata.marital_status }}</p>
                          </div>
                        </div>
                        <div
                          class="basic-content d-flex align-items-center mb-4 gap-3"
                        >
                          <div class="name">
                            <h5 class="m-0">Date of birth:</h5>
                          </div>
                          <div class="name-info">
                            <p class="m-0">{{ candata.date_of_birth }}</p>
                          </div>
                        </div>
                        <div
                          class="basic-content d-flex align-items-center mb-4 gap-3"
                        >
                          <div class="name">
                            <h5 class="m-0">Email:</h5>
                          </div>
                          <div class="name-info">
                            <p class="m-0">{{ candata.email }}</p>
                          </div>
                        </div>
                        <div
                          class="basic-content d-flex align-items-center mb-4 gap-3"
                        >
                          <div class="name">
                            <h5 class="m-0">Mobile number:</h5>
                          </div>
                          <div class="name-info">
                            <p class="m-0">{{ candata.mobile_number }}</p>
                          </div>
                        </div>
                        <div
                          class="basic-content d-flex align-items-center mb-4 gap-3"
                        >
                          <div class="name">
                            <h5 class="m-0">Position Applied:</h5>
                          </div>
                          <div
                            class="name-info"
                            v-for="(name, index) in candata.position"
                            :key="index"
                          >
                            <p class="m-0">{{ name }}</p>
                          </div>
                        </div>
                        <div
                          class="basic-content d-flex align-items-center mb-4 gap-3"
                        >
                          <div class="name">
                            <h5 class="m-0">Current Location:</h5>
                          </div>
                          <div class="name-info">
                            <p class="m-0">{{ candata.current_location }}</p>
                          </div>
                        </div>
                        <div
                          class="basic-content d-flex align-items-center mb-4 gap-3"
                        >
                          <div class="name">
                            <h5 class="m-0">Permanent Address:</h5>
                          </div>
                          <div class="name-info">
                            <p class="m-0">{{ candata.permanent_address }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="profile-1 p-3">
                        <div class="user-head pt-3">
                          <h2 class="m-0 mb-3">Basic Quaries:</h2>
                        </div>
                        <div class="row">
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Do you smoke:</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">{{ candata.do_you_smoke }}</p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Do you consume alcohol:</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">
                                  {{ candata.do_you_consume_alcohol }}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">
                                  Do you have a police record :
                                </h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">
                                  {{ candata.do_you_have_a_police_record }}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Differently Abled :</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">
                                  {{ candata.differently_abled }}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">
                                  How did you learn about the opening ?
                                </h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">
                                  {{
                                    candata.how_did_you_learn_about_the_opening
                                  }}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Current position :</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">
                                  {{ candata.current_position }}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">
                                  Have you been Interviewed by us in last six
                                  month ?
                                </h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">
                                  {{
                                    candata.have_you_been_interviewed_by_us_in_last_six_month
                                  }}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">
                                  Do you have been a history of any major
                                  illness ?
                                </h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">
                                  {{
                                    candata.do_you_have_a_history_of_any_major_illness
                                  }}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div class="user-head mt-3" >
                          <h2 class="m-0 mb-3">work Experience:</h2>
                        </div>
                        <div 
                          class="row"
                          v-for="(data, index) in candata.workTrainee"
                          :key="index"
                        >
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">From:</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">{{ data.from }}</p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">To:</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">{{ data.to }}</p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Organisation:</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">{{ data.organisation }}</p>  
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Reason of leaving:</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">{{ data.reason_of_leaving }}</p>  
                              </div>
                            </div>
                          </div>
                          <!-- <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Technologies :</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">{{ data.technologies }}</p>
                              </div>
                            </div>
                          </div> -->
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Current Organisation:</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">
                                  {{ candata.current_organisation }}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Current Designation:</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">
                                  {{ candata.current_designation }}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Total Experience:</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">
                                  {{ candata.total_experience }}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Fixed Salery :</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">{{ candata.fixed_salary }}</p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Bonus | incentive:</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">{{ candata.bonus_incentive }}</p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Total Salery :</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">{{ candata.total_salary }}</p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Expected Salery :</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">{{ candata.expected_salary }}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div
                            class="basic-content d-flex align-items-center mb-3 gap-3"
                          >
                            <div class="name">
                              <h5 class="m-0">Position:</h5>
                            </div>
                            <div
                              class="name-info"
                              v-for="(datas, index) in candata.position"
                              :key="index"
                            >
                              <p class="m-0">{{ datas.position }}</p>
                            </div>
                          </div>
                        </div>
                        <div class="user-head mt-3">
                          <h2 class="m-0 mb-3">Educational Qualification:</h2>
                        </div>
                        <div
                          class="row"
                          v-for="(data, index) in candata.edu"
                          :key="index"
                        >
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Class:</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">{{ data.class }}</p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Degree:</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">{{ data.degree }}</p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Board and University :</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">
                                  {{ data.board_and_university }}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Month and Passing year :</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">
                                  {{ data.month_and_passing_year }}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Marks:</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">
                                  {{ data.percentage_cgpa + "%" }}
                                </p>
                              </div>
                            </div>
                          </div>
                           <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Status:</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">
                                  {{ candata.status }}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
export default {
  
  name: "UserDetailComponent",
  data() {
    return {
      candata: [],
      id:"",
      showdata:false,
    };
  },
    watch: {
    // Note: only simple paths. Expressions are not supported.
    '$route.fullPath': function(data) {
      // data.search('')
       if(data.includes('upload')==true){
         this.$store.commit('setshow_doc',true);
         }else{
           
           this.$store.commit('setshow_doc',false);
       }
  } 
   },
     validations() {
    return {
      add_expensive_data: {
        type: {
          required: helpers.withMessage("Type is required", required),
        },
        amount: {
          required: helpers.withMessage("Amount is required", required),
        },

        expenses_name: {
          required: helpers.withMessage("Expenses name is required", required),
        },
      },
      update_expensive_dat: {
        types: {
          required: helpers.withMessage("Type is required", required),
        },
        amount: {
          required: helpers.withMessage("Amount is required", required),
        },
        expenses_name: {
          required: helpers.withMessage("Expenses name is required", required),
        },
      },
    };
  },
   setup() {
    return {
      v$: useVuelidate(),
    };
  },

  mounted() {
    this.candata = this.$store.getters.get_candidate;
    this.id = this.candata.id;
    if(this.$route.fullPath.includes('profile')){
        this.$store.commit('setshowdata',this.showdata = true);
    }
  },
  methods: {
       uploaddoc(){
           this.$router.push('/candidatelist/profile/'+this.id+'/upload');
           this.$store.commit('setshow_doc',true);   
       }
  },
};
</script>

<style scoped>
/*.user{
    min-height:100vh;
    display:flex;
    align-items: center;
    justify-content: center;
}*/
.user-head h2 {
  font-size: var(--fs-4);
  font-weight: 600;
  color: var(--navy-blue);
  text-decoration: 2px double underline;
  text-decoration-color: var(--navy-blue);
}

.outer-box {
  background-color: var(--white);
  border-radius: 5px;
  transition: all 1s ease;
 box-shadow:rgb(179 169 169 / 35%) 0px 5px 15px;
  transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.inner-box {
  background-color: var(--white);
}

.name h5 {
  color: var;
  color: var(--navy-blue);
  font-size: 14px;
  font-weight: 700;
}

.name-info p {
  color: var(--text-box);
  font-size: var(--fs-3);
  font-weight: 600;
}

.profile {
  border-right: 1px solid var(--text-box);
}
.upload-btn a{
    background-color: var(--navy-blue);
    color:var(--white);
    font-weight: 600;
    font-size: var(--fs-4);
    border-radius: 5px;
}
</style>
