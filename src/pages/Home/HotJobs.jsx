import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import HotJobsCard from './HotJobsCard';

const HotJobs = props => {
     const [jobs, setJobs] = useState([]);

     useEffect(() => {
          fetch('https://job-portal-27e9b.web.app/jobs')
          .then(res => res.json())
          .then(data => {
               setJobs(data);
          })
     }, [])
     return (
          <div className='grid grid-cols-4 gap-4'>
               {
                    jobs.map(job => <HotJobsCard key={job._id} job={job}></HotJobsCard>)
               }
          </div>
     );
};

HotJobs.propTypes = {
     
};

export default HotJobs;