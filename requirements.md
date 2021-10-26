
to-dos
======
[] GET for retrieving all records, including query parameters to allow filtering results
    [] getQuestionsByTags
    [x] getAllTags

[] GET for retrieving a single record by ID, including its related records in the response
    [x] getAllQuestions
    [x] getQuestionsById
    [] getUserQuestions
    [] getQuestionsByTags

[] POST for creating a single record
    [] addUser

[] POST for creating a record and a related record
    [] addOneQuestion
    [] addUserProfile

[] PUT/PATCH for updating a single record
    [] updateQuestionById
    [] updateProfile

[] DELETE for deleting a record by ID
    [] deleteQuestionById
    [] deleteProfile



frontend
========
[] Project must have frontend forms to create and update records
[] Frontend must have a feature to delete records
[] Frontend must use useEffect and useState hooks to load the initial state of the application
[] Frontend must have a filter or search feature that uses a combination of JS logic (e.g. array methods or loops) in a frontend component, and query parameters in the request to filter the displayed data
