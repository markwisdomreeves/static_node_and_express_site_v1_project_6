const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');


router.get('/:id', (req, res, next) => {
  let { projectID } = req.params;
  if (projectID >= projects.length) {
    next();
}

  const projectName = projects[projectID].project_name;

  // deconstructing data
  const {
    description,
    technologies,
    github_link,
    live_link,
    image_urls
} = projects[projectID];

  const projectData = {
    projectName,
    technologies,
    image_urls,
    description,
    github_link,
    live_link
};
  
  return res.render('project', {
    projectData
  });
});

module.exports = router;