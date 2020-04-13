var express = require('express')
var admin = require('../api/admin_query_api')

//creating the express router
var router = express.Router()

//routes
router.post('/new_certification', admin.newCertification)
router.post('/get_certifications_to', admin.getCertificationsTo)
router.post('/get_certifications_from', admin.getCertificationsFrom)
router.post('/get_certification_by_id', admin.getCertificationById)

//exports the router to main app
module.exports = router