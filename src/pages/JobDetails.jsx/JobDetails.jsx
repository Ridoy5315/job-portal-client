import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = props => {
     const job = useLoaderData();
     const {_id, title, location, category} = job;
     return (
          <div className='w-9/12 mx-auto'>
               <h3>{title}</h3>
               <p>{location}</p>
               <p>{category}</p>
               <Link to={`/jobApply/${_id}`} className='btn'>Apply Now</Link>
          </div>
     );
};

JobDetails.propTypes = {
     
};

export default JobDetails;