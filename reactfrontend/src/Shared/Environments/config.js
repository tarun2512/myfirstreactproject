export const API_ENDPOINTS = {
    login: "login",
    logoutUser: "logout",
  
    // User management
    roleList: "user/roles",
    userList: "user/fetch",
    createUser: "user/create",
    updateUser: "user/update",
    deleteUser: "user/delete",
  
    // biases Endpoint
    biaseList: "bias/fetch",
    exportExcel: "bias/export",
    biasDetailsFetch: "bias/bias_details/fetch",
    biasDetailsCreate: "bias/bias_details/create",
    relatedBiasData: "metadata/related_bias",
    biasSidebar: 'metadata/biases_sidebar/fetch',
  
    // project
    listProject: "project/fetch",
    createProject: "project/create",
    deleteProject: "project/delete",
    archieveProject: "project/archive",
    projectFetch: "project/details/fetch",
    updateProject: "project/update",
    // meta data
    // targetAudienceList: 'data/target_audience',
    targetAudienceList: "metadata/targeted_audience/speciality",
    boList: "metadata/behavioral_object_category",
    boListGroup: "metadata/behavioral_object_category/group",
    projectTypeList: "metadata/project_type",
    projectDomainList: "metadata/project_domain",
    // theraphyArea:'metadata/therapy_area',
    theraphyArea: "metadata/therapy_area/disease",
    researchMethodology: "metadata/research_methodology",
    projectCode: "project/project_code/fetch",
    projectCodes: "metadata/project_codes",
    countryList: "metadata/country",
    teamMemberDetails: "project/team_member_details/fetch",
    projectStep: "metadata/project_steps",
    projectStepFilter: 'metadata/project_steps/filter',
    primaryContact: 'metadata/primary_contact',
  
    clientList: "metadata/clients",
    //Candidate Bias
    projectDetails: "project/meta_data/fetch",
    projectMetaData: "project/basic_details/fetch",
    otherBiasList: "project/bias/other/fetch",
    candBiasDD: "project/candidate_bias/dropdowns/fetch",
    candBiasUnselected: "project/candidate_bias_unselected/fetch",
  
    //comments
    commentsList: "project/comments/fetch",
    createComments: "project/comments/create",
    archiveComment: "project/comments/archive",
    projectCommentReply: 'project/comments/view_reply',
    //Discussion Builder
    listTargetAudience: "project/discussion_guide/target_audience/fetch",
    targetAudienceData: "project/discussion_guide/fetch",
    targetAudienceDataSave: "project/discussion_guide/create",
    fetchBiasData: "project/discussion_guide/bias/fetch",
  
    //Admin pages
    targetAudienceCreate: "admin/target_audience/create",
    targetAudienceUpdate: "admin/target_audience/update",
    targetAudienceDelete: "admin/target_audience/delete",
    specialtyCreate: "admin/speciality/create",
    specialtyUpdate: "admin/speciality/update",
    specialtyDelete: "admin/speciality/delete",
    therapyAreaCreate: "admin/therapy_area/create",
    therapyAreaUpdate: "admin/therapy_area/update",
    therapyAreaDelete: "admin/therapy_area/delete",
    diseaseCreate: "admin/disease/create",
    diseaseUpdate: "admin/disease/update",
    diseaseDelete: "admin/disease/delete",
  
  
    // admin /behavioral objective group 
    behavioralOBJGroupCreate: 'admin/beha_obj_cate_group/create',
    behavioralOBJGroupUpdate: 'admin/beha_obj_cate_group/update',
    behavioralOBJGroupDelete: 'admin/beha_obj_cate_group/delete',
    behavioralOBJCreate: 'admin/beha_obj_cate/create',
    behavioralOBJUpdate: 'admin/beha_obj_cate/update',
    behavioralOBJdelete: 'admin/beha_obj_cate/delete',
  
  
    fetchAdminData: "admin/project_attributes/fetch",
  };
  
  export const API_ENVIRONMENT = {
    "company-info": "local",
    // 'userLogin': 'dev',
    // "biaseList": "local",
  };
  