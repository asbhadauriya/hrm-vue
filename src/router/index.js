import { createRouter, createWebHistory } from 'vue-router'


const routes = [

    // Auth pages 
    {
        path: '/login',
        name: 'LoginView',
        component: () =>
            import ('../views/auth/LoginView.vue')
    },
    {
        path: '/signup',
        name: 'SignupView',
        component: () =>
            import ('../views/auth/SignupView.vue')
    },
    {
        path: '/forgot',
        name: 'ForgotPasswordView',
        component: () =>
            import ('../views/auth/ForgotPasswordView.vue')
    },
    {
        path: '/reset',
        name: 'ResetPassword',
        component: () =>
            import ('../views/auth/ResetPasswordView.vue')
    },

    {
        path: '/verify',
        name: 'VerificationView',
        component: () =>
            import ('../views/auth/VerificationView.vue')
    },

    // Dashboard Pages 
    {
        path: '/',
        name: 'HomeView',
        meta: { auth: true },
        component: () =>
            import ('../views/HomeView.vue')
    },
    {
        path: '/user',
        name: 'UserView',
        meta: { auth: true },
        component: () =>
            import ('../views/UserView.vue')
    },
    {
        path: '/department',
        name: 'DepartmentView',
        meta: { auth: true },
        component: () =>
            import ('../views/DepartmentView.vue')
    },
    {
        path: '/team',
        name: 'TeamView',
        meta: { auth: true },
        component: () =>
            import ('../views/TeamView.vue')
    },
    {
        path: '/expensive',
        name: 'ExpensiveView',
        meta: { auth: true },
        component: () =>
            import ('../views/ExpensiveView.vue')
    },
    {
        path: '/attendance',
        name: 'AttendanceView',
        meta: { auth: true },
        component: () =>
            import ('../views/AttendanceView.vue')
    },
    {
        path: '/setting',
        name: 'SettingView',
        meta: { auth: true },
        component: () =>
            import ('../views/SettingView.vue')
    },
    {
        path: '/role',
        name: 'RoleView',
        meta: { auth: true },
        component: () =>
            import ('../views/RoleView.vue')
    },
    {
        path: '/candidate',
        name: 'CandidateView',
        meta: { auth: true },
        component: () =>
            import ('../views/CandidateView.vue')
    },
    {
        path: '/candidatelist',
        name: 'CandidatelistView',
        meta: { auth: true },
        component: () =>
            import ('../views/CandidatelistView.vue'),
        children: [{
            // UserProfile will be rendered inside User's <router-view>
            // when /user/:id/profile is matched
            path: 'profile/:id',
            name: 'TestingComponent',
            component: () =>
                import ('../views/Testing.vue'),
            children: [{
                // UserProfile will be rendered inside User's <router-view>
                // when /user/:id/profile is matched
                path: 'upload',
                name: 'DocumentUpload',
                component: () =>
                    import ('../views/DocumentUpload.vue'),

            }, ]

        }, ]
    },
    // {
    //     path: '/candidatelist/testing/:slug',
    //     name: 'TestingComponent',
    //     meta: { auth: true },
    //     component: () =>
    //         import ('../views/Testing.vue'),

    // },
    {
        path: '/attendance',
        name: 'AttendanceView',
        meta: { auth: true },
        component: () =>
            import ('../views/AttendanceView.vue')
    },
    {
        path: '/interview',
        name: 'InterviewView',
        meta: { auth: true },
        component: () =>
            import ('../views/InterviewView.vue')
    },
    {
        path: '/assets',
        name: 'AssetsView',
        meta: { auth: true },
        component: () =>
            import ('../views/AssetsView.vue')
    },
    {
        path: '/interviewlist',
        name: 'InterviewList',
        meta: { auth: true },
        component: () =>
            import ('../views/InterviewList.vue')
    },
    {
        path: '/filter',
        name: 'FilterView',
        meta: { auth: true },
        component: () =>
            import ('../views/FilterView.vue')
    },
    {
        path: '/drop',
        name: 'DropdownView',
        meta: { auth: true },
        component: () =>
            import ('../views/DropdownView.vue')
    },
    {
        path: '/file',
        name: 'FileView',
        meta: { auth: true },
        component: () =>
            import ('../views/FileView.vue')
    },
    {
        path: '/trremove',
        name: 'remove',
        meta: { auth: true },
        component: () =>
            import ('../views/removetr.vue')
    },
    {
        path: '/schdule',
        name: 'InterviewSchduleView',
        meta: { auth: true },
        component: () =>
            import ('../views/InterviewSchduleView.vue')
    },
    {
        path: '/forinterview',
        name: 'ForinterView',
        meta: { auth: true },
        component: () =>
            import ('../views/ForinterView.vue')
    },
    {
        path: '/rounds',
        name: 'for rounds',
        meta: { auth: true },
        component: () =>
            import ('../views/InterviewRounds.vue')
    },
    {
        path: '/documents',
        name: 'documents',
        meta: { auth: true },
        component: () =>
            import ('../views/DocumentView.vue')
    },

]



const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

function isLogin() {
    return localStorage.getItem('token');
}
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.auth)) {
        (!isLogin()) ? next('/login'): next();
    } else if (to.matched.some(record => record.meta.guest)) {
        (isLogin()) ? next('/'): next();
    } else {
        next();
    }
})

export default router