/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/records              ->  index
 * POST    /api/records              ->  create
 * GET     /api/records/:id          ->  show
 * PUT     /api/records/:id          ->  upsert
 * PATCH   /api/records/:id          ->  patch
 * DELETE  /api/records/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import {Record} from '../../sqldb';

import {sequelize} from '../../sqldb';

import Promise from 'bluebird';

import util from 'util';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if(entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

function patchUpdates(patches) {
  return function(entity) {
    try {
      jsonpatch.apply(entity, patches, /*validate*/ true);
    } catch(err) {
      return Promise.reject(err);
    }

    return entity.save();
  };
}

function removeEntity(res) {
  return function(entity) {
    if(entity) {
      return entity.destroy()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if(!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Records
export function index(req, res) {
  return Record.findAll()
    .then(respondWithResult(res))
    .catch(handleError(res));
}



// Gets a single Record from the DB
export function show(req, res) {
  return Record.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Record in the DB
export function create(req, res) {
  return Record.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Upserts the given Record in the DB at the specified ID
export function upsert(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }

  return Record.upsert(req.body, {
    where: {
      _id: req.params.id
    }
  })
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Record in the DB
export function patch(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Record.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Record from the DB
export function destroy(req, res) {
  return Record.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}


export function colnames(req, res) {
  return sequelize.query('PRAGMA table_info(census_learn_sql)').spread((results, metadata) => {
    var names = results.map(it => it.name);
    return res.status(200).json(names);
  });
}

// Gets column stats
export function colstats(req, res) {
  var col = req.params.colname;
  var q1 = 'SELECT ":col" as name, count(*) as row_count, avg(age) as age_avg FROM census_learn_sql WHERE name is not null GROUP BY name ORDER BY row_count DESC'.replace(/\:col/g, col);
  var q2 = 'SELECT count(*) as skipped_count, sum(row_count) as row_count_sum FROM (:sub)'.replace(':sub', q1 + ' LIMIT -1 OFFSET 100');

  return Promise.all([
    sequelize.query(q1 + ' LIMIT 100'),
    sequelize.query(q2)
  ])
    .spread( (r1, r2) => {
       return res.status(200).json({records: r1[0], clipped: r2[0][0]});
    })
    .catch(handleError(res));
}
