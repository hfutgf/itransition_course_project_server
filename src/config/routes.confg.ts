const routes = {
    REGISTER: '/auth/register',
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    GET_ACCESS_TOKEN: '/auth/get-access-token',
    CRUD_USER: '/users',
    CURD_TEMPLATES: '/templates',
    SEARCH_TEMPLATES: '/templates-search',
    THEMES: '/template-themes',
    REMOVE_TEMPLATE_IMG: '/template-img/:templateId',
    CRUD_QUESTION: '/questions',
    UPDATE_QUESTIONS_ORDERS: '/questions-order',
    GET_QUESTION_TYPES: '/question-types',
    CRUD_OPTIONS: '/options',
    UPDATE_OPTIONS_ORDERS: '/options-orders/:questionId',
    CURD_FORM: '/forms',
    CRUD_ANSWER: '/answers',
    CRUD_ANSWER_OPTIONS: '/answer-options',
    CRUD_TEMPLATE_COMMENT: '/template/comments',
    CURD_TEMPLATE_LIKES: '/template/likes',
    CRUD_COMMENT_LIKES: '/comment/likes',
};

export default routes;
