const fs = require('fs')
const express = require('express')
const router = express.Router()

const content = require('../content/english.json') // TODO: Add multilanguage
const blogRepository = require('../repository/blog')

const home = require('./home')
const blog = require('./blog')
const about = require('./about')
const stats = require('./stats')
const admin = require('./admin')
const talks = require('./talks')
const social = require('./social')
const resume = require('./resume')
const contact = require('./contact')
const projects = require('./projects')
const newsletter = require('./newsletter')
const university = require('./university')

const comingSoon = function (req, res) {
  res.render('comingSoon')
}

const projectsRedirect = function (req, res) {
  res.redirect('/portfolio') // leave this, backwards compatibility
}

const feedbackRedirect = function (req, res) {
  res.redirect('/contact/feedback')
}

// Mounting more subroutes.

router.get('/', home) // Home shows about page
router.get('/coming', comingSoon) // Home shows about page
router.use('/about', about)
router.use('/blog', blog)
router.use('/portfolio', projects)
router.get('/projects', projectsRedirect)
router.use('/talks', talks)
router.use('/newsletter', newsletter)
router.use('/contact', contact)
router.use('/feedback', feedbackRedirect)
router.use('/social', social)
router.use('/admin', admin)
router.get('/stats', stats)
router.get('/university', university)
router.get('/resume/jorge_ferreiro_resume.pdf', resume)

module.exports = router
